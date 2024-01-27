# scrape.py

import requests

def fetch_data():
    # Your web scraping logic here
    response = requests.get('https://example.com')
    return response.text
