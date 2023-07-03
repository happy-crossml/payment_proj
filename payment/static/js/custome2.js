$(document).ready(function() {
    // Initialize total credit and debit variables
    var totalCredit = 0;
    var totalDebit = 0;
  
    // Handle form submission
    $('#transactionForm').submit(function(event) {
      event.preventDefault(); // Prevent form submission
      var account = $('#account').val();
      var credit = parseInt($('#credit').val());
      var debit = parseInt($('#debit').val());
  
      // Add the transaction to the table
      if (account && (credit || debit)) {
        var transactionRow = '<tr>';
        transactionRow += '<td>' + account + '</td>';
        transactionRow += '<td>' + (credit ? credit : '') + '</td>';
        transactionRow += '<td>' + (debit ? debit : '') + '</td>';
        transactionRow += '</tr>';
  
        $('#transactionTable tbody').append(transactionRow);
  
        // Update total credit and debit amounts
        totalCredit += credit ? credit : 0;
        totalDebit += debit ? debit : 0;
        $('#totalCredit').text(totalCredit);
        $('#totalDebit').text(totalDebit);
  
        // Reset form fields
        $('#account').val('');
        $('#credit').val('').prop('disabled', true);
        $('#debit').val('').prop('disabled', true);
      }
    });
  
    // Enable/disable credit and debit fields based on account selection
    $('#account').change(function() {
      var selectedAccount = $(this).val();
      if (selectedAccount) {
        $('#credit').prop('disabled', false);
        $('#debit').prop('disabled', false);
      } else {
        $('#credit').val('').prop('disabled', true);
        $('#debit').val('').prop('disabled', true);
      }
    });
  });
  