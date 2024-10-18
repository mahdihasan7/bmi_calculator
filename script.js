function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const result = document.getElementById('result');

    if (isNaN(weight) || isNaN(height) || height === 0) {
        result.textContent = "Please enter valid values!";
        return;
    }

    const bmi = weight / (height * height);
    let category = '';
    let advice = '';

    // Determine BMI category and advice
    if (bmi < 18.5) {
        category = "Underweight";
        const minNormalWeight = 18.5 * (height * height);
        const weightToGain = minNormalWeight - weight;
        advice = `You need to gain at least ${weightToGain.toFixed(2)} kg to reach a normal weight.`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
        advice = "Great job! You are within the healthy weight range.";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
        const maxNormalWeight = 24.9 * (height * height);
        const weightToLose = weight - maxNormalWeight;
        advice = `You need to lose at least ${weightToLose.toFixed(2)} kg to reach a normal weight.`;
    } else {
        category = "Obesity";
        const maxNormalWeight = 24.9 * (height * height);
        const weightToLose = weight - maxNormalWeight;
        advice = `You need to lose at least ${weightToLose.toFixed(2)} kg to reach a normal weight.`;
    }

    // Display the result
    result.innerHTML = `Your BMI is ${bmi.toFixed(2)} (${category}).<br>${advice}`;
}
