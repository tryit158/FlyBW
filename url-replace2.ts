import fs from 'fs';

let content = fs.readFileSync('src/data/articles.tsx', 'utf-8');

const replacements: Record<string, string> = {
    "https://images.unsplash.com/photo-1589394815804-964ce0ff9718?w=800&q=80": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80",
    "https://images.unsplash.com/photo-1569154941061-e231b4732ef1?w=800&q=80": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
};

for (const [oldUrl, newUrl] of Object.entries(replacements)) {
    content = content.split(oldUrl).join(newUrl);
}

fs.writeFileSync('src/data/articles.tsx', content);
console.log("Replaced broken images successfully");
