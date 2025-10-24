let balance = 35000;
showBalance(balance)
 

// action
 function addTransaction() {
    const category = document.getElementById('category'); // input element
    const amount = document.getElementById('amount'); // input element
    const date = document.getElementById('date'); // input element
    const shop = document.getElementById('shop'); // input element
    
    showTransactions(date.value, shop.value, category.value, amount.value);
    updateBalance(amount.value);
    shop.value = '';
    amount.value = '';
    date.value = '';
    category.value = 'food';
 }

 function updateBalance(amount) {
    balance = balance - parseInt(amount);
    showBalance(balance);
 }


 function showBalance(balance) {
    document.getElementById('balance').innerText = `${balance}`;
 }


 function showTransactions(date, shop, category, amount) {
    const transctions = document.getElementById('list');  // ul element
    const li = document.createElement('li');
    
    // Create structured layout
   li.innerHTML = `
    <span class="date">${date}</span>
    <span class="shop">${shop}</span>
    <span class="category">${category}</span>
    <span class="amount">${amount} kr.</span>
  `;
    transctions.appendChild(li);
 }