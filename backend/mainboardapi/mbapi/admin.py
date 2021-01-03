from django.contrib import admin
from .models import myModels
# Register your models here.
for item in myModels:
    admin.site.register(item)
