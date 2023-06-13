
var out = document.getElementById("resultado");
function fnTabuada()
{
    let entrada = document.getElementById("Numbr").value
       
       if (entrada == "" || entrada <0 || entrada >9)
       {
        alert(`Insira um valor válido. ${entrada} não é um valor válido`)
       }
       else{
        entrada = parseInt(entrada)
        for (var i =0; i<10; i++)
        {
            out.innerHTML += `${entrada} X ${i} = ${(entrada*i)} <br>`
        }

       }  
}
