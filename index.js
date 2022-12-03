function changeValue(value){
    // const rating = document.getElementById("rated");
    // rating.innerHTML= value;
    document.getElementById('rated').innerText=value;
}

document.addEventListener('DOMContentLoaded',
()=>
{

    const rateStart = document.querySelector(".Ratingstart")
    const thankYou = document.querySelector(".thankYou")
    const submitButton = document.getElementById("btn-sub")
    const rateButton = document.getElementById("btn-try")

    // const rating = document.getElementById("rated")
    // const rates = document.querySelector(".rate-btn")

    submitButton.addEventListener("click", () => {
        thankYou.classList.remove("hidden")
        rateStart.style.display ="none"
    })

    rateButton.addEventListener("click", () => {
        thankYou.classList.add("hidden")
        rateStart.style.display ="block"
    })

});