const quantityInput = document.getElementById('quantity');
const priceInput = document.getElementById('price');
const totalPriceSpan = document.getElementById('total-price');
const calculateBtn = document.getElementById('calculate-btn');

calculateBtn.addEventListener('click', calculateTotal);

function calculateTotal() {
  const quantity = parseInt(quantityInput.value);
  const price = parseFloat(priceInput.value);
  const total = quantity * price;
  totalPriceSpan.textContent = total.toFixed(2);
}
