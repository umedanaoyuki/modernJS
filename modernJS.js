//非同期処理の学習

console.log('最初に実行');

//callback関数
const callbackFunc = () => console.log('処理が実行されました');

//500ミリ秒後に1度だけ処理が実行される
setTimeout(callbackFunc, 500);
　console.log('callback関数の前に実行される');