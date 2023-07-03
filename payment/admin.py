from django.contrib import admin
from payment.models import Template, Transaction, Account

# Register your models here.
admin.site.register(Template)
admin.site.register(Transaction)
admin.site.register(Account)



class AdminTemplate(admin.ModelAdmin):
    list_display = ['transaction_no']
    
class AdminTransactiont(admin.ModelAdmin):
    list_display = ['description']    
    
class AdminAccount(admin.ModelAdmin):
    list_display = ['account_number', 'name']     
    
