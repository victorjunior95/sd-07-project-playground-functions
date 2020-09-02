/* let string = "Anderson Santana";
string = string.replace(/a/gi, "1");
string = string.replace(/b/gi, "2");
string = string.replace(/c/gi, "3");
string = string.replace(/d/gi, "4");
string = string.replace(/e/gi, "5");
console.log(string); */

function encode(string) {
    string = string.replace(/a/gi, "1");
    string = string.replace(/b/gi, "2");
    string = string.replace(/c/gi, "3");
    string = string.replace(/d/gi, "4");
    string = string.replace(/e/gi, "5");
    return string;
  }
console.log(encode("Anderson Santana"));