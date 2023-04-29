　//await構文

// awaitは　　aysnc funtionの中でのみ利用可能
// Promiseの状態の通知（resolve,reject）が返されるまで処理を停止して待機して、Promiseの状態変更の通知を受け取ったら処理を再開

const sampleAyncFunc = async () => {

    //Promiseの状態が変わるまで待機
    await Promise　インスタンス

    //Promiseの状態が変わると次の処理を再開
}
