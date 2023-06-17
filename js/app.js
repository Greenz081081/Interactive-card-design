function displayContents () {

    // DOM  INPUT DOCUMENTS
    const userName = document.querySelector("#cardHolder").value
    const userNumber = document.querySelector("#cardNumber").value
    const userMonth = document.querySelector("#userMonth").value
    const userYear = document.querySelector("#userYear").value
    const userCvc = document.querySelector("#CVC").value

    // DOM OUTPUT DOCUMENTS
    const displayName = document.querySelector("#frontCardP2")
    const displayNumber = document.querySelector("#frontCardP1")
    const displayMonth = document.querySelector("#frontCardP3")
    const displayYear = document.querySelector("#frontCardP4")
    const displayCVC = document.querySelector("#frontCardCvc")

    let displayUserName = document.createElement("p")
    let displayUserNumber = document.createElement("p")
    let displayUserMonth = document.createElement("p")
    let displayUserYear = document.createElement("p")
    let displayUserCVC = document.createElement("p") 

    displayUserName.innerHTML = userName
    displayUserNumber.innerHTML = userNumber
    displayUserMonth.innerHTML = userMonth
    displayUserYear.innerHTML = userYear
    displayUserCVC.innerHTML = userCvc

    displayName.appendChild(displayUserName)
    displayNumber.appendChild(displayUserNumber)
    displayMonth.appendChild(displayUserMonth)
    displayYear.appendChild(displayUserYear)
    displayCVC.appendChild(displayUserCVC)
}