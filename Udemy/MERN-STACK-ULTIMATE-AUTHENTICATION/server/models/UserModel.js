import mongoose from "mongoose";
import crypto from "crypto";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      max: 32
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
      max: 32
    },
    hased_password: {
      type: String,
      trim: true,
      required: true,
      max: 32
    },
    salt: String,
    role: {
      type: String,
      default: "subscriber"
    },
    resetPasswordLink: {
      type: String,
      default: ""
    }
  },
  { timeStamp: true }
);

//virtual

UserSchema.virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

//methods
UserSchema.methods = {

    authenticate:function(plainText){
        return this.encryptPassword(plainText) === this.hased_password
    },
  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (error) {
      return "";
    }
},
makeSalt:function(){
  return Math.round(new Date().valueOf() * Math.random()) + ''
}
};

export default mongoose.model("User", UserSchema);
