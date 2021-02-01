from flask import Flask
from mails import mails

app = Flask(__name__)
app.register_blueprint(mails)

if __name__ == "__main__":
    from waitress import serve

    serve(app, host="0.0.0.0", port=8080)
