const path=require('path');

let registerController={
    index:function(req,res){
        res.sendFile(path.resolve(__dirname,'../views/register.html'));
    }
}

module.exports=registerController;