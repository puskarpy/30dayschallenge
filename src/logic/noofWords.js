function countNoOfWords(string, word){
    string = string.trim()
    return string.split(/\s+/).filter(word1 => word1 === word).length
}

console.log(countNoOfWords("Pushkar Pushkar Niraula", "Pushkar"));
