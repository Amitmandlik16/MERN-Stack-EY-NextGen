function bmi() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    var bmi = weight / (height) ** 2;
    console.log("BMI is " + bmi);

    var img = document.createElement('img');
    var status;

    var existingImage = document.getElementById("bmiImage");
    if (existingImage) {
        existingImage.remove();
    }

    if (bmi < 18.5) {
        status = "Under weight";
        img.src = "https://cdn3.iconfinder.com/data/icons/people-emoji/50/Skinny-1024.png";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal weight";
        img.src = "https://static.thenounproject.com/png/687023-200.png";
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        status = "Over weight";
        img.src = 'https://tse2.mm.bing.net/th?id=OIP.5PjvBl7iOac-F4DJ6vt43QAAAA&pid=Api&P=0&h=180';
    }
    else {
        status = "Obese";
        img.src = 'https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-obesity-clipart-cartoon-cartoon-fat-man-on-a-white-background-vector-png-image_6811138.png';
    }
    var resultdiv = document.getElementById("result");
    resultdiv.innerHTML = "BMI is " + bmi + "\nPerson is " + status;

    img.height = 300;
    img.id = "bmiImage";
    var resultdiv = document.getElementById("resultimg");
    resultdiv.appendChild(img);
}