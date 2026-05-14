import fs from 'fs';

let content = fs.readFileSync('src/data/articles.tsx', 'utf-8');

const replacements: Record<string, string> = {
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Okinawa_Churaumi_Aquarium_-_Kuroshio_Sea.jpg/800px-Okinawa_Churaumi_Aquarium_-_Kuroshio_Sea.jpg": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    "https://upload.wikimedia.org/wikipedia/commons/0/09/Inside_the_Blue_Cave_on_Bisevo_island%2C_Croatia_%2848693429148%29.jpg": "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=800&q=80",
    "'/tiger-real.png'": "'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80'",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Suitcase_with_luggage_tags.jpg/800px-Suitcase_with_luggage_tags.jpg": "https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=800&q=80",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Tigers_Japan_2004.jpg/800px-Tigers_Japan_2004.jpg": "https://images.unsplash.com/photo-1569154941061-e231b4732ef1?w=800&q=80",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Baggage_carousel_at_airport_terminal.jpg/800px-Baggage_carousel_at_airport_terminal.jpg": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Summer_Beach_%28214227784%29.jpeg/800px-Summer_Beach_%28214227784%29.jpeg": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Kabira_Bay_Ishigaki_Okinawa.jpg/800px-Kabira_Bay_Ishigaki_Okinawa.jpg": "https://images.unsplash.com/photo-1589394815804-964ce0ff9718?w=800&q=80",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Cruise_ship_in_Geirangerfjord.jpg/800px-Cruise_ship_in_Geirangerfjord.jpg": "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=800&q=80",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Tyrannosaurus_rex_Dinosaur_Park_Munchehagen.jpg/800px-Tyrannosaurus_rex_Dinosaur_Park_Munchehagen.jpg": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Kokusai_dori.jpg/800px-Kokusai_dori.jpg": "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?w=800&q=80"
};

for (const [oldUrl, newUrl] of Object.entries(replacements)) {
    content = content.split(oldUrl).join(newUrl);
}

fs.writeFileSync('src/data/articles.tsx', content);
console.log("Replaced all images successfully");
