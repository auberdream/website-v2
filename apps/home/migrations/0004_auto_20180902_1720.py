# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2018-09-02 17:20
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailforms', '0003_capitalizeverbose'),
        ('wagtailcore', '0040_page_draft_title'),
        ('wagtailredirects', '0005_capitalizeverbose'),
        ('home', '0003_auto_20180902_1657'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='homepage',
            name='page_ptr',
        ),
        migrations.DeleteModel(
            name='HomePage',
        ),
    ]