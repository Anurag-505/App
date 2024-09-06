var mongoose = require('mongoose')

mongoose.connect('mongodb+srv://anuragkv2002:anuragkv@cluster0.5pz8l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
    console.log(" db connected")
    })
    .catch((err) => {
    console.log(err)
})