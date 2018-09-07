# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework.views import APIView
from rest_framework.response import Response

from home.models import HomePage
from about.models import AboutPage
from contact.models import ContactPage
from .serializers import SiteDataSerializer

class SiteData(APIView):
    def get(self, request, format=None):
        home_page = HomePage.objects.first()
        about_page = AboutPage.objects.first()
        contact_page = ContactPage.objects.first()
        serializer = SiteDataSerializer(instance={
            'home_page': home_page,
            'about_page': about_page,
            'contact_page': contact_page
        })

        return Response(serializer.data)
