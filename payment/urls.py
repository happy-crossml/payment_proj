
from django.urls import path
from payment import views

urlpatterns = [
    path('', views.form, name='form'),
    path('transactions/', views.transactions_list, name='transactions'),
]
    