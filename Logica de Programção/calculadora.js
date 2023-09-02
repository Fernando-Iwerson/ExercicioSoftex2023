const erroCalculadora = {
    erroDivisaoZero: 1,
    erroSemOperacao: 2,
    erro: 3
}

function calculadora(n1,n2,operador){
    

    if(operador == 1){
        console.log('opção escolhida: soma')
        res = n1+n2;
    }
    else if(operador == 2){
        console.log('opção escolhida: subtração')
        res = n1-n2;
    }
    else if(operador == 3){
        console.log('opção escolhida: multiplicação')
        res = n1*n2;
    }
    else if(operador == 4){
        if(n2 !=0){
            console.log('opção escolhida: divisão')
        res = n1/n2;
        }else{
            throw new Error("divisão por zero não existe");
        }
        
    }else {
        throw new Error("opção nao exite");
    }
    return res;
}
try{
    res = calculadora(2,2,4);
    console.log(res)
}
catch(error){
    console.log("deu erro:"+error)

}



    

