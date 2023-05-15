
async function bul();
let api ="https://api.collectapi.com/imdb/imdbSearchById?movieId=tt1375666";
const res = await fetch(api);
const data= await res.json();
let veri =data;
console.log(veri);