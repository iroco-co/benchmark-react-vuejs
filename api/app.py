from json import dumps

from flask import Flask, request, jsonify
from flask_cors import CORS
from mails import mails
import os


app = Flask(__name__, static_url_path='', static_folder='app')
CORS(app)
app.register_blueprint(mails)


@app.route('/')
def root():
    return app.send_static_file('index.html')


@app.route('/analytics', methods=['POST'])
def analytics():
    with open('analytics.json', 'a+') as f:
        f.write(dumps(request.json) + '\n')
    return jsonify(success=True)


if __name__ == "__main__":
    from waitress import serve

    serve(app, host="0.0.0.0", port=8080 if os.environ.get('PORT') is None else os.environ.get('PORT'))
