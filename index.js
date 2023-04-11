let string = ""
let btn =  document.getElementsByClassName("btn")


Array.from(btn).forEach((btn) => {
    btn.addEventListener("click",(e)=>{
console.log(e.target)
if(e.target.innerHTML == "="){
     string =  eval(string)
    document.getElementById("input").value = string;
}
 else if(e.target.innerHTML == "C"){
    string = ""
    document.getElementById("input").value  = string;
}
else{
    string = string + e.target.innerHTML
console.log(string)
document.getElementById("input").value = string;
}

    });
});






  



