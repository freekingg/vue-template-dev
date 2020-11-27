# vue-template-dev

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### VSCode 配置 ESLint + Prettier 及修复

#### 依赖包

- `@vue/cli-plugin-babel`
- `@vue/cli-plugin-eslint`
- `@vue/eslint-config-airbnb`
- `prettier`
- `eslint`
- `eslint-plugin-vue`
- `eslint-plugin-prettier`
- `lint-staged`
- `husky`

#### vscode 插件

- ESLint
- Prettier - Code formatter
- Prettier ESLint

#### settings.json

根目录.vscode 文件夹下面 settings.json 文件，团队统一使用配置

```js
{
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "eslint.alwaysShowStatus": true,
  "eslint.format.enable": true,
  "eslint.packageManager": "yarn",
  "eslint.run": "onSave",
  "prettier.packageManager": "yarn",
  "eslint.validate": [
    "vue",
    "javascript",
    "javascriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "vetur.validation.template": false,
  "editor.formatOnPaste": true,
  "editor.formatOnType": true,
  "editor.formatOnSave": true,
  "files.eol": "\n"
}

```
