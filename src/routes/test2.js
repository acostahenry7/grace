//Algoritmo que determina si string es bonito

//Condición

//Cada letra debe aparecer maximo tantas veces como su predecesora segun el orden alfabetico
let alp = "abcdefghijklmnñopqrstuvwxyz";

function solution(inputString) {
  alp = Array.from(alp);
  inputString = inputString.toLowerCase();

  let containedLetters = [];
  let stringStatus;

  //Determino las diferentes letras que componen el string
  Array.from(inputString).forEach((item) => {
    if (containedLetters.length > 0) {
      let include = containedLetters.includes(item);

      if (include == false) {
        containedLetters.push(item);
      }
    } else {
      containedLetters.push(item);
    }

    //containedLetters.push(item);
  });

  //Creo un record donde se asocia a cada letra con la cantidad de veces que aparece
  let charAmount = {};
  containedLetters.forEach((item) => {
    Array.from(inputString).forEach((char) => {
      let i = 0;
      //if (Object.entries(charAmount).length != 0) {
      if (item == char) {
        if (charAmount[item]) {
          charAmount[item] += 1;
        } else {
          charAmount[item] = 1;
        }
      }
      //}
    });

    //console.log(charAmount);
  });

  //Determinar si se cumple la condición el el String.
  Object.entries(charAmount).map((item) => {
    let itemIndex = alp.findIndex((element) => element == item[0]);

    let preValue = charAmount[alp[itemIndex - 1]];

    console.log({
      itemLetter: item[0],
      value: item[1],
      itemIndex,
      preValue,
    });

    if (preValue !== undefined) {
      if (item[1] > preValue) {
        stringStatus = false;
      } else {
        if (stringStatus != false) {
          stringStatus = true;
        }
      }
    }
  });
  console.log(stringStatus);
  return stringStatus;
}

solution("AAbbaabbac");
