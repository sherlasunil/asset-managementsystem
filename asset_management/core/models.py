from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

class User(AbstractUser):
    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('employee', 'Employee'),
    )

    role = models.CharField(max_length=10, choices=ROLE_CHOICES)

class Asset(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=50)
    serial_number = models.CharField(max_length=100, blank=True, null=True)
    status = models.CharField(max_length=50)
    purchase_date = models.DateField(blank=True, null=True)

class Assignment(models.Model):
    asset = models.ForeignKey('Asset', on_delete=models.CASCADE) 
    employee = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    date_assigned = models.DateField()
    date_returned = models.DateField(null=True, blank=True)

class InventoryItem(models.Model):
    item_type = models.CharField(max_length=100)
    quantity = models.IntegerField()
    threshold = models.IntegerField()

class RepairTicket(models.Model):
    asset = models.ForeignKey(Asset, on_delete=models.CASCADE)
    issue = models.TextField()
    status = models.CharField(max_length=50)
    assigned_technician = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)