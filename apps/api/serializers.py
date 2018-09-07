import copy
from rest_framework import serializers
from wagtail.wagtailcore.templatetags.wagtailcore_tags import RichText
from wagtail.wagtailimages.models import Image

from home.models import HomePage
from about.models import AboutPage
from contact.models import ContactPage
from project.models import ProjectPage


class HomePageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomePage
        fields = ('__all__')

class AboutPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutPage
        fields = ('__all__')

class ContactPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactPage
        fields = ('__all__')

class ProjectPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectPage
        fields = ('__all__')

class SiteDataSerializer(serializers.Serializer):
    home_page = HomePageSerializer()
    about_page = AboutPageSerializer()
    contact_page = ContactPageSerializer()
    project_pages = ProjectPageSerializer(many=True)
