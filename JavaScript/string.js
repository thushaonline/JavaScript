
function countVowels(sentence) {
    
    sentence = sentence.toLowerCase();
    
    const vowels = "aeiou";
    
    let vowelCount = 0;
    
    for (let i = 0; i < sentence.length; i++) {
        if (vowels.includes(sentence[i])) {
            vowelCount++;
        }
    }
    return vowelCount;
}
const inputSentence = "Hello, how are you today?";
const numberOfVowels = countVowels(inputSentence);
console.log("Number of vowels:", numberOfVowels);
