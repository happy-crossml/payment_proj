function updateDebitCredit(selectElement) {
    var debitInput = document.getElementById('debit-input');
    var creditInput = document.getElementById('credit-input');
    
    if (selectElement.value === '11200' || selectElement.value === '11400') {
      debitInput.disabled = false;
      creditInput.disabled = true;
      creditInput.value = '';
    } else {
      debitInput.disabled = true;
      creditInput.disabled = false;
      debitInput.value = '';
    }
    
    calculateTotal();
  }
  
  function calculateTotal() {
    var debitInputs = document.querySelectorAll('#transaction-table tbody tr td:nth-child(2) input');
    var creditInputs = document.querySelectorAll('#transaction-table tbody tr td:nth-child(3) input');
    var totalDebit = 0;
    var totalCredit = 0;
    
    debitInputs.forEach(function(input) {
      totalDebit += parseFloat(input.value) || 0;
    });
    
    creditInputs.forEach(function(input) {
      totalCredit += parseFloat(input.value) || 0;
    });
  } 
  