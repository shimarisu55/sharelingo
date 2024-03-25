# 環境構築
// ファイル作成  
```
mkdir {ファイル名}/src/sharelingo/  
cd {ファイル名}/src/sharelingo/  
git init  
git clone git@github.com:shimarisu55/sharelingo.git 
``` 

// Dockerのフォルダから必要なファイルを外だししてDockerを使えるように設定  
```
cp {ファイル名}/src/sharelingo/Docker/docker-compose.yaml {ファイル名}/  
cp {ファイル名}/src/sharelingo/Docker/Dockerfile {ファイル名}/ 
```

// dockerスタート
```
cd {ファイル名}
docker-compose build  
docker-compose up -d  
docker logs {コンテナ名}  ←　エラーの原因を探る  
```

// docker-compose.yamlの以下の行をいったんコメントアウト
```
command: sh -c "cd sharelingo && yarn start"　←　yarn startができなくておこられるはず   
```

// wslの時刻同期　（やらないとamplify pushするときにエラーになります）  
```
sudo ntpdate ntp.nict.jp  
```

// コンテナに入る  
```
docker exec -it {コンテナ名} bash  
cd sharelingo  
```

// amplifyのiamユーザーのcredentials情報をもらう  

// gitignore対象のファイル作成  
```
{ファイル名}/src/sharelingo/.env.development  
{ファイル名}/src/sharelingo/src/invitationEnv.json  
```

// サーバーに入り、以下のコマンドをたたく
```
rm -rf node_modules  
rm -rf yarn.lock  
yarn install  
```
// いろいろファイルがないと怒られるはず  

// amplify 設定  
```
amplify configure  
amplify pull --appId {自分のappId} --envName dev  
// いろいろ言われるが全部enterで  
amplify codegen add  
amplify codegen ←　ampify関連のファイルを作成  
```

```
yarn start  
```
http://localhos:3000 にアクセス
// 問題がなかったらdocker-compose.yamlのコメントアウト行を元に戻す

# 新しくライブラリを入れたいとき

// コンテナ内で　
```
cd sharelingo  
yarn add ~  
```
DockerFileに記入し、docker-compose build  

# コンテナ終了
```
docker-compose down -v  
```

# 本番環境にpush
```
amplify env checkout prod
amplify push
amplify publish
```

# git
```
cd {ファイル名}/src/sharelingo  
git push origin main  
```