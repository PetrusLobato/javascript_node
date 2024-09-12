

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'metas.json');

let metas = [];

try {
    const data = fs.readFileSync(filePath);
    metas = JSON.parse(data);
} catch (error) {
    
}

const saveMetas = () => {
    fs.writeFileSync(filePath, JSON.stringify(metas, null, 2));
};

module.exports = { metas, saveMetas };