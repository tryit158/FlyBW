const https = require('https');

const urls = [
    'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80',
    'https://images.unsplash.com/photo-1596484552834-6addaf3dd56a?w=800&q=80',
    'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80'
];

urls.forEach(url => {
    https.get(url, (res) => {
        console.log(res.statusCode, url);
        res.resume();
    }).on('error', (e) => {
        console.error(e);
    });
});
