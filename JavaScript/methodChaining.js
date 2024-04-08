const originalString = "hello world";

const manipulatedString = originalString
    .toUpperCase()        
    .split('')         
    .reverse()            
    .join('')           
    .replace('O', 'X');  

console.log(manipulatedString); 

