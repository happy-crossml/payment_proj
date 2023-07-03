$(document).ready(function() {
    // Add event listener for form submission
    $("#transaction-form").submit(function(event) {
      event.preventDefault();
  
      // Get the form values
      var transactionNo = $("#transaction-no").val();
      var amount = parseFloat($("#amount").val());
      var type = $("#type").val();
  
      // Calculate debit and credit based on the selected type
      var debit = type === "debit" ? amount : 0;
      var credit = type === "credit" ? amount : 0;
  
      // Update the right and left tables with the new row
      var newRow = "<tr>" +
        "<td><input type='checkbox'></td>" +
        "<td>" + transactionNo + "</td>" +
        "<td>" + credit + "</td>" +
        "<td>" + debit + "</td>" +
        "<td></td>" +
        "</tr>";
  
      $("#right-table tbody").append(newRow);
      $("#left-table tbody").append(newRow);
  
      // Clear the form fields
      $("#amount").val("");
  
      // Recalculate differences
      calculateDifferences();
    });
  
    // Calculate differences between right and left tables
    function calculateDifferences() {
      var rightTableRows = $("#right-table tbody tr");
      var leftTableRows = $("#left-table tbody tr");
  
      var debitDiff = 0;
      var creditDiff = 0;
  
      // Iterate through rows and calculate differences
      rightTableRows.each(function(index) {
        var rightRow = $(this);
        var leftRow = leftTableRows.eq(index);
  
        var rightCheckbox = rightRow.find("input[type='checkbox']");
        var leftCheckbox = leftRow.find("input[type='checkbox']");
  
        var rightDebit = parseFloat(rightRow.find("td:eq(3)").text());
        var leftDebit = parseFloat(leftRow.find("td:eq(3)").text());
  
        var rightCredit = parseFloat(rightRow.find("td:eq(2)").text());
        var leftCredit = parseFloat(leftRow.find("td:eq(2)").text());
  
        // Highlight matching rows
        if (
          rightCheckbox.prop("checked") &&
          leftCheckbox.prop("checked") &&
          (rightDebit === leftDebit || rightCredit === leftCredit)
        ) {
          rightRow.addClass("bg-success");
          leftRow.addClass("bg-success");
        } else {
          rightRow.removeClass("bg-success");
          leftRow.removeClass("bg-success");
        }
  
        // Calculate debit difference
        if (rightCheckbox.prop("checked")) {
          debitDiff += rightDebit - leftDebit;
        }
  
        // Calculate credit difference
        if (rightCheckbox.prop("checked")) {
          creditDiff += rightCredit - leftCredit;
        }
      });
  
      // Update the summary values
      $("#debit-diff").text(debitDiff.toFixed(2));
      $("#credit-diff").text(creditDiff.toFixed(2));
      $("#total-diff").text((debitDiff + creditDiff).toFixed(2));
    }
  });
  