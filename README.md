# setup

amplifyのセットアップ
```
// 認証情報を求められるので、入力する
amplify init 
```

policyやgeoなどを作成する
```
amplify add geo

設定は以下
✔ geo category resources require auth (Amazon Cognito). Do you want to add auth now? (Y/n) · yes
Do you want to use the default authentication and security configuration? Default configuration
✔ Who can access this Map? · Authorized and Guest users
✔ Do you want to configure advanced settings? (y/N) · no
```

設定を繁栄させる
```
amplify push -y
```

react-scriptsがないと言われたらinstall
```
npm i react-scripts
```
