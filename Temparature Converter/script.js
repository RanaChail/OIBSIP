const outputField = document.querySelector('#outputbox');
const inputFiled = document.querySelector('#inputbox');
const temptype = document.getElementById('fromrow');
const convertbtn = document.getElementById('convertbtn');
const resetBtn = document.getElementById('resetbtn');
let degree = document.getElementById('degree');

//Window loading reset
window.addEventListener('load', ()=>{
    inputFiled.value = "";
    outputField.innerHTML = "";
});

//Reset Btn
resetBtn.addEventListener('click', ()=>{
    inputFiled.value = "";
    outputField.innerHTML = "";
});

//Convert Temp
convertbtn.addEventListener('click', (e)=>{
    e.preventDefault();
    converttemp();
});


const converttemp = () =>{
    let inputValue = inputFiled.value;
    if(temptype.value === "celcius" && inputValue != 0){
        const celciusTemp = (inputValue - 32) * (5/9);
        outputField.innerHTML = `${celciusTemp.toFixed(2)} &deg;C`;
        degree.innerHTML = " &deg; F";
    }else if(temptype.value === "fahrenheit" && inputValue != 0){
        const fahrenheitTemp = (inputValue * (9/5)) + 32;
        outputField.innerHTML = `${fahrenheitTemp.toFixed(2)} &deg;F`;
        degree.innerHTML = " &deg; C";
    }else{
        outputField.innerHTML = "Please Enter Value";
    }
}