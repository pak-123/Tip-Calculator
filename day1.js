// Get HTML elements by their IDs
const btn = document.getElementById("calculate");
const billinput = document.getElementById('bill');
const tipinput = document.getElementById('tip');
const totalspan = document.getElementById('total');

// Function to calculate total amount including tip
function calculatetotal() {
    const billvalue = billinput.value;  // Get the bill amount entered by the user
    const tipvalue = tipinput.value;    // Get the tip percentage entered by the user

    // Calculate total = bill + (bill × tip%) 
    const totalvalue = billvalue * (1 + tipvalue / 100);

    // Display the final total rounded to 2 decimal places
    totalspan.innerHTML = totalvalue.toFixed(2);
}

// Add event listener to calculate total when button is clicked
btn.addEventListener("click", calculatetotal);