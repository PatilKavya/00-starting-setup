const fs=require('fs');
const path=require('path');

const p=path.join(path.dirname(process.mainModule.filename),'data','products.json');

const helperFunction=(cb)=>{
    
    fs.readFile(p,(error,fileContent)=>{    
        if(error){
            cb([]);
        }
        else{
            cb(JSON.parse(fileContent))

        }
    })
}


module.exports = class Product {
    constructor(t) {
        this.title=t;
    }

    save() {
       helperFunction(products=>{
        products.push(this);  
        fs.writeFile(p,JSON.stringify(products),(err)=>{
            console.log(err)
       })
        })
     }  
    

    static fetchAll(cb) {
        helperFunction(cb)
    }
}