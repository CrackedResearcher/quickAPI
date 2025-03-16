from fastapi import FastAPI, APIRouter, Request
from fastapi.responses import JSONResponse
from .utils import get_path_params

app = FastAPI()

# Global mock spec
MOCK_SPEC = {
    "products": {"GET": {"status": 200, "response": {"items": ["Laptop", "Phone"]}}},
    "orders": {
        "POST": {
            "status": 201,
            "response": {"order_id": 123, "message": "Order placed"},
        }
    },
    "myorders": {
        "POST": {
            "status": 201,
            "response": {"order_id": 123, "message": "Order placed via your order"},
        }
    },
}


@app.api_route("/{path:path}", methods=["GET", "POST", "PUT", "DELETE"])
async def catch_all_handler(request: Request, path: str):

    method = request.method
    if method:
        print(f"methods are present in the request: {method}")
    
    
    path_param = request.path_params
    if path_param:
        print(f"path parameter was found in the request -> ", path_param)
        extracted_path_params = get_path_params(request.url)
        print(f"path parametrs parsed as these -> ", extracted_path_params)
    
    
    query_param = dict(request.query_params)
    if query_param:
        print(f"the request has sent the query parameters and its this: {query_param}")
    

    headers = dict(request.headers)
    if headers:
        print(f"the request has sent the headers and its this: {headers}")
    


    cookies = request.cookies  
    if cookies:
        print(f"the request has sent the cookies and its this: {cookies}")


    # Access JSON body (if present)
    body = None
    if method in ["POST", "PUT", "PATCH"]:  
        body = await request.json()  # Can raise an error if body is empty

    # Decision-making based on request attributes
    if method == "GET" and "debug" in query_param:
        return {"message": "Debug Mode", "query": query_param}

    if method == "POST" and "Authorization" in headers:
        return {"message": "Authenticated Request", "headers": headers}

    if "session_id" in cookies:
        return {"message": "Session found", "cookies": cookies}

    return {
        "method": method,
        "path": path,
        "path_param": get_path_params(request.url),
        "query_params": query_param,
        "headers": headers,
        "cookies": cookies,
        "body": body,
    }