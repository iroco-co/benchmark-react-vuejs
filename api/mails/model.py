import json
import random
from datetime import datetime
import string


class Mail:
    def __init__(self, subject, contact, body, receivedAt=None):
        self._mailId = 'ma_' + ''.join(random.SystemRandom().choice(string.ascii_letters + string.digits) for _ in range(20))
        self._from = contact
        self._subject = subject
        self._receivedAt = receivedAt
        self._body = body

    def snapshot(self):
        return {
            'id': self._mailId,
            'from': self._from,
            'subject': self._subject,
            'receivedAt': self._receivedAt.isoformat(),
        }

    def to_dict(self):
        return {
            'id': self._mailId,
            'from': self._from,
            'subject': self._subject,
            'receivedAt': self._receivedAt.isoformat(),
            'body': self._body
        }
