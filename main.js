// let num = document.querySelector(".num")
// let down = document.querySelector(".down")
// var redZone = document.querySelector(".up")
// for(let i = 0; i<down.children.length;i++){

// if(down.children[i].innerHTML == "="){
//     down.children[i].addEventListener("click",result)
// }
// else{
//     down.children[i].addEventListener("click",function results(e){
//          redZone.innerHTML += e.target.innerText
// })}
// }
// function result(){
//      redZone.innerHTML=eval(redZone.innerHTML)
// }


// let deleteItem = document.querySelector(".delete")
// deleteItem.addEventListener("click", ()=> {
//     redZone.innerHTML = ''
// })




// function calculate(){
//     let array = (redZone.innerText).split("");
//     if(array.includes("%")){
//         if(array.includes("+")){
//             array.pop();
//             var newarray = array.join("");
//             var dividedarray = newarray.split("+");
//             console.log(dividedarray)
//             var a = Number(dividedarray[0]);
//             var b = Number(dividedarray[1]);
//             var total = a + a / 100 * b;
//             redZone.innerText = total;
//         }
//         else if(array.includes("-")){
//             array.pop();
//             var newarray = array.join("");
//             var dividedarray = newarray.split("-");
//             var a = Number(dividedarray[0]);
//             var b = Number(dividedarray[1]);
//             var total = a - a / 100 * b;
//             redZone.innerText = total;
//         }
//         else if(array.includes("*")){
//             array.pop();
//             var newarray = array.join("");
//             var dividedarray = newarray.split("*");
//             var a = Number(dividedarray[0]);
//             var b = Number(dividedarray[1]);
//             var total = a * b / 100;
//             redZone.innerText = total;
//         }
//         else if(array.includes("/")){
//             array.pop();
//             var newarray = array.join("");
//             var dividedarray = newarray.split("/");
//             var a = Number(dividedarray[0]);
//             var b = Number(dividedarray[1]);
//             var total = a * 100 / b;
//             redZone.innerText = total;
//         }
//     }
//     else if(!array.includes("%")) {
//     var total = eval(redZone.innerText)
//     redZone.innerText = total}
// }











// let deleteItem = document.querySelector(".delete")
// deleteItem.addEventListener("click", ()=> {
//     redZone.innerHTML = ''
// })




let container = document.querySelector(".container");
let bottom = document.querySelector(".down");
let numbers = Array.from(document.getElementsByClassName("num"));
let total = document.querySelector(".up");
numbers.map((number) => {
    number.addEventListener("click", (e) => {
      switch (e.target.innerText) {
        case "AC":
          total.innerHTML = "0";
          break;
        case "=":
          let newArray = total.innerHTML.split("");
          if (newArray.includes("%")) {
            if (newArray.includes("+")) {
              newArray.pop();
              let newArrays = newArray.join("");
              let splitArray = newArrays.split("+");
              let first = Number(splitArray[0]);
              let second = Number(splitArray[1]);
              total.innerHTML = first + (second * first) / 100;
            } else if (newArray.includes("-")) {
              newArray.pop();
              let newArrays = newArray.join("");
              let splitArray = newArrays.split("-");
              let first = Number(splitArray[0]);
              let second = Number(splitArray[1]);
              total.innerHTML = first - (second * first) / 100;
            }else if (newArray.includes("*")) {
              newArray.pop();
              let newArrays = newArray.join("");
              let splitArray = newArrays.split("*");
              let first = Number(splitArray[0]);
              let second = Number(splitArray[1]);
              total.innerHTML = first * (second * first) / 100;
            }else if (newArray.includes("/")) {
              newArray.pop();
              let newArrays = newArray.join("");
              let splitArray = newArrays.split("/");
              let first = Number(splitArray[0]);
              let second = Number(splitArray[1]);
              total.innerHTML = first - (second * first) / 100;
            }
            else{
              newArray.pop()
              total.innerHTML=newArray[0]*0.01
            }
          } else {
            total.innerHTML = eval(total.innerHTML);
          }
          break;
        case "C":
          if (total.innerHTML) {
            total.innerHTML = total.innerHTML.slice(0, -1);
          }
          break;
        default:
          if (total.innerHTML == 0) {
            total.innerHTML = "";
          }
          for (let i = 0; i < total.innerHTML.length; i++) {
          }
          total.innerText += e.target.innerText;
      }
    });
  });