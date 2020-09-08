function generatePhoneNumber(vetor) {
  let countRepeat = vetor.filter((e, i, a) => a.indexOf(e) !== i);
  countRepeat.sort(function (a, b) { return a - b; });
  let result;
  let a, b, c;
  function confere() {
    for (let i = 0; i < countRepeat.length; i += 1) {
      if (countRepeat[i] === countRepeat[i + 1] || countRepeat[i] === countRepeat[i + 2]) {
        result = 'não é possível gerar um número de telefone com esses valores';
      }
    }
    for (let i in vetor) {
      if (vetor[i] > 9 || vetor[i] < 0) {
        result = 'não é possível gerar um número de telefone com esses valores';
      }
    }
    return result;
  }
  function differentSize() {
    if (vetor.length !== 11) {
      return 'Array com tamanho incorreto.';
    }
  }
  function formatacao() {
    vetor.splice(0, 0, '(');
    vetor.splice(3, 0, ')');
    vetor.splice(4, 0, ' ');
    vetor.splice(10, 0, '-');
    return vetor.join('');
  }
  a = confere();
  b = differentSize();
  c = formatacao();
  if (a !== undefined) {
    return a;
  }
  if (b !== undefined) {
    return b;
  }
  if (c !== undefined) {
    return c;
  }
}
