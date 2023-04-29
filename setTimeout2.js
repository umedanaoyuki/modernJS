//setTimeoutの別な使い方
const sampleCallbaclFunc = () => {
    console.log('最初');

//setTimeout関数の第1引数に渡したコールバック関数を0ミリ秒後に実行
setTimeout( () => console.log('中盤'), 0);

console.log('最後');
}

//関数の実行
sampleCallbaclFunc();

//中盤がタイマー処理の実行中に,[最後]が非同期処理の実行
