const mongoose = require('mongoose');

const transcriptionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Transcription', transcriptionSchema);
