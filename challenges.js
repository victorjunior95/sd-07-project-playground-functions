function compareTrue(a, b) {
  return (a && b);
}

function calcArea(base, height) {
  return ((base * height) / 2);
}

function splitSentence(sentença) {
  let splitedSentece = [];
  sentença = sentença.split(" ");
  for (const i of sentença) {
    splitedSentece.push(i);
  }
  return splitedSentece;
}
