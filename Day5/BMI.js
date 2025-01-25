var weight = 70;
var height = 1.84;

var bmi = weight / (height) ** 2;
console.log("BMI is " + bmi);

var status;
if (bmi < 18.5) {
    status = "Under weight";
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    status = "Normal weight";
}
else if (bmi >= 25 && bmi <= 29.9) {
    status = "Over weight";
}
else {
    status = "obese"
}
console.log("Person is " + status);

