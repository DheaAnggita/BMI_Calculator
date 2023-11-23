const calculate = () => {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    const result = (weight / ((height / 100) * (height / 100))).toFixed(2);

    const typeLabel = document.getElementById("type");
    const resultHTML = document.getElementById("result");
    const resultContainer = document.getElementById("container");

    if (weight && height) {
        const text = `Your BMI is ${result}`;;
        const type = countCategoryBMI(result);
        swal({
            title: "Your Result!",
            text: text,
            icon: "success",
        }).then(() => {
            resultHTML.innerHTML = result;
            resultHTML.className = `text-${type.color}`;

            typeLabel.className = `text-${type.color}`;
            typeLabel.innerHTML = type.label.toUpperCase();

            resultContainer.className = "show";
        });
    }
}

const resetForm = () => {
    const form = document.getElementById("form");
    const resultContainer = document.getElementById("container");

    form.reset()
    resultContainer.className = "hide";
}

const countCategoryBMI = (bmi) => {
    const result = {
        skinny: {
            label: "skinny",
            color: "secondary"
        },
        normal: {
            label: "normal",
            color: "success"
        },
        fat: {
            label: "fat",
            color: "warning"
        },
        obesity: {
            label: "obesity",
            color: "danger"
        }
    };

    if (bmi < 18.5) return result.skinny;
    else if (bmi <= 24.9) return result.normal;
    else if (bmi <= 29.9) return result.fat;
    else if (bmi >= 30) return result.obesity;

    return undefined;
}
