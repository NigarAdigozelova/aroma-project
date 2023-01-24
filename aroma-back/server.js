const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// config .env
dotenv.config();
// create app.use for used middleware
const app = express();
app.use(cors());
app.use(bodyParser.json());


const productsScheme = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true,
        },

        productDescription: {
            type: String,
            required: true
        },
    
        productPrice: {
            type: Number,

        }
    },
    { timestamps: true }
);
const Products = mongoose.model("products", productsScheme);
// Get-axios
app.get("/products", (req, res) => {
    Products.find({}, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.status(500).json({ message: err });
        }
    });
});
// Post-Axios
app.post("/products", async (req, res) => {
    console.log(req.body);
    const data = req.body;
    let user = await Products.create(data);
    console.log('postuser', user)
    user.save();
    res.send({ message: "SUCCESS" });
});

// Delete-Axios
app.delete("/products/:id", (req, res) => {
    const { id } = req.params;
    Products.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("SUCCESSFULLY DELETED");
        } else {
            res.status(500).json({ message: err });
        }
    });
});

const PORT = process.env.PORT;
const DB = process.env.DB_URL;
mongoose.set('strictQuery', false);

mongoose.connect(DB, (err) => {
    if (!err) {
        console.log("DB CONNECTED");
        app.listen(PORT, () => {
            console.log(`App is up and running on port: ${PORT}`);
        });
    }
});