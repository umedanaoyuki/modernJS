
const promise = new Promise((resolve, reject) => {
    resolve("");
    reject("");
})

const inCaseOfSucces = () => {
    console.log("非同期の処理が成功し、resolveが通知された");
}

const inCaseOfFailure = () => {
    console.log("非同期の処理が失敗し、rejectが通知された");
}

promise.then(inCaseOfSucces, inCaseOfFailure)