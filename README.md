# mixsoda-test
 
[MixSoda](https://yrm006.github.io/2022.06.11/)と接続するテスト用サーバープログラム

## 環境準備

1. MixSodaの環境でHTTP/HTTPSでコールバックされる環境を準備
2. [Deno](https://deno.land)をインストール

## 疎通確認用 simple

```
deno run -A simple.js
```
- IchigoJam で、IOT.OUT1、IOT.IN() してみる

## WBGTの値を返すサンプル wbgtserver

```
deno run -A wbgtserver.js
```
- IchigoJam で、IOT.IN() で福井市の観測したWBGT実況値が反る
- [wbgt-japan](https://github.com/code4fukui/wbgt-japan/)の[getWBGT.js](https://github.com/code4fukui/wbgt-japan/blob/main/getWBGT.js)を使用


