const submitButton = document.querySelector("#submit")
submitButton.addEventListener("click", (event) => {
    event.preventDefault()

    displayContents()
})

// A function to display the input contents
function displayContents () {


    // DOM  INPUT DOCUMENTS
    const userName = document.querySelector("#cardHolder").value
    const userNumber = document.querySelector("#cardNumber").value
    const userMonth = document.querySelector("#userMonth").value
    const userYear = document.querySelector("#userYear").value
    const userCvc = document.querySelector("#CVC").value

    if (userName == "" || userNumber == "" || userMonth == "" || userYear == "" || userCvc == "") {
        alert ("The fields must not be empty!")

        return false
    } 

    else {

    // DOM OUTPUT DOCUMENTS
    const displayName = document.querySelector("#frontCardP2")
    const displayNumber = document.querySelector("#frontCardP1")
    const displayMonth = document.querySelector("#frontCardP3")
    const displayYear = document.querySelector("#frontCardP4")
    const displayCVC = document.querySelector("#frontCardCvc")

    // CREATE DOCUMENT ELEMENTS
    let displayUserName = document.createElement("p")
    let displayUserNumber = document.createElement("p")
    let displayUserMonth = document.createElement("p")
    let displayUserYear = document.createElement("p")
    let displayUserCVC = document.createElement("p") 

    // SET CONTENTS
    displayUserName.innerHTML = userName
    displayUserNumber.innerHTML = userNumber
    displayUserMonth.innerHTML = userMonth
    displayUserYear.innerHTML = userYear
    displayUserCVC.innerHTML = userCvc

    // APPEND CONTENTS
    displayName.appendChild(displayUserName)
    displayNumber.appendChild(displayUserNumber)
    displayMonth.appendChild(displayUserMonth)
    displayYear.appendChild(displayUserYear)
    displayCVC.appendChild(displayUserCVC)


}

}

// A function to clear the input and output contents
function clearOutput () {

    const clearFrontCard = document.querySelector(".frontCard")
    clearFrontCard.replaceChildren()

    const clearBackCard = document.querySelector("#frontCardCvc")
    clearBackCard.replaceChildren()
}