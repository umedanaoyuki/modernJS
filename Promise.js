//非同期処理をシンプルに扱うのがPromise

//Promiseコンストラクタ基本構文
const statements = (resolve, reject) => {
    // resolve() 成功を通知するための関数
    // reject() 失敗を通知するための関数
}
//Promiseインスタンスを作成
const promise = new Promise(statements)

