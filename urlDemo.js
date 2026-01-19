import url from "url";

const urlString = "https://www.example.com:8080/path/name?query=string#hash";
const urlObj = new url.URL(urlString);

console.log(urlObj);

console.log(url.format(urlObj));

console.log(url.fileURLToPath(import.meta.url));

console.log(urlObj.search);

const params = new url.URLSearchParams(urlObj.search);
console.log(params.get("query"));
params.append("limit", "5");
params.delete("limit");
console.log(params);
