
const promise = new Promise((resolve, reject) => {
    resolve();
})

const inCaseOfSucces = () => {
    console.log("非同期の処理が成功し、resolveが通知された!!!");
}

const inCaseOfFailure = () => {
    console.log("非同期の処理が失敗し、rejectが通知された");
}

promise
.then(inCaseOfSucces)
.catch(inCaseOfFailure)
.finally(() => console.log('処理が成功しても失敗しても実行される'))