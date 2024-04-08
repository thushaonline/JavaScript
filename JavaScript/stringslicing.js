
function extractDomainFromURL(url) { 
    let startIndex = url.indexOf('//');
    if (startIndex !== -1) {
        url = url.slice(startIndex + 2);
    } 
    let endIndex = url.indexOf('/');
    if (endIndex === -1) {
        endIndex = url.length;
    }
    return url.slice(0, endIndex);
}
const url1 = "https://www.example.com/path/to/page";
const url2 = "http://subdomain.example.co.uk";
const url3 = "ftp://ftp.example.net";

console.log("Domain from", url1, ":", extractDomainFromURL(url1)); 
console.log("Domain from", url2, ":", extractDomainFromURL(url2)); 
console.log("Domain from", url3, ":", extractDomainFromURL(url3)); 
