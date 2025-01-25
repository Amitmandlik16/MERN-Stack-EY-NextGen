var units=350;
var bill;
if(units<=100)
{
    bill=0;
}
else if(units>100 && units<=200)
{
    bill=(units-100)*5;
}
else if(units>200)
{
    bill=((units-200)*10)+500;
}
console.log("Bill Amount is "+bill);