
const url = /https?:\/\/(www\.)?[-\w@:%\.\+~#=]{1,256}\.[a-z0-9()]{1,6}\b([-\w()@:%\.\+~#=//?&]*)/i

let newUrl = 'https://plentymarkets-cloud-de.com/';

let str = new URL(newUrl);

console.log(str);