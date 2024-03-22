FROM node:21

# 必要なパッケージをインストールします。
#RUN sh -c "npm install -g create-react-app && create-react-app sharelingo --template typescript"
RUN npm install -g @aws-amplify/cli
RUN yarn add @aws-amplify/ui-react aws-amplify
RUN yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material
RUN yarn add @aws-amplify/predictions
RUN yarn add @aws-sdk/client-polly @aws-sdk/credential-providers