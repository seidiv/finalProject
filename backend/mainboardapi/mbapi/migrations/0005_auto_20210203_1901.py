# Generated by Django 3.1.4 on 2021-02-03 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mbapi', '0004_auto_20210203_1858'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mainboard',
            name='description',
            field=models.CharField(max_length=100),
        ),
    ]
