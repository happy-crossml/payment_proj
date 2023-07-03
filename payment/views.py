from django.shortcuts import render, get_object_or_404
from payment.models import * 
from .models import Account, Transaction

# Create your views here.

# form page..
def form(request):
    transactions = Transaction.objects.all()
    account_id = request.GET.get('account')
    transaction_id = request.GET.get('transaction')
    
    selected_transaction = None
    if transaction_id:
        selected_transaction = Transaction.objects.get(id=transaction_id)

    context = {
        'transactions': transactions,
        'selected_transaction': selected_transaction,
        'account_id': account_id
    }
    return render(request, 'form.html', context=context)


# All Transactions.
def transactions_list(request):
    transaction = Transaction.objects.all()
    context = {'transaction':transaction}
    return render(request, 'transactions_list.html', context=context)


def dependantfield(request):
    account_id = request.GET.get('account')
    selected_account = get_object_or_404(Account, id=account_id) if account_id else None

    transactions = Transaction.objects.filter(account=selected_account) if selected_account else []

    accounts = Account.objects.all()
    return render(request, 'demo.html', {
        'accounts': accounts,
        'selected_account': selected_account,
        'transactions': transactions,
    })
    