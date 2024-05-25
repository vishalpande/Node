const mongoose=require('mongoose');
const mongo='mongodb+srv://vishal:1234@cluster0.fqsgyav.mongodb.net/college?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(mongo,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>{
console.log('coonection sucessfull');

}).catch((err)=>{
    console.log('error',err);
})

module.exports=mongoose;