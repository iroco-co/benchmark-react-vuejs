from flask import Blueprint, jsonify
from mails.store import fetch_list, fetch_one

mails = Blueprint('mails', __name__, template_folder='templates')


@mails.route('/mails')
def get_mails():
    return jsonify(fetch_list())


@mails.route('/mails/<string:mailId>')
def get_mail(mailId):
    return jsonify(fetch_one(mailId))
