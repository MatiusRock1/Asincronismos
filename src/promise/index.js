
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
