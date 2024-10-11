function toggleOptions(box) {
    // Hide all optional sections
    let optionalSections = document.querySelectorAll('.optional');
    optionalSections.forEach(section => section.style.display = 'none');

    // Display the optional section related to the clicked box
    let optionalSection = box.querySelector('.optional');
    optionalSection.style.display = 'block';

    // Update the total amount
    let priceElement = box.querySelector('.price');
    let priceValue = priceElement.getAttribute('data-price'); // Get the data-price attribute
    document.getElementById('total-amount').textContent = parseFloat(priceValue).toFixed(2);

    // Remove the 'selected' class from all boxes
    let allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(b => b.classList.remove('selected'));

    // Add the 'selected' class to the clicked box
    box.classList.add('selected');

    // Select the radio button inside the clicked box
    let radioButton = box.querySelector('input[type="radio"]');
    radioButton.checked = true;
}


function addToCart() {
    // Get the total price
    const totalAmount = document.getElementById('total-amount').textContent;

    // Display an alert with the total price
    alert("Item added to cart. Total: $" + totalAmount + " USD");
} 
