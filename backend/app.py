from flask import Flask, request
from flask_cors import CORS
import time
from pymongo import MongoClient
import os

app = Flask(__name__)
CORS(app)

# connect to mongodb
MONGO_URI = os.getenv("MONGO_URI", "mongodb+srv://yawenx:pass@budget-tracker.ibanosj.mongodb.net/?retryWrites=true&w=majority&appName=budget-tracker")
client = MongoClient(MONGO_URI)
spending_db = client["spending_db"]
spending_collection = spending_db["spendings"]

# TODO income collection too

# register routes
## real routes
app.spending_collection = spending_collection
from routes.spending_routes import spending_bp
app.register_blueprint(spending_bp)

## test routes
@app.route('/')
def get_home():
    welcome_msg = "hello!! welcome to our flask frontend <3"
    return { 'message': welcome_msg }

@app.route('/time')
def get_time():
    return { 'time': time.time() }

# run app
if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    app.run(debug=True)