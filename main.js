let name = prompt("Olá, qual o seu nome?");

if (name == null || name.trim() == "") { 
    alert("Você não inseriu seu nome.");
}
 else { document.write ("Seja bem vindo " + name + ".");

}

    let firstQuestion = 1

    let secondQuestion = 1
  
    let thirdQuestion = 1


let test = prompt("Deseja iniciar a prova Jedi? \n Digite 1 para Sim \n Digite 2 para Não");
 if (test == "2"){
     alert ("ok, adeus");
 } else { 

    firstQuestion = prompt("De quem Luke é irmão? \n Digite 1 para Leia \n Digite 2 para Padme")

    secondQuestion = prompt("Yoda é: \n Digite 1 para Jedi \n Digite 2 para Sith")
  
    thirdQuestion = prompt("Darth Vadder é pai de: \n Digite 1 para Luke&Leia \n Digite 2 para Anakin&Yoda")
 }

 if (firstQuestion == 1) { document.getElementById("p1")

 } else {document.getElementById("p2")
}