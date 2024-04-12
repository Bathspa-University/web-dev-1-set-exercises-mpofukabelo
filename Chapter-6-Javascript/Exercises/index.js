document.getElementById('calculate').addEventListener('click', function() {
    // Get values from inputs
    var costPerLiter = parseFloat(document.getElementById('cost').value);
    var litersPurchased = parseFloat(document.getElementById('liters').value);

    // Calculate total cost
    var totalCost = costPerLiter * litersPurchased;

    // Display total cost
    document.getElementById('total-cost').textContent = 'Total cost: $' + totalCost.toFixed(2);
});
