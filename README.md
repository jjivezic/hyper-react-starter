# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Node version v14.17.6

This app is tested and working with some of node 14 versions (v14.17.6)
First in terminal select version with 

### nvm use v14.17.6

After that Install node packages with npm not with YARN (there is some issues with yarn )

### npm install

After instaling node packages you need to install husky

### npx husky install


### Importing files path

Now path are abolute and insted for exmple

import Navbar from '../../components/navbar'
import icon from '../../../assets/images/icons/actionBar/close.svg'

you shoudl insert them like this 

import Navbar from 'components/navbar'
import icon from 'assets/images/icons/actionBar/close.svg'


### Eslint and prettier

Eslint and prettier in combination with husky will not allow you to commit code if is not written by rules of
 https://standardjs.com/ and https://prettier.io/docs/en/editors.html

 ### DONT USE git commit --no-verify to Skip Git commit hooks 

To be able visual to see error in code install Eslint in VS code and you will see your errors in red.
You can also install prettier in VS code.


This two commands format all files in project with this extension in brackets
### "format": "prettier --write src/**/*.{js,jsx,ts,tsx,json}",
### "formatCss": "prettier --write src/**/*.{scss,css}",

This first one will show you error in terminal and tell you what to fix in js files.
This second one should fix error in js files.
I dont use this automatic fix:lint because it is for all js files and there is some problem when you have useEffect and useCallback. Need to investigate this. 
### "test:lint": "eslint src --ext .js",
### "fix:lint": "eslint --fix src --ext .js",