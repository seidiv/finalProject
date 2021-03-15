from django.urls import path
from .views import RegisterMainboardAPI, PutSensorValue, SensorTypeList, RegisterSensorType, GetSensorValues, RegisterSensor, MainboardList, GetSensorList

urlpatterns = [
    path('api/mainboard/register', RegisterMainboardAPI.as_view()),
    path('api/mainboard/list', MainboardList.as_view()),
    path('api/sensors/registersensortypes', RegisterSensorType.as_view()),
    path('api/sensors/registersensortypeslist', SensorTypeList.as_view()),
    path('api/sensors/value', GetSensorValues.as_view()),
    path('api/sensors/putvalue', PutSensorValue.as_view()),
    path('api/sensors/list', GetSensorList.as_view()),
    path('api/sensors/registersensor', RegisterSensor.as_view()),
]
