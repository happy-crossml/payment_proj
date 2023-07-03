from django import forms
from .models import Template, Transaction


# Template form
class TemplateForm(forms.ModelForm):
    class Meta:
        model = Template
        fields = '__all__'


# Transaction form
class TransactionForm(forms.ModelForm):
    class Meta:
        model = Transaction
        fields = '__all__'
