# Modelo de projeto ReactJS

# React + TypeScript + Vite + SWC

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

Este projeto é um modelo básico para aplicações que utilizem ReactJS.

## Como utilizar o projeto?

1. Clone o projeto.
2. Entre no diretório do projeto: `cd front-react`
3. Instale as dependências: `npm install`
4. Faça uma copia do arquivo .env.example e renomeie para .env.
5. preecha o arquivo .env com as informações necessárias.
6. Execute o projeto: `npm run dev`
7. Abra o navegador e acesse a URL: `http://localhost:3000`

## Como fazer build do projeto?

1. Clone o projeto.
2. Entre no diretório do projeto: `cd front-react`
3. Instale as dependências: `npm install`
4. Faça uma copia do arquivo .env.example e renomeie para .env.
5. preecha o arquivo .env com as informações necessárias.
6. Execute o build do projeto: `npm run build`
7. os arquivos criados serão armazenados no diretório `dist`

## Variáveis de ambiente

As variáveis de ambiente devem ser preenchidas seguindo o formato indicado na documentação do ViteJs
*[https://vitejs.dev/guide/env-and-mode.html](https://vitejs.dev/guide/env-and-mode.html)*
devem possuir um prefixo `VITE_`
como por exemplo, a variável `VITE_API_URL` que contem o endereço do servidor da API.

As variáveis de ambiente ficam disponiveis na aplicação como `import.meta.env.VITE_NOME_DA_ENV`
por exemplo, a variável `VITE_API_URL` é acessada na aplicação como `import.meta.env.VITE_API_URL`

Apos a transpilação, as variáveis de ambiente são transformadas em textos estáticos.

## Estrutura de arquivos

`src/assets/`: 
Armazena os arquivos estáticos, como por exemplo imagens e fontes.

`src/components/`: 
Armazena os componentes da aplicação, como por exemplo o `Footer` ou o `Header`.
componentes comuns a diferentes paginas devem ser colocados no diretório `src/components/common`

`src/pages/`: 
Armazena as páginas da aplicação, como por exemplo o `Home` ou o `About`.
paginas internas devem seguir a estrutura hierarquica seguindo a ordem a partir da página superior, como por exemplo `User/Profile`
deve ser criado um diretório `src/pages/User` e um arquivo `Profile.jsx` dentro do diretório `src/pages/User`

`src/providers`: 
Os providers são interfaces de comunicação com apis externas, contem funções estruturadas para executar requisições.
providers especificos devem extender a classe AxiosProvider.

`src/redux`:
Armazena a store e os reducers da aplicação.
os reducers devem ser colocados no diretório `src/redux/reducers`

`src/routes`:
Armazena as rotas da aplicação.

`src/styles`:
Armazena os arquivos de estilo da aplicação.

## Links uteis

*[Curso de ReactJS: https://www.youtube.com/watch?v=mq-mM8UdEDM](https://www.youtube.com/watch?v=mq-mM8UdEDM)*

*[ViteJs: https://vitejs.dev/guide/features.html](https://vitejs.dev/guide/features.html)*

*[ReactJS: https://reactjs.org/](https://reactjs.org/)*

*[scss: https://sass-lang.com/](https://sass-lang.com/)*

*[react-router: https://reactrouter.com/docs/en/v6](https://reactrouter.com/docs/en/v6)*

*[redux: https://react-redux.js.org/introduction/
getting-started](https://react-redux.js.org/introduction/getting-started)*

*[EsLint: https://eslint.org/](https://reactjs.org/)*