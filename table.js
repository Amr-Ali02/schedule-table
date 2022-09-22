let matrials = document.querySelector("#matrial");
let colors = document.querySelector("#colors");
let fcolor = document.querySelector("#fcolor");
let legend = document.querySelector(".legend");
let table = document.querySelectorAll("table td");
console.log(table.length);
table.forEach((e) => {
  if (e.textContent === "") {
    e.style.cssText = `
  cursor:pointer;`;
    e.addEventListener("click", () => {
      e.textContent = matrials.value;
      e.style.cssText = `
      text-align:center;
      padding:5px;
      cursor:pointer;
    color:${fcolor.value};
    background-color:${colors.value};
    `;
      // let span = document.createElement("span");
      // let p = document.createElement("p");
      // span.style.cssText = `
      // display:inline-block;
      // margin-right:5px;
      // width:10px;
      // height:10px;
      // background-color:${colors.value};
      // `;
      // p.innerText=matrials.value;
      // p.prepend(span);
      // legend.appendChild(p);
    });
  }
});

document.querySelector("button").addEventListener("click", () => {
  window.print();
});
let cap = document.createElement("caption");
document.querySelector("table").prepend(cap);
cap.style.cssText = `
direction:ltr;
margin:15px auto;
padding:10px 20px;
background-color:#607d8b;
color:white;
width:fit-content;
border-radius:10px;
`;
cap.textContent = table[0].textContent;
cap.setAttribute("contenteditable", "true");
table[0].addEventListener("keyup", () => {
  cap.textContent = table[0].textContent;
});
cap.addEventListener("keyup", () => {
  table[0].textContent = cap.textContent ;
});
console.log(table[0].textContent);
