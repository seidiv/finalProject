from django.db import models
from django.contrib.auth.models import AbstractUser, AbstractBaseUser, BaseUserManager
from accounts.models import Account
from django.conf import settings

# sensor type


class SensorType(models.Model):

    description = models.CharField(max_length=100)

    def __str__(self):
        return self.description


class MainBoard(models.Model):
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.PROTECT,
    )

    description = models.CharField(max_length=100)

    def __str__(self):
        return self.description


class Sensors(models.Model):
    type_id = models.ForeignKey(SensorType, on_delete=models.CASCADE)
    mainboard_id = models.ForeignKey(MainBoard, on_delete=models.CASCADE)
    description = models.CharField(max_length=100)

    def __str__(self):
        return self.description
# all sensors values


class SensorValue(models.Model):
    sensor_id = models.ForeignKey(Sensors, on_delete=models.PROTECT)
    mainboard_id = models.ForeignKey(MainBoard, on_delete=models.PROTECT)
    time_stamp = models.DateTimeField(auto_now_add=True)
    value = models.FloatField()

    def __str__(self):
        return str(self.value)


myModels = [SensorType, MainBoard, Sensors, SensorValue]
