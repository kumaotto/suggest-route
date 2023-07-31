# setup

amplifyのセットアップ
```
// 認証情報を求められるので、入力する
amplify init 
```

policyやマップなどを作成する
```
amplify add geo

設定は以下
✔ geo category resources require auth (Amazon Cognito). Do you want to add auth now? (Y/n) · yes
Do you want to use the default authentication and security configuration? Default configuration
✔ Who can access this Map? · Authorized and Guest users
✔ Do you want to configure advanced settings? (y/N) · no
```

検索機能を追加するために、Location searchを入れる
```
amplify add geo

? Select which capability you want to add: Location search (search by places, addresses, coordinates)
✔ Provide a name for the location search index (place index): · placeIndexhoge
✔ Who can access this search index? · Authorized and Guest users
Available advanced settings:
- Search data provider (default: HERE)
- Search result storage location (default: no result storage)
```


設定を繁栄させる
```
amplify push -y
```

react-scriptsがないと言われたらinstall
```
npm i react-scripts
```
