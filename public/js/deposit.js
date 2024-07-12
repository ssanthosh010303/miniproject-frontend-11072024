/*
 * Author: Bank Bros
 * Created on: 11/07/2024
*/
const url = "http://localhost:"
const formElement = document.querySelector("form");

async function getData(data) {
    const response = fetch(
        "", {
            method: "POST",
            body: data
        }
    );

    if (response.status != 200)
        throw new Error(response.status);

    return (await response).json();
}

function handleFormSubmission(event) {
    event.preventDefault();

    const formData = new FormData(formElement);
    const data = {
        amount: formData.get("amount"),
        cardNumber: formData.get("cardno"),
        pin: formData.get("pin")
    };

    getData(data)
    .then(result => {
        alert("Your amount has been credited successfully.");
    })
    .catch(error => {
        alert("Account creation failed with the reason: " + error);
    });
}

formElement.addEventListener("submit", handleFormSubmission);
