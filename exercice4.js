
function str_fisrt_letter(ch){
    let pattern =/^[a-d]/i; 
    let res = document.getElementById("res1");
    if(pattern.test(ch)){
    res.innerHTML=ch+" Cette chaîne commence par une lettre entre a et d ";
    }
    else {
    res.innerHTML=ch+" Cette chaîne ne commence pas par une lettre entre a et d ";
    }
}

function str_email(ch){
    let res = document.getElementById("res2");
    let c =ch.split('@');
    if(c.length==2){
    res.innerHTML=ch+" true ";
    }
    else {
    res.innerHTML="false";
    }
}


function str_number(ch){
    let res = document.getElementById("res3");
    let pattern =/\d/;
    if(ch.search(pattern)!=-1){
        res.innerHTML=ch+" true  ";
    }
    else {
    res.innerHTML=ch+" false  ";
    }
}


function str_replace(ch){
    let res = document.getElementById("res4");
    ch2=ch.replace(/\d/g,"*");
    res.innerHTML=ch2;
}