const path = require('path'); // node의 path모듈 - 경로를 다룰 때 사용
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'wordreplay-setting',
    mode: 'development', // 실서비스: production
    devtool: 'eval',
    resolve: {
      extensions: ['.js', '.jsx']  
    },
    
    // 중요
    entry: { // 웹팩설정 입력
        app: ['./client'], // client.jsx안에서 이미 WordRelay.jsx를 불러오고 있기 때문에 WordRelay.jsx는 안적어도 됨
    }, 

    module: { // 엔트리에 있는 파일을 읽고 모듈을 적용 후 아웃풋으로 뺀다
        rules: [{ // 여러개의 규칙을 적용할 수 있음(배열)
            test: /\.jsx?/, // .js, .jsx로 끝나는 babel이 컴파일하게 할 모든 파일
            loader: 'babel-loader', // babel loader가 파이프를 통해 js 코드를 불러옴
            options: { // 바벨의 옵션
                presets: [ // 플러그인들의 모임
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 1% in KR'], // borowserlist
                        },
                        debug: true,
                    }], 
                    '@babel/preset-react'], 
                plugins: [
                    '@babel/proposal-class-properties',
                    'react-refresh/babel',
                ],
            },
        }], 
    },

    plugins: [
        new RefreshWebpackPlugin()
    ],

    output: { // 웹팩설정 출력
        path: path.join(__dirname, 'dist'), 
        // .join - 경로를 알아서 합쳐줌(인자로 받은 경로들을 하나의 문자열 형태로 리턴)
        //  __dirname - file 명을 제외한 절대 경로
        // 즉 현재폴더 안의 /dist 경로를 말한다
        filename: 'app.js',
        publicPath: '/dist',
    },

    devServer: {
        devMiddleware: { publicPath: '/dist' },
        static: { directory: path.resolve(__dirname) },
        hot: true
    },
};