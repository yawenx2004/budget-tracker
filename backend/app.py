from flask import Flask
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app)

# register routes
## test route
@app.route('/')
def get_home():
    welcome_msg = "hello!! welcome to our flask frontend <3"
    return { 'message': welcome_msg }

@app.route('/time')
def get_time():
    return { 'time': time.time() }

# run app
if __name__ == "__main__":
    app.run(debug=True)