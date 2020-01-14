<p align="center">
  <img src="src/images/logo_elastic.png" width="60"  alt="Elastic Logo"/>
</p>

<h1 align="center">
  Elastic's Next.js EUI Starter
</h1>

Jump right in to building Kibana prototypes with [EUI](https://github.com/elastic/eui).

## 🚀 Quick start

1.  **Install yarn**

    This starter expects to use [yarn](https://yarnpkg.com/) to manage
    dependencies, so go install it.

1.  **Copy the Next.js starter**

    Clone the repository:

    ```sh
    git clone https://github.com/elastic/next-eui-starter.git my-eui-starter
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-eui-starter/

    # Install depdendencies.
    yarn

    # Optional: start a new git project
    rm -rf .git && git add . && git commit -m "Initial commit"

    # Start the dev server
    yarn dev
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:3000`!

    Open the `my-eui-starter` directory in your code editor of choice and edit `src/pages/index.tsx`. Save your changes and the browser will update in real time!

1. **Deploy your site**

    When you're ready to deploy and share, you can use the provided `yarn deploy` script to do so.

    1. Modify the `pathPrefix` option in `gatsby-config.js` to reflect the name of your repo
    1. Setup a `gh-pages` branch in your repo and ensure that its enabled in the repository settings.
    1. Deploy with `yarn deploy`
    1. Access your site at https://your-username.github.io/repo-name

---

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in this project.

    .
    ├── node_modules
    ├── src
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierrc
    ├── next.config.js
    ├── LICENSE
    ├── package.json
    ├── tsconfig.json
    ├── yarn.lock
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.eslintrc.js`**: This file configures [ESLint](https://eslint.org/), which will check the code for potential problems and style issues. It also integrates with Prettier for formatting.

4.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

5.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

6.  **`next.config.js`**: This file customizes the Next.js build process so that it can with with EUI.

7.  **`LICENSE`**: Gatsby is licensed under the MIT license.

8.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This
 manifest is how npm knows which packages to install for your project.

9.  **`yarn.lock`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm
 dependencies that were installed for your project. **(You won’t change this file directly).**

10. **`tsconfig.json`**: This file configures the [TypeScript](https://www.typescriptlang.org/) compiler

11. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Next.js

Looking for more guidance? Full documentation for Next.js lives [on the website](https://nextjs.org/). You probably want to being by following the [Getting Started Guide](https://nextjs.org/learn/basics/getting-started).