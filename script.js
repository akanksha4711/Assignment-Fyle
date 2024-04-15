const form = document.getElementById("form");
const banner = document.getElementById("banner");
const closeBtn = document.getElementById("close");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const {annualIncome, extraIncome, ageGroup, deductions} = form.elements;
    let tax;
    let overallIncome = Number(annualIncome.value) + Number(extraIncome.value) - Number(deductions.value)
    if (overallIncome <= 800000) tax = 0;
    else {
        if(ageGroup.value === "1") tax = 0.3 * overallIncome;
        else if(ageGroup.value === '2') tax = 0.4 * overallIncome;
        else tax = 0.1 * overallIncome;
    }
    let incomeAfterTax = overallIncome - tax;
    if (incomeAfterTax < 0) incomeAfterTax = 0;
    // console.log(incomeAfterTax);
    displayTotalIncomeBanner(incomeAfterTax);
})


const displayTotalIncomeBanner = (income) => {
    const incomeElement = document.getElementById("income");
    incomeElement.innerText = income;
    banner.style.display = "block";
    
}

closeBtn.addEventListener("click", () => {
    banner.style.display = "none";
})