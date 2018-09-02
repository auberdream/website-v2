# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from home.models import HomePage
from .serializers import SiteDataSerializer

class SiteData(APIView):
    def get(self, request, format=None):
        home_page = HomePage.objects.first()
        serializer = SiteDataSerializer(instance={
            'home_page': home_page,
        })

        return Response(serializer.data)
