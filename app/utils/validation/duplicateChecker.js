const db = require('../../models')
const Tutorial = db.tutorials;
exports.duplicateChecker = async (title)=>{
console.log('title ', title)
try {
    const existing = await Tutorial.findOne({ title }).exec();
    if (existing) {
      throw new Error('Title already exists!');
    }
  } catch (err) {
    throw err;
  }
};
