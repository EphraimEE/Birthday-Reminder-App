const cron = require('node-cron');
const birthdayService = require('../services/birthdayService');
const mailService = require('../services/mailService');


const schedule = process.env.CRON_SCHEDULE || '0 0 7 * * *';
const tz = process.env.CRON_TZ || 'Africa/Lagos';


cron.schedule(schedule, async () => {
console.log('[Cron] Running birthday job at', new Date().toISOString());
try {
const celebrants = await birthdayService.getTodaysCelebrants();
console.log('[Cron] Found', celebrants.length, 'celebrant(s)');
for (const user of celebrants) {
await mailService.sendBirthdayEmail(user);
console.log('[Cron] Sent to', user.email);
}
} catch (err) {
console.error('[Cron] Error:', err.message);
}
}, {
timezone: tz
});


module.exports = {};