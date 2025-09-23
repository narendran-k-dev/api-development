const db = require('../../models')
const Tutorial = db.tutorials;
exports.duplicateChecker = async (title) => {
  console.log('title ', title)
  const finder = title.trim()
  try {
    const existing = await Tutorial.findOne({ title:finder }).collation({ locale: 'en', strength: 2 }).exec();
    if (existing) {
      throw new Error('Title already exists!');
    }
  } catch (err) {
    throw err;
  }
};
