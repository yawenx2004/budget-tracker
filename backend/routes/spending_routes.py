from flask import Blueprint, request, current_app

spending_bp = Blueprint("spending", __name__, url_prefix="/spending")

@spending_bp.route("", methods=["post"])
def add_spending():
    data = request.get_json()

    # check for required fields
    date = data.get("date")
    reason = data.get("reason")
    amount = data.get("amount")
    if not date or not reason or not amount:
        return {"error": "missing required fields"}
    
    # model
    spending_doc = {
        "date": date,
        "reason": reason,
        "amount": amount,
        "category": data.get("category"), 
        "satisfaction": data.get("satisfaction")
    }

    # access mongo collection
    result = current_app.spending_collection.insert_one(spending_doc)
    return {"inserted_id": str(result.inserted_id)}

@spending_bp.route("", methods=["GET"])
def list_spendings():
    spendings = list(current_app.spending_collection.find({}, {"_id": 0}))
    return {"spendings": spendings}