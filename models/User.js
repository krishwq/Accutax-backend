const { text } = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name:{
    type: String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  dob:{
    type:String,
    default:"",
   },
   gender:{
    type:String,
    default:"",
   },
   mobile:{
    type:Number,
    default:"",
   },
   nationallity:{
    type:String,
    default:"",
   },
   country:{
    type:String,
    default:"",
   },
   state:{
    type:String,
    default:"",
   },
   pin:{
    type:String,
    default:"",
   },
   address:{
    type:String,
    default:"",
   },
   Age:{
    type:Number,
    default:"",
   },
   occupation:{
    type:String,
    default:"",
   },
   income:{
    type:String,
    default:"",
   },
   companyname:{
    type:String,
    default:"",
   },
   sourceofincome:{
    type:String,
    default:"",
   },
   taxnumber:{
    type:String,
    default:"",
   },
   salaryslip:{
    type: Buffer,
    contentType: String,
    default:"",
   },
  date:{
    type:Date,
    default:Date.now
   },
   subscriptiondate:{
    type:Date,
    default:""
   },
   is_subscribed:{
    type: Boolean,
    default:false
   },
   suscribe_days:{
    type: Number,
    default:0
   },


  });
  const User=mongoose.model('users',UserSchema);
  module.exports=User;