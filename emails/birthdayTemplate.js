module.exports = ({ username = 'Friend' } = {}) => {
    return `
    <!doctype html>
    <html>
    <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Happy Birthday</title>
    </head>
    <body style="font-family: Arial, sans-serif; background:#f6f9fc; padding:24px;">
    <div style="max-width:600px; margin:0 auto; background:#fff; border-radius:8px; padding:24px; box-shadow:0 4px 14px rgba(0,0,0,0.08);">
    <h1 style="margin-top:0;">Happy Birthday, ${username} 🎉</h1>
    <p>Wishing you a day filled with joy, laughter and everything you love. Enjoy your special day!</p>
    <p style="margin-top:24px;">— <strong>Your friends at the Company</strong></p>
    </div>
    </body>
    </html>
    `;
    };