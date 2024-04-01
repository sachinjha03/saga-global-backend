const mongoose = require('mongoose')

// mongoose.connect("mongodb://127.0.0.1:27017/SagaConsultation").then(() => {
mongoose.connect("mongodb+srv://sachin03nic:sachin03nic@sagaglobalconsultants.0t4tcdk.mongodb.net/SagaGlobal?retryWrites=true&w=majority&appName=SagaGlobalConsultants").then(() => {
    console.log("Connected To The Database...");
}).catch((err) => {
    console.log("Failed to connect with database : " , err);
})