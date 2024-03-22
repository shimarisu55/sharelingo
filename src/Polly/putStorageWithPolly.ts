import { StartSpeechSynthesisTaskCommand,
    StartSpeechSynthesisTaskCommandInput,
    StartSpeechSynthesisTaskCommandOutput,
    PollyClient } from "@aws-sdk/client-polly";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import { fetchAuthSession } from "aws-amplify/auth";
    
const REGION = process.env.REACT_APP_REGION ?? "";
const backetName = process.env.REACT_APP_STORAGE_NAME ?? "";
const identityPoolId = process.env.REACT_APP_IDENTITY_POOL_ID ?? "";
const userPoolId = process.env.REACT_APP_USER_POOL_ID ?? "";
const userPoolUrl ='cognito-idp.' + REGION + '.amazonaws.com/' + userPoolId;
const storagePath = 'https://s3.' + REGION + '.amazonaws.com/' + backetName + '/public/';

export const putStorageWithPolly = async (text:string) => {
  const idToken = (await fetchAuthSession()).tokens?.idToken ?? "";
  // cognitoからcredentialsを取得
  const credentials = fromCognitoIdentityPool({
    identityPoolId: identityPoolId,
    logins: {
      [userPoolUrl]: idToken.toString(),
    },
    clientConfig: { region: REGION },
  });
  
  const pollyClient = new PollyClient({ region: REGION, credentials });
  let change_br_text = text.replace(/\n/g, '<break time="1s"/>');
  let ssml_text = `<speak> ${change_br_text} </speak>`

  const params = {
    Engine: "standard",
    OutputFormat: "mp3",
    OutputS3BucketName: backetName,
    OutputS3KeyPrefix: "public/",
    Text: ssml_text,
    TextType: "ssml",
    VoiceId: "Emma",
  } as StartSpeechSynthesisTaskCommandInput

  try {
    const response: StartSpeechSynthesisTaskCommandOutput 
    = await pollyClient.send(new StartSpeechSynthesisTaskCommand(params));
      console.log("Success, audio file added to " + params.OutputS3BucketName);
      const url: string = response.SynthesisTask?.OutputUri ?? "";
      const soundName = url.slice(storagePath.length);
      return soundName
  } catch (err) {
    console.log("Error putting object", err);
    return ""
  }
};
