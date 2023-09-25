const fs = require('fs');

export const loadFile = function(fileName){
    fs.readFileSync(fileName,'utf-8',(err,data)=>{
        if(err) {
            console.log(err);            
            return false;
        }
        return data;
    });
}

export const loadJSONData = function(fileName){
    fs.readFileSync(fileName,'utf-8',(err,data)=>{
        if(err){
            console.log(err);
            return false;
        }
        return JSON.parse(data);
    });
}

export const saveJSONData = function(fileName,data){
    try{
        fs.writeFileSync(fileName,JSON.stringify(data));
        return true;
    }
    catch(e){
        console.log(e);
        return false;
    }
}

export const saveData = function(fileName,data){
    try{
        fs.writeFileSync(fileName,data.toString());
        return true;
    }
    catch(e){
        console.log(e);
        return false;
    }
}