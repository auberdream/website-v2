# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from wagtail.wagtailcore.models import Page
from wagtail.wagtailcore.fields import RichTextField
from wagtail.wagtailadmin.edit_handlers import FieldPanel
from wagtail.wagtailsearch import index


class AboutPage(Page):
    about_0 = models.CharField(max_length=500, default="")
    about_1 = models.CharField(max_length=500, default="")
    about_2 = models.CharField(max_length=500, default="")

    content_panels = Page.content_panels + [
        FieldPanel('about_0', classname="full"),
        FieldPanel('about_1', classname="full"),
        FieldPanel('about_2', classname="full")
    ]
