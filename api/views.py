from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from rest_framework import status
import os
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload
from decouple import config

class FileUploadView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request):
        file_obj = request.FILES.get('file')
        if not file_obj:
            return Response({'error': 'No file uploaded'}, status=400)
        temp_path = os.path.join('/tmp', file_obj.name)
        with open(temp_path, 'wb+') as temp_file:
            for chunk in file_obj.chunks():
                temp_file.write(chunk)
        
        try:
            # Google credentials
            SERVICE_ACCOUNT_FILE = config('GOOGLE_SERVICE_ACCOUNT_FILE')
            PARENT_FOLDER_ID = config('GOOGLE_PARENT_FOLDER_ID')
            SCOPES = ['https://www.googleapis.com/auth/drive.file']
            
            print(os.path.exists(SERVICE_ACCOUNT_FILE))  # Should print True
            creds = service_account.Credentials.from_service_account_file(
                SERVICE_ACCOUNT_FILE, scopes=SCOPES)
            service = build('drive', 'v3', credentials=creds)
            file_metadata = {
                'name': file_obj.name,
                'parents': [PARENT_FOLDER_ID]
              }
            
            media = MediaFileUpload(temp_path, resumable=True)
            uploaded_file = service.files().create(body=file_metadata, media_body=media, fields='id').execute()

            os.remove(temp_path)  # Clean up
            return Response({'file_id': uploaded_file.get('id')}, status=200)
        except Exception as e:
            return Response({'error': str(e)}, status=500)
            
            
            


