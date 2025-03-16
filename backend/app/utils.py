import re
from urllib.parse import urlparse

def get_path_params(url: str):
    parsed_url = urlparse(str(url))
    path_params = re.findall(r'(\d+)', parsed_url.path)
    return path_params