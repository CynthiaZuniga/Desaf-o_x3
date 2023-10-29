
function revisar(){
    input1 = document.getElementById ('input1').value;
    input2 = document.getElementById ('input2').value;
    input3 = document.getElementById ('input3').value;
    var click_btn = document.querySelector('#boton')
    var suma = Number(input1) + Number(input2) + Number(input3);
    
    if (suma <= 10) {
        Checkear.innerHTML = "Llevas " + suma + " Stickers";
        
    }else{
        Checkear.innerHTML = "Llevas demasiados stickers";
    }
    
    console.log (suma);
}


