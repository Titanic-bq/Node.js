import path from "path";

const filepath = "./dir1/dir2/file.txt";
//Täis path
console.log(path.basename(filepath));
//dir nimi
console.log(path.dirname(filepath));
//Faili nimi
console.log(path.extname(filepath));

//Parsimine
console.log(path.parse(filepath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filepath2 = path.join(__dirname, "dir1", "dir2", "file.html");
console.log(filepath2);
