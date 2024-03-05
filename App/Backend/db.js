const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://foodydoody:Sai12345@cluster0.0erx9op.mongodb.net/foodydoody?retryWrites=true&w=majority'
const mongoDB = async () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
        if (err) console.log("---", err);
        else {
            console.log("connected");
            const fetch_data = await mongoose.connection.db.collection("food_items");
            fetch_data.find({}).toArray[function( err,data ) {
                if (err) console.log(err);
                else console.log();
            }]

        }
    });
}


module.exports = mongoDB;