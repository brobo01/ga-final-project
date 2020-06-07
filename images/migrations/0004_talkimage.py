# Generated by Django 3.0.7 on 2020-06-06 14:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('talks', '0002_talk_price'),
        ('images', '0003_delete_talkimage'),
    ]

    operations = [
        migrations.CreateModel(
            name='TalkImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.CharField(max_length=500)),
                ('talk', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='images', to='talks.Talk')),
            ],
        ),
    ]