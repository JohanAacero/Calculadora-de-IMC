let Nombre = input("su nombre es").document.getElementById("form-group").value//ingeso del nombre obteniendo el valor del html
let apellido = input("su apellido es").document.getElementById("form-group2").value//ingreso del apellido obteniendo el valor del html

let edad = input("su edad es").document.getElementById("form-group-row1").value//ingreso de valor en numeros reales para el ingreso de la edad
let peso = input("inserte su peso en kg").document.getElementById("form-group-row2").value//ingreso del peso del usuario en kg
let altura = input("inserte su altura en metros").document.getElementById("form-group-row3").value//estatura del usuario en cm o en m
let IMC = peso/altura * altura//operacion del IMC
    if(onclick=document.getElementById("btn-primary").value.console.log(IMC)){//si se hace click en el boton enviar llamara el resultado de la operacion del IMC
if (onclick= document.getElementById("form-check-form-check-inline1").value){//si se hace click en la opcion mujer aparecera el siguiente mensaje
        print((nombre),(apellido),"su IMC es",(IMC))//aparecera el nombre y el apellido del usuario junto a su calculo del peso del IMC
}if(IMC<=16){//si el IMC es menor o igual a 16
        print("usted esta en delgadez severa","consulte a su medico lo mas pronto posible")//mensaje que aparecera en pantalla
}if(IMC>=16<=17){//si el peso es mayor o igual a 16 y menor o igual a 17
        print("usted esta en delgadez moderada","se le recomienda ir al medico lo mas pronto posible")//mensaje que aparecera en pantalla
}if(IMC>=17<=18.49){//si es mayor o igual a 17 y menor o igual a 18.49
        print("usted esta bajo de peso")//mensaje que aparecera en pantalla
}if(IMC>=18.5<=24.99){//si es mayor o igual a 18.5 y menor o igual a 24.99
        print("su peso es normal")//mensaje que aparecera en pantalla
}if(IMC>=25<=34.99){//si es mayor o igual a 25 y menor o igual a 34.99
     print("usted esta sufriendo de sobrepeso")//mensaje que aparecera en pantalla
}if(IMC>=30<=34.99){//si es mayor o igual a 30 y si es menor o igual 34.99
     print("usted esta sufriendo de obesidad en estado I")//mensaje que aparecera en pantalla
}if(IMC>=35<=40){//si es mayor o igual a 35 y si es menor o igual a 40 
     print("usted esta en estadod de obesidad etapa II")//mensaje que aparece en pantalla
}if(IMC>=40<44.99){//si es mayor o igual a 40 y menor o igual a 44.99
     print("usted esta en el estado de obesidad etapa III o obesidad morvida")//mensaje que aparecera en pantalla
}if(IMC>=50){//si es mayor o igual a 50
        print("usted esta en el estado de obesidad extrema")//mensaje que aparecera en pantalla
}else{//si no para que lo de antes si invalide si falta algun dato ya sea el seño o uno de los siguientes datos
     print("algun dato no esta completo, revise los datos")//mensaje que aparecera en pantalla
}
}

if(onclick=document.getElementById("btn-primary").value.console.log(IMC)){//si se hace click en el boton enviar llamara el resultado de la operacion del IMC
    if (onclick= document.getElementById("form-check-form-check-inline2").value){//si se hace click en la opcion mujer aparecera el siguiente mensaje
            print((nombre),(apellido),"su IMC es",(IMC))//aparecera el nombre y el apellido del usuario junto a su calculo del peso del IMC
    }if(IMC<=16){//si el IMC es menor o igual a 16
            print("usted esta en delgadez severa","consulte a su medico lo mas pronto posible")//mensaje que aparecera en pantalla
    }if(IMC>=16<=17){//si el peso es mayor o igual a 16 y menor o igual a 17
            print("usted esta en delgadez moderada","se le recomienda ir al medico lo mas pronto posible")//mensaje que aparecera en pantalla
    }if(IMC>=17<=18.49){//si es mayor o igual a 17 y menor o igual a 18.49
            print("usted esta bajo de peso")//mensaje que aparecera en pantalla
    }if(IMC>=18.5<=24.99){//si es mayor o igual a 18.5 y menor o igual a 24.99
            print("su peso es normal")//mensaje que aparecera en pantalla
    }if(IMC>=25<=34.99){//si es mayor o igual a 25 y menor o igual a 34.99
         print("usted esta sufriendo de sobrepeso")//mensaje que aparecera en pantalla
    }if(IMC>=30<=34.99){//si es mayor o igual a 30 y si es menor o igual 34.99
         print("usted esta sufriendo de obesidad en estado I")//mensaje que aparecera en pantalla
    }if(IMC>=35<=40){//si es mayor o igual a 35 y si es menor o igual a 40 
         print("usted esta en estadod de obesidad etapa II")//mensaje que aparece en pantalla
    }if(IMC>=40<44.99){//si es mayor o igual a 40 y menor o igual a 44.99
         print("usted esta en el estado de obesidad etapa III o obesidad morvida")//mensaje que aparecera en pantalla
    }if(IMC>=50){//si es mayor o igual a 50
            print("usted esta en el estado de obesidad extrema")//mensaje que aparecera en pantalla
    }else{//si no para que lo de antes si invalide si falta algun dato ya sea el seño o uno de los siguientes datos
         print("algun dato no esta completo, revise los datos")//mensaje que aparecera en pantalla
    }
    }