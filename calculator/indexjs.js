let display = document.getElementById('calcscreen');

function cleardisplay(){
    display.innerText=' ';
}

function deleteonenum(){
    display.innerText= display.innerText.slice(0,-1) || ' ';
}

function symbolno(char){
    if(display.innerText===' '){
        display.innerText=char;
    }
    else{
        display.innerText+=char;
    }
}

function calculate(){
    try{
        display.innerText=eval(display.innerText.replace(/&times;/g, '*').replace(/&minus;/g, '-').replace(/%/g, '/100'));
    }
    catch{
        display.innerText='Error';
    }
}
