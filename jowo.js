function main() {
    const numone = document.getElementById("firstnum").value;
    const numtwo = document.getElementById("secondnum").value;
    const operatorpick = document.getElementById("operators").value;
    const button=document.getElementById("resultbutton");
    if(operatorpick=="plus"){
        const result=Number(numone)+Number(numtwo);
        button.textContent=String(result)
    }
    else if(operatorpick=="minus"){
        const result=Number(numone)-Number(numtwo);
        button.textContent=String(result)
    }
    else if(operatorpick=="divide"){
        const result=Number(numone)/Number(numtwo);
        button.textContent=String(result)
    }
    else if(operatorpick=="times"){
        const result=Number(numone)*Number(numtwo);
        button.textContent=String(result)
    }
}