import json
import random
from datetime import datetime
import string

lang = 'fr'

with open('dataset/contacts/' + lang + '.json') as json_file:
    contacts = json.load(json_file)

with open('dataset/subjects/' + lang + '.json') as json_file:
    subjects = json.load(json_file)

with open('dataset/bodies/' + lang + '.json') as json_file:
    bodies = json.load(json_file)


class Mail:
    def __init__(self, mailId=None, receivedAt=None, withBody=False):
        if mailId:
            self._mailId = mailId
        else:
            self._mailId = 'ma_' + ''.join(random.SystemRandom().choice(string.ascii_letters + string.digits)
                                           for _ in range(20))

        self._from = random.choice(contacts)
        self._subject = random.choice(subjects)

        if receivedAt:
            self._receivedAt = receivedAt
        else:
            self._receivedAt = datetime.now()

        self._withBody = withBody

        if withBody:
            self._body = random.choice(bodies)

    def serialize(self):
        mail = {
            'id': self._mailId,
            'from': self._from,
            'subject': self._subject,
            'receivedAt': self._receivedAt.isoformat(),
        }

        if self._withBody:
            mail.update(self._body)

        return mail
