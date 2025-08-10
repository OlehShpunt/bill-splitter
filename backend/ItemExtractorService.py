import base64
import requests
import os
from mistralai import Mistral
from dotenv import load_dotenv
import re


class ItemExtractorService:

    def __init__(self) -> None:
        pass
    
    def execute(self, image):

        # Getting the base64 string
        base64_image = self.encode_image(image)

        if not base64_image:
            raise Exception("Failed to encode image to base64")

        # Load environment variables from .env file to the current environment
        load_dotenv()
        api_key = os.environ["MISTRAL_API_KEY"]

        client = Mistral(api_key=api_key)

        chat_response = client.chat.complete(
            model="pixtral-12b-2409",
            messages=[
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": "Extract all item–price pairs from the bill and return them as a string in the specified format. Omit currency symbols. Treat duplicate items as separate entries even if they have the same name and price. Do not combine quantities - instead add the duplicate to result the QUANTITY number of times. Only extract the item name and its price. Put tax, and tips in json as shown in the example. Tax and tips cannot be duplicate. Format the output as: [{name: Apple, value: 2.50}, {name: Apple, value: 2.50}, {name: Bread, value: 3.00}, {name: Tax, value: 10}, {name: Tip, value: 4}].",
                        }, 
                        {
                            "type": "image_url",
                            "image_url": f"data:image/jpeg;base64,{base64_image}" 
                        }
                    ]
                }
            ]
        )

        raw_data = str(chat_response.choices[0].message.content)

        # Remove unnecessary whitespace around curly braces
        cleaned = re.sub(r'\s*{\s*', '{ ', raw_data)
        cleaned = re.sub(r'\s*}\s*', ' }', cleaned)
        cleaned = cleaned.replace("\n", "")[7:-3]
        
        # TODO: Check whether the cleaned data a valid JSON string

        return cleaned
    

    def encode_image(self, image):
        try:
            # If the input is bytes, encode it directly
            if isinstance(image, bytes):
                return base64.b64encode(image).decode('utf-8')
            # Otherwise, assume it's a file-like object
            return base64.b64encode(image.read()).decode('utf-8')
        except Exception as e:
            print(f"Error: {e}")
            raise Exception("Failed to encode image to base64")