# 環境構築
git clone

// Dockerのフォルダから必要なファイルを外だししてDockerを使えるように設定
・docker-compose.yaml
・Dockerfile

// amplifyのiamユーザーのcredentials情報をもらう

// gitignore対象のファイル作成
.env.development
invitationEnv.json

// Dockerにてコンテナ作成
docker-compose build
docker-compose up -d　←　http:/localhost:3000確認

// wslの時刻同期　（やらないとamplify pushするときにエラーになります）
sudo ntpdate ntp.nict.jp

// コンテナに入る
docker exec -it ShareLingo bash
cd sharelingo

// amplify 設定
amplify configure
amplify pull --appId {自分のappId} --envName dev
amplify codegen add
amplify codegen ←　ampify関連のファイルを作成

# 新しくライブラリを入れたいとき

// コンテナ内で　cd sharelingo 
yarn add ~
DockerFileに記入し、docker-compose build

# コンテナ終了
docker-compose down -v

# 本番環境にpush

