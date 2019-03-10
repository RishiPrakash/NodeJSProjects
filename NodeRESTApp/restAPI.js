function callGet(req,res){
    
//console.log(JSON.stringify(req));

console.log(req.checkBody("name","error.name.missing").notEmpty());    
var errors = req.validationErrors();
console.log(JSON.stringify(errors));    
if(errors.length>0){
    console.log("show error occured");
    return errors;
   // res.json(errors);
    
}else{
    
    console.log("show no error occured");
   // res.json({"code":"newCode"});
}
    
return res;    
}





module.exports.callGet = callGet;