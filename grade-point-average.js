
let z = averageScore();

function averageScore() {
  let sum = 0;
  let score = [];
  let averrr = [];
  let modules = [];
  let sum_modules = 0;
  let sum_moduless = [];
  let nos = Number(prompt("enter number of student"));
  let lesson = Number(prompt("enter number of lesson"));
  for (let i = 0; i < nos; i++) {
    for (let j = 0; j < lesson; j++) {
      score[j] = Number(prompt("enter score"));
      modules[j] = Number(prompt("enter modules"));
      sum_modules += modules[j];
      sum += score[j] * modules[j];
    }
    averrr[i] = sum;
    sum_moduless[i] = sum_modules;
    sum = 0;
    sum_modules = 0;
  }
  let avrstudent = [];
  for (let i = 0; i < nos; i++) {
    avrstudent[i] = ((averrr[i] / sum_moduless[i]).toFixed(2));
    
    // console.log(avrstudent[i]);
    if (avrstudent[i] >= 10) {
        console.log(`your score is : ${avrstudent[i]} and you are pass`);
      } else {
        console.log(`your score is : ${avrstudent[i]} and you are reject`);
      }

  }

  let reult = 0 ;
  for (let i = 0 ; i<nos ; i++) { 
  }

  return avrstudent ; 
}