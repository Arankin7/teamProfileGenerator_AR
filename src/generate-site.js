const fs = require('fs');
const {reject} = require('assert');
const {resolve} = require('path');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err=>{
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File Created'
            });
        });
    });
};

const copyFile = function(){
    return new Promise((resolve, reject) =>{
        fs.copyFile('./src/style.css', './dist/style.css', err =>{
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Style Sheet Copied Successully'
            });
        });
    });
};

module.exports = { writeFile, copyFile};