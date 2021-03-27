import json
import os
import random
from operator import attrgetter

from mails.model import Mail
from random import randrange
from datetime import datetime, timedelta

lang = 'fr'

with open('dataset/contacts/' + lang + '.json') as json_file:
    contacts = json.load(json_file)

with open('dataset/subjects/' + lang + '.json') as json_file:
    subjects = json.load(json_file)

with open('dataset/bodies/' + lang + '.json') as json_file:
    bodies = json.load(json_file)


def create_store():
    _store = dict()
    nb_mails = 50 if os.environ.get('NB_MAILS') is None else int(os.environ.get('NB_MAILS'))
    received_date = datetime.now()
    for i in range(0, nb_mails):
        received_date -= timedelta(randrange(10))
        mail = Mail(random.choice(subjects), random.choice(contacts), random.choice(bodies), received_date)
        _store[mail._mailId] = mail
    return _store


store = create_store()


def fetch_list():
    return list(map(lambda m: m.snapshot(), store.values()))


def fetch_one(mailId):
    return store.get(mailId)
