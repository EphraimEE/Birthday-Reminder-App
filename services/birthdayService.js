const User = require('../models/User');


exports.getTodaysCelebrants = async () => {
const now = new Date();
const day = now.getDate();
const month = now.getMonth() + 1;


// Use Mongo aggregation expression to match day and month
const celebrants = await User.find({
$expr: {
$and: [
{ $eq: [{ $dayOfMonth: '$dateOfBirth' }, day] },
{ $eq: [{ $month: '$dateOfBirth' }, month] }
]
}
}).lean();


return celebrants;
};