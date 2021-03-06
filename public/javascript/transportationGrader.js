$(document).ready(function() {
	var budgetForm = JSON.parse(localStorage.getItem("budgetForm"));
	console.log("budgetForm",budgetForm);

	var totalPay = parseInt(budgetForm.totalPay);
	console.log("totalPay", totalPay);

	var budgetForm9 = JSON.parse(localStorage.getItem("budgetForm9"));
	console.log("budgetForm9", budgetForm9);

	var transportationBudget = parseInt(budgetForm9.carFuel) + parseInt(budgetForm9.carRepairs) + parseInt(budgetForm9.bus) + parseInt(budgetForm9.train) + parseInt(budgetForm9.newCarFund) + parseInt(budgetForm9.otherTransportation);
	console.log("transportationBudget", transportationBudget);

	var transportationBudgetPercent = (transportationBudget*100)/totalPay;

	var totalTransportationBudget = $("<h2>Your total transportation budget is: " + transportationBudget + "</h2>");
	var percentOfBudget = $("<h2>Your transportation budget is " + transportationBudgetPercent + "% of your total budget.</h2>");

	var suggestedBudgetPercent = 15;

	var percentDiff = transportationBudgetPercent - suggestedBudgetPercent;
	console.log(percentDiff);

	var grade = getGrade(percentDiff);
	console.log(grade);
	var transportationGrade = $("<h5>Your grade is: " + grade + "</h5>");

	let transportationAdvice;

     if (grade === "A+") {
         transportationAdvice = advice.transportation[1];
     } else if (grade === "A-") {
         transportationAdvice = advice.transportation[2].slice(0, 1);
     }
     else if (grade === "B+") {
         transportationAdvice = advice.transportation[2].slice(0, 2);
     }
     else if (grade === "B-") {
         transportationAdvice = advice.transportation[2].slice(0, 3);
     }
     else if (grade === "C+") {
         transportationAdvice = advice.transportation[2].slice(0, 4);       
     }
     else if (grade === "C-") {
         transportationAdvice = advice.transportation[2].slice(0, 6);       
     }
      else if (grade === "D") {
         transportationAdvice = advice.transportation[2].slice(0, 7);       
     }
      else if (grade === "D-") {
         transportationAdvice = advice.transportation[2].slice(0, 8);       
     }
       else {
         transportationAdvice = advice.transportation[2];
     }

	$("#budgetTotal").append(totalTransportationBudget);
	$("#budgetPercent").append(percentOfBudget);
	$("#budgetGrade").append(transportationGrade);
	$("#advice").append(transportationAdvice);
});

$("#transportationGraderBack").on("click", function() {
	window.location.href = "/budgetForm/9";
});

$("#transportationGraderNext").on("click", function() {
	window.location.href = "/budgetForm/10";
});