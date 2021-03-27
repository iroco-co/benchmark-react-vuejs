from flask import Blueprint, jsonify, make_response, Response
from mails.store import fetch_list, fetch_one

mails = Blueprint('mails', __name__, template_folder='templates')


@mails.route('/mails')
def get_mails():
    return jsonify(fetch_list())


@mails.route('/mails/<string:mailId>')
def get_mail(mailId):
    mail = fetch_one(mailId)
    return jsonify(mail.to_dict()) if mail is not None else Response(status=404)
