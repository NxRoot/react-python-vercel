
from flask import Flask

app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')

@app.route('/', methods=['GET'])
def index():
    return app.send_static_file('index.html')

@app.route('/api/hello', methods=['GET'])
def hello():
    return "hello from api"
