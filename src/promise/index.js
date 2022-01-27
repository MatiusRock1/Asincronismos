
const somethingWillHapped = () => {
    return new Promise( (resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whoops!');
        }
    });
};

somethingWillHapped()
.then(Response => console.log(Response))
.catch(err => console.log(err));

const somethingWillHapped2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Whooop');
            reject (error);
        }
    });
}
somethingWillHapped2()
.then(Response => console.log(Response))
.catch(err => console.log(err));

Promise.all([somethingWillHapped(), somethingWillHapped2()])
.then(Response => {
    console.log("Array of results", Response)
})
.catch(err => {
    console.log(err)
});
