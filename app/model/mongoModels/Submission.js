const mongoose = require("mongoose")

const submissionSchema = new mongoose.Schema({
    langugae : {
        type:Number
    },
    sourceCode : {
        type:String
    },

    stdout: {
        type:String,
    },
    standardInput: {
        type:String,
    },
},{timestamps:true})

module.exports = mongoose.model('Submission',submissionSchema)