
import { Predictions } from '@aws-amplify/predictions';

export const playBackWithPolly = async (text:string) => {
  // Polly 再生
  const playBackPolly = () => {
    Predictions.convert({
      textToSpeech: {
        source: {
          text: text
        },
        voiceId: "Emma"
      }
    })
    .then(result => {
      const audio = new Audio(result.speech.url) 
      audio.play()
    })
    .catch(err => alert(JSON.stringify({err}, null, 2)));
  }
  playBackPolly();
};
