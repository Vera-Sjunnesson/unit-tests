/* export const hackerSpeak = (words) => {
  words = words.replace(/a/g, '4');
  words = words.replace(/e/g, '3');
  words = words.replace(/i/g, '1');
  words = words.replace(/o/g, '0');
  words = words.replace(/s/g, '5');
  words = words.replace(/A/g, '4');
  words = words.replace(/E/g, '3');
  words = words.replace(/I/g, '1');
  words = words.replace(/O/g, '0');
  words = words.replace(/S/g, '5');

  return words;
} */


export const hackerSpeak = (words) => {
  let result = '';
  for (let i = 0; i < words.length; i++) {
    const char = words[i];
    if (char.toLowerCase() === 'a') {
      result += '4';
    } else if (char.toLowerCase() === 'e') {
      result += '3';
    } else if (char.toLowerCase() === 'i') {
      result += '1';
    } else if (char.toLowerCase() === 'o') {
      result += '0';
    } else if (char.toLowerCase() === 's') {
      result += '5';
    } else {
      result += char;
    }
  }

  return result;
};