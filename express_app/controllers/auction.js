const ethCrypto=require('eth-crypto');
const fs=require("fs");
const HDwalletprovider=require("truffle-hdwallet-provider");
const Web3=require("web3");
const session=require("express-session");


module.exports=(app)=>{
    app.get("/auction",(req,res)=>{
        
        if(req.session.email!==undefined){
            res.render("auction");
        }else{
            res.redirect("/");
        }
        
    }); 

 
}