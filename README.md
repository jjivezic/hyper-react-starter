# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Install

Install with "npm install" not with Yarn (there is some issues with yarn )

### Install husky
npm install husky --save-dev
Enable Git hooks
npx husky install
Create hook
npx husky add .husky/pre-commit "lint-staged"
git add .husky/pre-commit

* if not working check path in /.husky pre-comit file should be ./node_modules/.bin/lint-staged instead lint-staged 