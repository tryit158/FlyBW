const https = require('https');

const urls = [
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=800&q=80',
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
    'https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=800&q=80',
    'https://images.unsplash.com/photo-1569154941061-e231b4732ef1?w=800&q=80',
    'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    'https://images.unsplash.com/photo-1589394815804-964ce0ff9718?w=800&q=80',
    'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=800&q=80',
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80',
    'https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?w=800&q=80'
];

urls.forEach(url => {
    https.get(url, (res) => {
        console.log(res.statusCode, url);
        res.resume();
    }).on('error', (e) => {
        console.error(e);
    });
});
