
var mongoose = require('mongoose');
// Setup schema
var libraryListSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Type: {
        type: String,
        required: true
    },
    Region: String,
    
});
// Export Library model
var Library = module.exports = mongoose.model('libraryList', libraryListSchema);
module.exports.get = function (callback, limit) {
    Library.find(callback).limit(limit);
}