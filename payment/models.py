from django.db import models


# Template table Model
class Template(models.Model):
    template_name = models.CharField(max_length=100, blank=True)
    transaction_date = models.DateField()
    reference_no = models.CharField(max_length=50, blank=True)
    transaction_no = models.CharField(max_length=50, blank=True)
    
    def __str__(self):
        return self.transaction_no


class Account(models.Model):
    type = models.CharField(max_length=125)
   
    def __str__(self):
        return self.type
    
    
# Transaction table model 
class Transaction(models.Model):
    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    template = models.ForeignKey(Template, on_delete=models.CASCADE)
    debit = models.DecimalField(max_digits=10, decimal_places=2)
    credit = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField(blank=True)
    description = models.TextField(blank=True)
    
    def __str__(self):
        return self.description
