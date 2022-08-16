//const products = []; // array to store product data
//data in array will vanish once we restart server. To get data we should store it in Database or for now file.

const fs = require('fs'); // to store data in file.
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFromFile = (cb) => {
        fs.readFile(p, (err, fileContent) => {
            if(err) {
                return cb([]);
            }
            cb(JSON.parse(fileContent));
        });
}

module.exports = class {
    constructor(title) {
        this.title = title; //this.title is property which is getting value from title, both names can be different.

    }

//method to store data in products.
/*
    save() { 
        //products.push(this); //push product data into products. // this will refer to the object of the class(i.e, product)
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json'); //we first create path to use, then open products.json file
        fs.readFile(p, (err, fileContent) => { //read file on path p, then do something.
            let products = [];
            if(!err) {  // if error means there is no file, otherwise we read from json file 
                products = JSON.parse(fileContent);
            }
            products.push(this); //this will push the new object of class to array.
            
            fs.writeFile(p, JSON.stringify(products), (err) => { //finally we write updated content to file at same path p. as data in file is in json format we convert.
                console.log(err); //to get if any error occurs.
            }); 
        });
    }
    */
   save () {
        getProductsFromFile(products => {
            products.push(this); //this will push the new object of class to array.
            fs.writeFile(p, JSON.stringify(products), (err) => { 
            console.log(err); //to get if any error occurs.
        });
    });
}

//to fetch all data,
   // static fetchAll(cb) { // as we do not need any object so we make it static so that it can be called on the class.

// we will use helper function getProductsFromFile to implement this functionality
/*
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
        fs.readFile(p, (err, fileContent) => {
            if(err) {
                //return []; // this will give error "undefined reading length". as it is async function and JS will simply register callback and exit without executing and return will return undefined in both cases. 
                // to make it work, we register a callback cb and pass our result in that callback function.
                cb([]);
            }
            cb(JSON.parse(fileContent));
        });
    }
*/
    //}

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}