const wordsWithCount = {
  Sue: 15,
  Susan: 12,
  Chris: 13,
  Kris: 4,
  Christopher: 19,
  Max: 22,
  John: 33,
  Jonny: 5,
};

const sameNames = [
  ['Sue', 'Susan'],
  ['John', 'Jonny'],
  ['Chris', 'Kris'],
  ['Chris', 'Christopher']
];

function getNameCount(wordsWithCount, sameNames) {
  const resultNameCount = { ...wordsWithCount };
  const namesSeen = {};
  const nameCount = {};
  for (const [name, similarName] of sameNames) {
    let total = 0;
    if (!namesSeen[name] && wordsWithCount[name]) {
      total += wordsWithCount[name];
      namesSeen[name] = true;
      delete resultNameCount[name];
    }
    if (!namesSeen[similarName] && wordsWithCount[similarName]) {
      total += wordsWithCount[similarName];
      namesSeen[similarName] = true;
      delete resultNameCount[similarName];
    }
    if (namesSeen[name]) {
      nameCount[name] = nameCount[name] ? nameCount[name] + total : total;
    }
  }
  return { ...resultNameCount, ...nameCount };
}

console.log(getNameCount(wordsWithCount, sameNames));
