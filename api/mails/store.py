from flask import request
from mails.model import Mail
from random import randrange
from datetime import datetime, timedelta


def fetch_list():
    limit = request.args.get('limit', default=50, type=int)
    mails = []
    arrivedAt = datetime.now()

    for i in range(0, limit):
        mail = Mail(None, arrivedAt)
        mails.append(mail.serialize())
        arrivedAt = arrivedAt - timedelta(randrange(10))

    return mails


def fetch_one(mailId):
    return Mail(mailId, datetime.now(), True).serialize()
