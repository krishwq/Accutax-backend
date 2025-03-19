const mongoose=require('mongoose');
const mongoURI="mongodb+srv://23ee01025:Krishnendu@cluster0.razwk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const ConnectToMongo=()=>{
    mongoose.connect(mongoURI,).then(()=>console.log("connected"))
}
module.exports=ConnectToMongo