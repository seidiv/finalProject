from rest_framework import serializers
from .models import Sensors, SensorType, SensorValue, MainBoard
from django.contrib.auth import get_user_model
User = get_user_model()


class SensorTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SensorType
        fields = ('id', 'description')


class SensorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sensors
        fields = '__all__'


class MainBoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainBoard
        fields = ('id',  'mainboard_user', 'description')
        depth = 0


class SensorValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = SensorValue
        fields = '__all__'
