function assertEquals(esperado, recebido) {
    if (esperado === recebido){
        console.info(true);
        return true;
    }
    else{
        console.error(`Esperado: ${esperado}`);        
        console.error(`Recebido: ${recebido}`);
        console.log("\n")
        return false;
    }  
}

function assertMoreThan(esperado, recebido) {
    if (recebido === undefined) {
        console.error(`Esperado: ${esperado}`);        
        console.error(`Recebido: ${recebido}`);
        console.log("\n")
        return false;
    }
    else if (recebido > esperado) {
        console.info(true);
        return true;
    }
    else{
        console.error(`Esperado: ${esperado}`);        
        console.error(`Recebido: ${recebido}`);
        console.log("\n")
        return false;
    }
}


function assertMoreOrEquals(esperado, recebido) {
    if (recebido === undefined) {
        console.error(`Esperado: ${esperado}`);        
        console.error(`Recebido: ${recebido}`);
        console.log("\n")
        return false;
    }
    else if (recebido >= esperado) {
        console.info(true);
        return true;
    }
    else{
        console.error(`Esperado: ${esperado}`);        
        console.error(`Recebido: ${recebido}`);
        console.log("\n")
        return false;
    }
}

function assertInArray(esperado, recebido){
    for (var i = 1; i <= 5; i++){
        console.log(i);
    }
}

function testesCadastro(){

    var inputPassoword = document.getElementById("inputPassoword").value;
    var inputEmail = document.getElementById("inputEmail").value;
    var inputCity = document.getElementById("inputCity").value;
    var inputArea = document.getElementById("inputArea").value;

    assertMoreThan(0, inputPassoword.length);
    assertMoreOrEquals(4, inputPassoword.length);
    //Essa parte do teste do email foi testado com o menor dominio @uol.com 
    assertMoreThan(8, inputEmail.length);
    assertMoreOrEquals(12, inputEmail.length);

    assertMoreThan(0, inputCity.length);
    assertMoreOrEquals(3, inputCity.length);

    assertMoreThan(0, inputArea.length);
    assertEquals(7, inputArea.length);
}