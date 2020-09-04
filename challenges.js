// Desafio 4
function catAndMouse(mouse, cat1, cat2) {
    let positions = [];
    positions[0] = mouse;
    positions[1] = cat1;
    positions[2] = cat2;
    let result;
    let highestDistance;
      if (positions[1] == positions[2]) {
        return result = "os gatos trombam e o rato foge";
      }
      if (positions[0] - positions[1] < positions[0] - positions[2]){
        result = "cat1";
        return result;
      }
      if (positions[0]- positions[2] < positions[0] - positions[1]){
        result = 'cat2';
        return result;
      }

    }

    


console.log(catAndMouse(5, 5, 5));

  