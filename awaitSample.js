//await具体例
const asyncFuncWaitingtest = async (num) => {

    return new Promise(
        (resolve) => {
            setTimeout(() => {
                resolve(`${num}番目のasyncFuncWaitingTest`);
                // (num) => console.log(num)は 上のresolve以下を表示するための式
            }, 1000 * num);}).then(console.log("テスト")).then((num) => console.log(num));
};

//awaitがついているので、上から順番に実行されていく
const asyncTestFunc = async () => {
    console.log('1番目の処理');
    await asyncFuncWaitingtest(1);
    console.log('2番目の処理');
    await asyncFuncWaitingtest(2);
    console.log('3番目の処理');
    await asyncFuncWaitingtest(3);
}

asyncTestFunc();