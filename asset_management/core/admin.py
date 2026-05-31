from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, Asset, InventoryItem, Assignment, RepairTicket


# ✅ Custom User Admin
@admin.register(User)
class UserAdmin(BaseUserAdmin):
    list_display = ('username', 'email', 'role', 'is_staff')
    list_filter = ('role',)


# ✅ Asset Admin
@admin.register(Asset)
class AssetAdmin(admin.ModelAdmin):
    list_display = ('name', 'type', 'status', 'purchase_date')
    search_fields = ('name', 'serial_number')
    list_filter = ('status', 'type')
    ordering = ('-purchase_date',)


# ✅ Inventory Admin
@admin.register(InventoryItem)
class InventoryAdmin(admin.ModelAdmin):
    list_display = ('item_type', 'quantity', 'threshold')


# ✅ Assignment Admin
@admin.register(Assignment)
class AssignmentAdmin(admin.ModelAdmin):
    list_display = ('asset', 'employee', 'date_assigned', 'date_returned')


# ✅ Repair Ticket Admin
@admin.register(RepairTicket)
class RepairTicketAdmin(admin.ModelAdmin):
    list_display = ('asset', 'status', 'assigned_technician')