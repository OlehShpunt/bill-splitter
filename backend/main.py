from ItemExtractorService import ItemExtractorService
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import StreamingResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

print("[server] Server started")


@app.post("/")
async def upload_image(file: UploadFile = File(...)):
    # Validate file type
    if file.content_type not in ["image/jpeg", "image/jpg", "image/png"]:
        raise HTTPException(status_code=400, detail="Only JPEG, JPG or PNG files are allowed")

    # Read file content into memory
    content = await file.read()
    if len(content) > 10 * 1024 * 1024:  # 10MB limit
        raise HTTPException(status_code=400, detail="File size exceeds 10MB")

    # # Generate a unique key
    # file_key = str(uuid.uuid4())
    # temp_storage = {}
    # temp_storage[file_key] = {"content": content, "content_type": file.content_type}

    # # Construct temporary URL
    # SERVER_URL = "http://localhost:8000"
    # image_url = f"{SERVER_URL}/image/{file_key}"

    itemExtractorService = ItemExtractorService()

    try:
        response = itemExtractorService.execute(content)
    except Exception as e:
        print("An error occurred: ", e)
        response = ""

    # # Clean up: Remove file from memory
    # temp_storage.pop(file_key, None)
    
    return response