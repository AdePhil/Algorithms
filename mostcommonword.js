const sentences = 'a, a, a, a, b,b,b,c, c';

function getSentenceWithoutPunctuation(sentence) {
  return sentence.replace(/[^A-Za-z\s]/gi, ' ');
}

function mostCommonWord(paragraph, banned) {
  const sentenceWithoutPunctuation = getSentenceWithoutPunctuation(
    paragraph
  ).toLowerCase();
  const words = sentenceWithoutPunctuation.split(' ').filter(word => word);
  console.log(words);
  const wordCountMap = {};
  for (const word of words) {
    wordCountMap[word] = wordCountMap[word] + 1 || 1;
  }
  let count = 0;
  let wordWithHighestFrequencyNotBanned = '';
  for (const word of words) {
    if (!banned.includes(word) && wordCountMap[word] > count) {
      count = wordCountMap[word];
      wordWithHighestFrequencyNotBanned = word;
    }
  }
  return wordWithHighestFrequencyNotBanned;
}

console.log(mostCommonWord(sentences, ['a']));
