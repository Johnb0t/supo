$("#budgetBtn8").on("click", function() {
    var budgetObject = {
    	lifeInsurance: $("#lifeInsurance").val(),
    	healthInsurance: $("#healthInsurance").val(),
    	autoInsurance: $("#autoInsurance").val(),
    	homeRentalInsurance: $("#homeRentalInsurance").val(),
    	disabilityInsurance: $("#disabilityInsurance").val(),
    	longTermInsurance: $("#longTermInsurance").val()
    };
    console.log("budgetObject form 8", budgetObject);
    localStorage.setItem("budgetForm8", JSON.stringify(budgetObject));

    window.location.href = "/budgetForm/9";
});