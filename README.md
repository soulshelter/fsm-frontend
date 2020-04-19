# FSM-FRONTEND

이 프로젝트는 [Create React App](https://github.com/facebook/create-react-app)로 생성되었습니다.   
TypeScript, React, React-Router, React-Redux, SCSS, Material UI를 사용하였습니다.

## File Structure

```
fsm
│
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── assets
    │   ├── css
    │   │   ├── fsm.css
    │   │   ├── fsm.css.map
    │   │   └── fsm.min.css
    │   ├── jss
    │   │   └── CSS in JS // 사용하지 않을 수도 있음.
    │   ├── img
    │   └── scss
    │       ├── core
    │       ├── plugins
    │       └── fsm.scss
    ├── components
    │   ├── Header
    │   │   └── Header.tsx
    │   ├── Footer
    │   │   └── Footer.tsx
    │   └── ...
    ├── store
    ├── routes.tsx
    ├── index.tsx
    ├── logo.svg
    └── views
        ├── LoginPage.tsx
        ├── DashboardPage.tsx
        └── ...

```

## JSON-SERVER
```
$ npx json-server ./data.json --port 4000
```

## Get-Start
yarn add classnames node-sass 설정
tsconfig.json 에 baeUrl 추가
```
    "baseUrl": "src",
```
index.html에 fontawesome 추가
```
  <link href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" rel="stylesheet" />
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
