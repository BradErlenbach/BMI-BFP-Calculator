function calculateBMIandBFP() {
    var heightUnits = document.getElementById("heightUnits").value;
    var heightFeet = 0;
    var heightInches = 0;
    var heightCm = 0;

    if (heightUnits === "ft") {
        heightFeet = parseInt(document.getElementById("heightFeet").value);
        heightInches = parseInt(document.getElementById("heightInches").value);
    } else {
        heightCm = parseFloat(document.getElementById("heightFeet").value);
    }

    var weight = parseFloat(document.getElementById("weight").value);
    var age = parseFloat(document.getElementById("age").value);
    var gender = document.getElementById("gender").value;
    var weightUnits = document.getElementById("weightUnits").value;

    var heightInMeters = 0;

    if (heightUnits === "ft") {
        heightInMeters = ((heightFeet * 12) + heightInches) * 0.0254; // convert feet and inches to meters
    } else {
        heightInMeters = heightCm / 100; // convert centimeters to meters
    }

    if (weightUnits === "lbs") {
        weight /= 2.2046; // convert pounds to kilograms
    }

    var bmi = weight / Math.pow(heightInMeters, 2); // BMI calculation
    var bfp;

    // BFP calculation
    if (gender === "male") {
        bfp = 1.20 * bmi + 0.23 * age - 16.2;
    } else {
        bfp = 1.20 * bmi + 0.23 * age - 5.4;
    }

    var bmiStatus, bfpStatus;

    // Determine BMI status
    if (bmi < 18.5) {
        bmiStatus = "Underweight";
    } else if (bmi < 25) {
        bmiStatus = "Normal weight";
    } else if (bmi < 30) {
        bmiStatus = "Overweight";
    } else {
        bmiStatus = "Obese";
    }

    // Determine BFP status
    if (bfp < 6) {
        bfpStatus = "Essential fat";
    } else if (bfp < 24) {
        bfpStatus = "Athletes";
    } else if (bfp < 31) {
        bfpStatus = "Fitness";
    } else {
        bfpStatus = "Acceptable";
    }

    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "<p>BMI: " + bmi.toFixed(2) + " (" + bmiStatus + ")</p><p>Body Fat Percentage: " + bfp.toFixed(2) + "% (" + bfpStatus + ")</p>";
}
