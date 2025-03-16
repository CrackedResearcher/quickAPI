from fastapi import FastAPI, APIRouter, Request
from fastapi.responses import JSONResponse

app = FastAPI()
router = APIRouter()

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


# generic handler with wildcard path
@router.api_route("/{path:path}", methods=["GET", "POST"])
async def mock_handler(request: Request, path: str):
    method = request.method

    # check in the specs uploaded by user, if found then allow request to proceed, if not throw 404
    if path in MOCK_SPEC and method in MOCK_SPEC[path]:
        spec = MOCK_SPEC[path][method]
        return JSONResponse(content=spec["response"], status_code=spec["status"])
    return JSONResponse(
        content={"error": f"Couln't find anything related. your sent {method}"},
        status_code=404,
    )


# attach all of thme on the main main app router
app.include_router(router)
