# Cordova でリモート HTML からネイティブ機能を利用するテスト

```
git clone https://github.com/moqada/cordova-remote-content-example.git
```

ライブラリインストール

```
npm install -g cordova
brew install ios-sim
```

サーバ起動

```
cd cordova-remote-content-example/www_remote
python -m SimpleHTTPServer
```

エミュレータ起動

```
cd cordova-remote-content-example/www_remote
cordova emulate ios -d
```
