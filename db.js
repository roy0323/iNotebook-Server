const mongoose= require('mongoose');
const mongoURI="mongodb+srv://anushkaroy7007:Anushka@cluster0.w2zpbgf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{ 
      console.log("Connected to Mongo Successfully");
  })
}
module.exports = connectToMongo;