FROM python:3.9-slim-buster

ENV VIRTUAL_ENV=/opt/venv
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

COPY . .

# Install dependencies:
RUN pip install -r requirements.txt
RUN python setup.py install

# Run the application:
CMD ["python", "app.py"]