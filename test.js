const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];


const btn = document.querySelector('button');

function changeColors(){

  
  const colorsIndex_1= Math.floor(Math.random()*colors.length);
  const colorsIndex_2 = Math.floor(Math.random()*colors.length);

  if(colorsIndex_1!==colorsIndex_2){
    console.log(colorsIndex_1);
    console.log(colorsIndex_2);
    const chosenColors_1 = colors[colorsIndex_1];
    const chosenColors_2 = colors[colorsIndex_2];
    document.body.style.background = `linear-gradient(to right,${chosenColors_1}, ${chosenColors_2})`;
  }
  

}

btn.addEventListener('click',changeColors);

// CSS를 JS에서 사용할 때 문자열의 형식으로 쓰니까 linear-gradient도 문자열의 형태로 만들어야한다
// 예시: document.body.style.backgroundColors = 'tomato';

