import re
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

app = FastAPI()

# Global mock spec
MOCK_SPEC = {
    "products": {
        "GET": {"status": 200, "response": {"items": ["Laptop", "Phone"]}},
        "POST": {"status": 201, "response": {"message": "Product added"}},
    },
    "orders": {
        "GET": {"status": 200, "response": {"orders": ["Order1", "Order2"]}},
        "POST": {"status": 201, "response": {"order_id": 123, "message": "Order placed"}},
        "PUT": {"status": 200, "response": {"message": "Order updated"}},
        "DELETE": {"status": 204, "response": {}},
    },
    "categories": {
        "GET": {"status": 200, "response": {"categories": ["Electronics", "Clothing"]}},
        "POST": {"status": 201, "response": {"message": "Category created"}},
    },

    # User Endpoints
    "users": {
        "GET": {"status": 200, "response": {"users": ["John", "Jane"]}},
        "POST": {"status": 201, "response": {"user_id": 1232, "message": "User created"}},
    },
    "users/{id}": {
        "GET": {"status": 200, "response": {"user": "John Doe", "id": 123}},
        "PUT": {"status": 200, "response": {"message": "User updated"}},
        "DELETE": {"status": 204, "response": {}},
    },
    "users/{id}/profile": {
        "GET": {"status": 200, "response": {"profile": {"name": "John Doe", "age": 30}}},
        "PUT": {"status": 200, "response": {"message": "Profile updated"}},
    },
    "users/{id}/settings": {
        "GET": {"status": 200, "response": {"settings": {"theme": "dark"}}},
        "PUT": {"status": 200, "response": {"message": "Settings updated"}},
    },

    # User Orders and Payments
    "users/{id}/orders": {
        "GET": {"status": 200, "response": {"orders": ["Order1", "Order2"]}},
        "POST": {"status": 201, "response": {"order_id": 53353, "message": "Order created"}},
    },
    "users/{id}/orders/{order_id}": {
        "GET": {"status": 200, "response": {"order": "Order1", "id": 123}},
        "PUT": {"status": 200, "response": {"message": "Order updated"}},
        "DELETE": {"status": 204, "response": {}},
    },
    "users/{id}/payments/{payment_id}/receipts/{receipt_id}": {
        "GET": {"status": 200, "response": {"receipt": "PDF Data"}},
        "POST": {"status": 201, "response": {"message": "Receipt created"}},
    },

    # Deeply Nested Routes
    "organizations/{org_id}/teams/{team_id}/members/{member_id}": {
        "GET": {"status": 200, "response": {"member": "John Doe"}},
        "PUT": {"status": 200, "response": {"message": "Member updated"}},
        "DELETE": {"status": 204, "response": {}},
    },
    "companies/{company_id}/departments/{dept_id}/employees/{emp_id}": {
        "GET": {"status": 200, "response": {"employee": "Jane Doe"}},
        "PUT": {"status": 200, "response": {"message": "Employee updated"}},
        "DELETE": {"status": 204, "response": {}},
    },

    # Edge Cases
    "users/{id}/notifications/{notification_id}": {
        "DELETE": {"status": 204, "response": {}},
    },
    "users/{id}/invoices/{invoice_id}/pdf": {
        "GET": {"status": 200, "response": {"invoice": "PDF Binary Data"}},
    },
    "users/{id}/addresses": {
        "GET": {"status": 200, "response": {"addresses": ["123 Main St", "456 Park Ave"]}},
        "POST": {"status": 201, "response": {"message": "Address added"}},
        "DELETE": {"status": 204, "response": {}},
    },
    "orders/{id}/status": {
        "PATCH": {"status": 200, "response": {"message": "Order status updated"}},
    },
    "products/{id}/reviews/{review_id}": {
        "PUT": {"status": 200, "response": {"message": "Review updated"}},
        "DELETE": {"status": 204, "response": {}},
    },
    "sessions/{session_id}": {
        "DELETE": {"status": 204, "response": {}},
    },

    # Query Parameters
    "search": {
        "GET": {"status": 200, "response": {"results": ["Result1", "Result2"]}},
    },
    "reports/generate": {
        "POST": {"status": 201, "response": {"message": "Report generated"}},
    },
    "users?role=admin&active=true": {
        "GET": {"status": 200, "response": {"users": ["Admin1", "Admin2"]}},
    },
    "orders?date_start=2024-01-01&date_end=2024-02-01": {
        "GET": {"status": 200, "response": {"orders": ["Order1", "Order2"]}},
    },
    "products?category=electronics&sort=price_asc": {
        "GET": {"status": 200, "response": {"products": ["Phone", "Laptop"]}},
    },

    # Authentication
    "auth/token": {
        "POST": {"status": 200, "response": {"token": "abcd1234"}},
    },
}


def match_mock_endpoint(request_path: str, request_method: str):
    """Find the closest matching endpoint in MOCK_SPEC using regex."""
    request_path = request_path.split("?")[0] 

    if request_path in MOCK_SPEC and request_method in MOCK_SPEC[request_path]:
        return request_path 

    for mock_path in MOCK_SPEC:
        if "?" in mock_path:  
            base_path, query = mock_path.split("?", 1)
            if request_path == base_path:
                return mock_path if request_method in MOCK_SPEC[mock_path] else None

        regex_pattern = re.sub(r"\{[^}]+\}", r"[^/]+", mock_path)

        if re.fullmatch(regex_pattern, request_path) and request_method in MOCK_SPEC[mock_path]:
            return mock_path  
    
    return None 


@app.api_route("/{path:path}", methods=["GET", "POST", "PUT", "DELETE"])
async def catch_all_handler(request: Request, path: str):
    method = request.method
    print(f"Requested path: {path}, Method: {method}")

    matched_path = match_mock_endpoint(path, method)
    
    if matched_path:
        response_data = MOCK_SPEC[matched_path][method]
        return JSONResponse(content=response_data["response"], status_code=response_data["status"])

    return JSONResponse(content={"error": "Not found"}, status_code=404)