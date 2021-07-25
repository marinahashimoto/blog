---
title: Gatsby + GitHub Pages + GitHub Actions で個人ブログを作った
date: "2021-07-25T00:00:00.000Z"
tag: ["gatsby", "github pages", "github actions"]
---

## なぜ作ろうと思ったか

アウトプット三日坊主を克服したいと思い立ち、ブログを作りました。

技術でも日常のことでも自由に書ける空間がとりあえず欲しかったので、個人ブログを立ち上げてみることにしました。

## なぜ Gatsby を選んだか

Gatsby は React ベースの SSG(静的サイトジェネレータ)フレームワークです。

[Gatsby 公式サイト](https://www.gatsbyjs.com/)

最近業務で React Native を触り始めたので、React を勉強しつつ色々カスタマイズできたらいいなと思い、Gatsby を選択しました。

## 作成手順

### ローカルにプロジェクトを作成

- ブログ用のスターター(テンプレート)を使って、ローカルにプロジェクトを作成します。

スターターは一番シンプル&スターが多かった gatsby-starter-blog をチョイスしました。  
[gatsbyjs/gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog)

```bash
// gatsby-cliのインストール
$ npm i -g gatsby

// プロジェクトの作成
$ gatsby new my-blog-starter https://github.com/gatsbyjs/gatsby-starter-blog

$ cd my-blog-starter
```

### 内容の編集

- ブログのタイトルや author, twitter アカウントあたりを編集。初期値は以下のようになっています。

```js
// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Blog`,
    author: {
      name: `Kyle Mathews`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    social: {
      twitter: `kylemathews`,
    },
  },
```

- 記事データは`/content/` ディレクトリ内にあります。新しく記事を書くときには、このディレクトリにファイルを追加していきます。  
  デモ用の記事が入っているので、編集もしくは削除しておくのも忘れないこと。

- プロフィール画像は `./src/images/profile-pic.png`を差し替えます。もしくは `./src/components/bio.js`で画像パスを書き換えます。

- ファビコン画像は `./src/images/gatsby-icon.png`を差し替えます。もしくは `./gatsby-config.js` で画像を指定しているパスを書き換えます。

```js
// gatsby-config.js

plugins: [
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Gatsby Starter Blog`,
      short_name: `GatsbyJS`,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/gatsby-icon.png`, // これ
    },
  },
]
```

- ローカルでビルドして確認。

```bash
$ gatsby develop
```

上手くいっていれば `http://localhost:8000` で確認できます。

## GitHub Pages にデプロイする

- リポジトリを作成します。  
  今回は`github.io`のサブドメインを使いたかったので、`{gituhubユーザー名}/github.io`の名前でリポジトリを作成しました。

  [marinahashimoto/marinahashimoto.github.io](https://github.com/marinahashimoto/marinahashimoto.github.io)

- main ブランチはビルド時に public フォルダ内の公開ファイルが Push されるので、Gatsby 本体のソースは別ブランチ(今回は source)に Push します。  
  もし間違えて Gatsby 本体を main に Push してしまっても、ビルド時に自動的に main から不要なファイルは削除されるので、落ち着いて別ブランチを切れば問題ないです。

```bash
$ git init
$ git checkout -b source
$ git add .
$ git commit -m "gatsby first setting"
$ git push origin source
```

- ローカルでコマンドを叩いてビルド&公開します。

```bash
gatsby build && gh-pages -d public -b main
```

## GitHub Actions で Push 時に自動デプロイする

- アクションを定義する yaml ファイル`./.github/workflows/gh-pages.yml` を作成します。

```yml
name: GitHub Pages

on:
  push:
    branches:
      - source
  pull_request:

jobs:
  deploy:
    runs-on: ubuntu-20.04
    concurrency:
      group: ${{ github.workflow }}-${{ github.ref }}
    steps:
      - uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: "12"

      - name: Cache dependencies
        uses: actions/cache@v2
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-

      - name: Install dependencies
        run: yarn install --frozen-lockfile

      - name: Run build for GitHub Pages
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
          publish_branch: main
```

- これでローカルでコマンドを叩かなくても source ブランチに Push するたびに、自動デプロイが走ります。

## 少しカスタマイズする

### 日本語フォントに Google Font を適用する

スターターのままだと日本語フォントがいまいちなので、Google Font をプラグインで入れました。  
[Gatsby 公式 Google フォントの導入方法](https://www.gatsbyjs.com/docs/recipes/styling-css/#using-google-fonts)

### Google Analytics を導入

gatsby-starter-blog で作成していれば既にプラグインがインストールされているので、トラッキング ID だけ入れれば OK。

```
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
```

## まとめ

Gatsby でのブログ作成、トータル 2 時間ぐらいで作れてお手軽でした。
css、独自ドメインなどのカスタマイズは追々やっていきたい所存です。タグ表示とかしたいな。

## Reference list

- [Gatsby と Netlify（と AWS Route53）を使って 30 分でブログを作る](https://zenn.dev/tossy_yukky/articles/3681a314b3f6ef86a4cf)
- [Gatsby + GitHub Pages でブログを構築](https://suzukalight.com/blog/posts/2019-06-29-hello-world)
- [Gatsby のサイトを GitHub Actions で GitHub Pages にデプロイ](https://qiita.com/peaceiris/items/2f6d83802f2aefa66f9d)
