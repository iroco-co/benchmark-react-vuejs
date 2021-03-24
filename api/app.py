from flask import Flask
from flask_cors import CORS
from mails import mails
import os


app = Flask(__name__, static_url_path='', static_folder='app')
CORS(app)
app.register_blueprint(mails)

@app.route('/')
def root():
    return app.send_static_file('index.html')

if __name__ == "__main__":
    from waitress import serve

    serve(app, host="0.0.0.0", port=os.environ.get('PORT'))
