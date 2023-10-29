function secreto1() {
  num1 = document.getElementById("numero_secreto1").value;
  num2 = document.getElementById("numero_secreto2").value;
  num3 = document.getElementById("numero_secreto3").value;
  verificar = document.getElementById ("Checkear");
  a = Number(num1);console.log(a);
  b = Number(num2);console.log(b);
  c = Number(num3);console.log(c);
  if (a == 9 && b == 1 && c == 1) {
    console.log("correcto password 1");
    return Checkear.innerHTML = "Password 1 Correcto 👍!" 

  } else if(a == 7 && b == 1 && c == 4) {
    console.log("correcto password 2");
    return Checkear.innerHTML = "Password 2 Correcto 👌!"

  }else{
    console.log("incorrecto");
    return Checkear.innerHTML = "Password Incorrecto 😢"
  }

}
