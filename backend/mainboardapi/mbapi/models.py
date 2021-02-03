from django.db import models
from django.conf import settings
import datetime
import uuid
# sensor type


class SensorType(models.Model):
    description = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.description


class MainBoard(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    mainboard_user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        related_name="main_board",
        on_delete=models.PROTECT,
        default=0,
    )
    description = models.CharField(max_length=100)

    def __str__(self):
        return self.description


class Sensors(models.Model):
    type_id = models.ForeignKey(SensorType, on_delete=models.PROTECT)
    mainboard_id = models.ForeignKey(MainBoard, on_delete=models.PROTECT)
    description = models.CharField(max_length=100)

    def __str__(self):
        return self.description
# all sensors values


class SensorValue(models.Model):
    mainboard_id = models.ForeignKey(MainBoard, on_delete=models.PROTECT)
    sensor_id = models.ForeignKey(Sensors, on_delete=models.PROTECT)
    time_stamp = models.DateTimeField(default=datetime.datetime.now)
    value = models.FloatField()

    def __str__(self):
        return str(self.value)


myModels = [SensorType, MainBoard, Sensors, SensorValue]
