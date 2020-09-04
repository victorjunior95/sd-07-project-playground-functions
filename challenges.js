// Desafio 4
function catAndMouse(mouse, cat1, cat2) {
    let positions = [];
    positions[0] = mouse;
    positions[1] = cat1;
    positions[2] = cat2;
    let result;
    let distanceAbs1;
    let distanceAbs2;
    distanceAbs1 = Math.abs(positions[0] - positions[1]);
    distanceAbs2 = Math.abs(positions[0] - positions[2]);
        if (positions[1] == positions[2]) {
        return result = "os gatos trombam e o rato foge";
      }
      if (distanceAbs1 < distanceAbs2){
        result = "cat1";
        return result;
      }
      if (distanceAbs2 < distanceAbs1){
        result = 'cat2';
        return result;
      }

    }

    


console.log(catAndMouse(10, 6, 22));

  