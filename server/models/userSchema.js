const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const SECRECT_KEY = "abcdefghijklmnop"

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Not Valid Email")
            }
        }
    },
    phoneNumber: {
        type: String,
        required: true,
        minlength: 10
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ]
});


// token generate
userSchema.methods.generateAuthtoken = async function(){
    try {
        let newtoken = jwt.sign({_id:this._id},SECRECT_KEY,{
            expiresIn:"1d"
        });

        this.tokens = this.tokens.concat({token:newtoken});
        await this.save();
        return newtoken;
    } catch (error) {
        res.status(400).json(error)
    }
}


// creating model
const users = new mongoose.model("users", userSchema);

module.exports = users;