# mixsoda-test
 
[MixSoda](https://mixsoda.shizentai.jp/)と接続するテスト用サーバープログラム

## 環境準備

1. MixSodaの環境でHTTP/HTTPSでコールバックされる環境を準備
2. [Deno](https://deno.land)をインストール
3. 下記を動かす

## 疎通確認用 simple

```sh
deno run -A https://ichigojam.github.io/mixsoda-test/simple.js
```
- IchigoJam で、IOT.OUT1、IOT.IN() してみる

## データ送信

```sh
deno run -A https://ichigojam.github.io/mixsoda-test/send_cli.js [value] [token] (iccid)
```
MixSodaに4byte整数を送る（iccid省略で全MixSodaに送信）

## WBGTの値を返すサンプル wbgtserver

```sh
deno run -A https://ichigojam.github.io/mixsoda-test/wbgtserver.js
```
- IchigoJam で、IOT.IN() で福井市の観測したWBGT実況値が反る
- [wbgt-japan](https://github.com/code4fukui/wbgt-japan/)の[getWBGT.js](https://github.com/code4fukui/wbgt-japan/blob/main/getWBGT.js)を使用
