const mongoose = require ('mongoose')


const userSchema = mongoose.Schema({
    name: {
                 type: String,
                 required: true,
    },

   
    email: {
        type: String,
        required: true,
    },

    passwordHash: {
        type: String,
        required: true,
    }
}  
)

// // const User = mongoose.model("User", userSchema)
// // userSchema.set("toJSON", { transform:(doc, user)=>{
// //     user.id=user._id.toString()
// //     delete user._id
// //     delete user.__v
// //     delete user.password
// //     return user
// //  }
//  })
module.exports = mongoose.model('user', userSchema);
