## Version: 2.0.0 (May 4th 2024)

## Main packages

#### - react (18.3.1)

#### - react-dom (18.3.1)

#### - typescript (5.4.5)

## Linters

1. If you use VSCode, you need several extensions:

    - ESLint
    - Prettier
    - Stylelint

2. Also, you need add to your VSCode settings some rules:

```json
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit",
        "source.fixAll.stylelint": "explicit"
    },
    "stylelint.validate": ["javascript", "typescript"],
    "stylelint.customSyntax": "postcss-styled-syntax",
    "prettier.stylelintIntegration": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        "typescript",
        "typescriptreact"
    ],
    "eslint.enable": true,
```
