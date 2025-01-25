function generatebill() {
    var units = parseInt(document.getElementById("unit").value);
    var bill;
    if (units <= 100) {
        bill = 0;
    }
    else if (units > 100 && units <= 200) {
        bill = (units - 100) * 5;
    }
    else if (units > 200) {
        bill = ((units - 200) * 10) + 500;
    }
    console.log("Bill Amount is " + bill);
    var resultdiv=document.getElementById("result");
    resultdiv.innerHTML="Bill is "+bill;

}