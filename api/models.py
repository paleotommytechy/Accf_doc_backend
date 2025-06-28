from django.db import models
from django.contrib.auth.models import User

class Sermon(models.Model):
    title = models.CharField(max_length=200)
    video_link = models.URLField(blank=True, null=True)
    audio = models.FileField(upload_to='sermons/audio/', blank=True, null=True)
    pdf = models.FileField(upload_to='sermons/pdf/', blank=True, null=True)
    date = models.DateField()

    def __str__(self):
        return self.title

class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateTimeField()
    location = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.title} at {self.location}"

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Volunteer(models.Model):
    name = models.CharField(max_length=100)
    ministry = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name} - {self.ministry}"

class MemberProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    # Optional extra fields
    phone = models.CharField(max_length=20, blank=True, null=True)
    address = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.user.username

class Donation(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"₦{self.amount} by {self.user.username if self.user else 'Anonymous'}"