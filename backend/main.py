from fastapi import FastAPI
from ItemExtractorService import ItemExtractorService


app = FastAPI()


@app.get("/")
def extract_items(image_url: str) -> str:
    itemExtractorService = ItemExtractorService()

    try:
        response = itemExtractorService.execute(image_url)
    except Exception as e:
        print("An error occurred: ", e)
        response = ""
    
    return response