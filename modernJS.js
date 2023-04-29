//非同期処理
console.log("非同期処理");

const callbackFunc = () => console.log('処理が実行されました');

//500ミリ秒後に1度だけ処理が実行される
setTimeout(callbackFunc, 500);
　console.log('callback関数の前に実行される');