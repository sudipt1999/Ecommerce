const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;


/* USER SCHEMA */
var UserSchema = Schema({

    email: {
        type: String,
        unique: true,
        lowercase: true
    },

    password: String,

    profile: {
        name: {
            type: String,
            default: ''
        },
        picture: {
            type: String,
            default: ''
        }
    },

    address: String,
    history: [{
        date: Date,
        paid: {
            type: Number,
            default: 0
        }
    }]

});


/*HASHING THE PASSWORD BEFORE SAVING TO DATABASE */
UserSchema.pre('save', function (next) {
    var user = this;
    console.log("THIS USER : ", user);
    if (!(user.isModified('password'))) {
        return next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) {
                return next(err);
            }
            console.log("HASHED VALUE ", hash);
            user.password = hash;
            next();
        })
    })
})

/* CUSTOM METHOD FOR COMPARING PASSWORD */
UserSchema.methods.comparePassword = function (password) {
    console.log("inside cmpare password method", password, this.password)
    return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model('User', UserSchema);

module.exports = User;