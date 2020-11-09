import base64
import io
import os
from base64 import b64encode

from flask import Flask, render_template, send_from_directory, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def root():
    return render_template('index.html')


@app.route('/', methods=['POST'])
def session():
    if not request.files:
        return root()
    file = request.files['file']
    data = file.read()
    encoded_string = base64.b64encode(data)
    return render_template("session.html", user_image=encoded_string.decode('utf-8'))


@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico',
                               mimetype='image/vnd.microsoft.icon')


if __name__ == '__main__':
    app.run('0.0.0.0', port=8080)
