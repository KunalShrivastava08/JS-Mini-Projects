let btn=document.getElementById("roll-btn");

let div1 = document.getElementsByClassName("div1");
let div2 = document.getElementsByClassName("div2");
let div3 = document.getElementsByClassName("div3");
let div4 = document.getElementsByClassName("div4");
let div5 = document.getElementsByClassName("div5");
let div6 = document.getElementsByClassName("div6");

btn.addEventListener('click',()=>{
    let num = Math.floor(
        Math.random() * (6 - 1 + 1) + 1
      )

      console.log(num);
      switch (num) {
        case 1:
            div1[0].style.display = "block";
            div2[0].style.display = "none";
            div3[0].style.display = "none";
            div4[0].style.display = "none";
            div5[0].style.display = "none";
            div6[0].style.display = "none";
            break;
        case 2:
            div1[0].style.display = "none";
            div2[0].style.display = "block";
            div3[0].style.display = "none";
            div4[0].style.display = "none";
            div5[0].style.display = "none";
            div6[0].style.display = "none";
            break;
        case 3:
            div1[0].style.display = "none";
            div2[0].style.display = "none";
            div3[0].style.display = "block";
            div4[0].style.display = "none";
            div5[0].style.display = "none";
            div6[0].style.display = "none";
            break;
        case 4:
            div1[0].style.display = "none";
            div2[0].style.display = "none";
            div3[0].style.display = "none";
            div4[0].style.display = "block";
            div5[0].style.display = "none";
            div6[0].style.display = "none";
            break;
        case 5:
            div1[0].style.display = "none";
            div2[0].style.display = "none";
            div3[0].style.display = "none";
            div4[0].style.display = "none";
            div5[0].style.display = "block";
            div6[0].style.display = "none";
            break;
      
        default:
            div1[0].style.display = "none";
            div2[0].style.display = "none";
            div3[0].style.display = "none";
            div4[0].style.display = "none";
            div5[0].style.display = "none";
            div6[0].style.display = "block";
            break;
      }
})
