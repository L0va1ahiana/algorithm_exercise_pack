function equalClick() {
    // gather every needed elements and assign their value to respective variables
    const a = parseFloat(document.getElementById("number_a").value);
    const b = parseFloat(document.getElementById("number_b").value);

    // the element for the final output
    const answer_field = document.getElementById("answer");

    const answer = a * b;

    if (isNaN(answer)) { /* if the answer is none */
        console.clear();
        console.log("Error");

        // creating the error message
        const error_message = document.createElement("p");
        error_message.textContent = "Error! Make sure you input a number in every field";

        // styling it
        error_message.style.color = "red";
        error_message.style.paddingTop = "15px";

        // adding the error message to the body
        document.querySelector(".container").appendChild(error_message);

        // making sure it disappears after 3 seconds
        setTimeout(() => {
            document.querySelector(".container").removeChild(error_message);
        }, 3000);

    } else {
        console.clear()
        console.log(`${a} * ${b} = ${answer}`);
        answer_field.innerHTML = answer;
    }
}
