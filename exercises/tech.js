const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
(async () => {
    try {
        //Implementation goes here
        const fileData = await readFile("C:/Users/Perso/Tevin/Node-js/exercises/src.txt","UTF8");
        console.log("file read");
        const writeString = await writeFile("C:/Users/Perso/Tevin/Node-js/exercises/dest.txt", fileData);
        console.log('Data moved from src to dest');
    } catch (err) {
        console.log(err);
    }
})();