# React - Babel and WebPack

React CSS 예제. Babel과 WebPack 사용 이해하기.

## Step1

웹 브라우저는 JSX를 해석할 수 없다보니 에러가 발생한다. JSX 대신 createElement함수로 HTML 태그를 작성해야 한다. 

다음은 h1 태그에 Hello React Web! HTML 요소를 만드는 코드다.

```
const e = React.createElement;
e('h1', null, 'Hello React Web!');
```

JSX 없이 React Web을 작성하는 문서다. [링크](https://reactjs.org/docs/react-without-jsx.html)

## Step2

Babel을 이용해서 JSX로 작성한 코드를 변환한다.

관련 모듈 설치

```
$ npm install --dev @babel/core @babel/cli @babel/preset-react
```

Babel을 이용해서 JSX를 포함한 js를 변환하기

```
$ npx babel index.js -o index.prod.js --presets @babel/preset-react
```

옵션

  - o : out-file
  - presets : 변환 규칙

보다 React Web 프로젝트에는 다수의 js 파일이 있다보니 적절한 폴더 구조를 만든다. src 폴더에 JSX로 작성한 js를 작성한다.

```
$ npx babel src -d . --presets @babel/preset-react
```

이제 src 폴더에 작성한 JSX를 포함한 js는 html이 있는 폴더로 변환된다.

옵션

  - d : out-dir ( -d, --outdir )


package.json의 scripts에 등록해서 사용하기

```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "npx babel index.js -o index.prod.js --presets @babel/preset-react"
},
```
package.json에 작성한 스크립트 실행하기

```
$ npm run build
```

소스 코드가 변경될 때마다 babel을 이용해서 코드 변환을 해야하는 단점이 있다. Babel의 watch를 이용하면 소스 코드가 변경되면 자동으로 변환하도록 할 수 있다.

```
$ npx babel -w src -d . --presets @babel/preset-react
```

옵션

  - w : watch ( -w, --watch ), 변경 감시

## Step3

보통 JSX 컴포넌트를 별도의 파일로 작성하고 import해서 사용한다.

### 상황

js 파일을 index.js와 App.js로 분리하면 import가 안되는 문제가 발생한다. Babel 만으로 해결이 안되는 상황이다.

src/index.js
```
import App from './App';

ReactDOM.render(<App />, document.getElementById('root') ); 
```
src/App.js

```
const App = () => {
    return (
        <h1>Hello React Web with Babel, WebPack, Step3!</h1>
    )
}

export default App;
```

### 패키징

Babel을 이용해서 변환하고 WebPack을 이용해서 하나의 js로 패키징한다.

``` 
$ npx babel src -d dist --presets @babel/preset-react
$ npx webpack --entry ./dist/index.js --output main.js --mode development 
```

npx webpack -o main.js

옵션 
  - entry : 시작 js
  - output : output path and file(-o, --output)

### config 파일

config 파일을 이용해서 관련된 작업을 한번에 처리한다.

webpack.config.js
```
const webpack = require('webpack');

module.exports = {
    mode: 'development', // 'production'
    entry: __dirname + '/dist/index.js',
    output: {
        path: __dirname,
        filename: 'main.js'
    }
}
```

config 파일을 만들면 다음과 같이 webpack을 실행할 수 있다.

```
$ npx webpack
```

아직 Babel을 이용한 변환 과정이 별도로 필요하다.

### Babel과 결합

webpack을 이용해서 패키징을 하면서 Babel이 자동으로 동작하게 해보자. Babel-loader가 필요하다.

[Babel-Loader](https://webpack.js.org/loaders/babel-loader/#root)

다음과 같이 babel-loader와 @babel/preset-env를 설치한다.

```
$ npm install --dev-only babel-loader
```

이제 webpack용 설정 파일(webpack.config.js)는 다음과 같다.

```
const webpack = require('webpack');

module.exports = {
    mode: 'development', // 'production'
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                include: __dirname + '/src', // absolute path 필요
                use: {
                    loader: 'babel-loader',
                    options: {                        
                        presets: ['@babel/preset-react']
                    }
                }
            }
        ]
    }
}
```
이제 webpack을 한 번만 실행시켜도 babel과 webpack이 모두 동작한다.

```
$ npx webpack
```

` 개발 과정에서 코드 편집하고 webpack 실행하는 귀찮음을 감수하느니 개발 서버를 이용하자. `
