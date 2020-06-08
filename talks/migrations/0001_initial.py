# Generated by Django 3.0.7 on 2020-06-08 10:00

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('images', '0001_initial'),
        ('categories', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Talk',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40, unique=True)),
                ('date_time', models.DateTimeField()),
                ('location', models.CharField(max_length=300)),
                ('about', models.CharField(max_length=1000)),
                ('price', models.DecimalField(decimal_places=2, max_digits=6)),
                ('category', models.ManyToManyField(blank=True, related_name='talks', to='categories.Category')),
                ('host', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='talks', to=settings.AUTH_USER_MODEL)),
                ('image', models.ManyToManyField(blank=True, related_name='Talk', to='images.TalkImage')),
            ],
        ),
    ]
