let txt1 = document.getElementById("texto1");
let txt2 = document.getElementById("texto2");
let txt3 = document.getElementById("texto3");
let txt4 = document.getElementById("nombre");
console.log(txt4)

txt1.textContent="Universidad";
txt2.innerHTML="Los Limones";
txt3.textContent= txt1.textContent +" "+ txt2.textContent;
