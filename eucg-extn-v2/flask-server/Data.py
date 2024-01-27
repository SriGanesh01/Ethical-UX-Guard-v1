
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

@app.route('/ping')
def ping():
    return 'pong'

@app.route('/Datas')
def getDatas():
    response = jsonify({
        'Datas': ['Virat', 'Dhoni', 'Rohith'],
        'Numbers': ['4', '5', '6']
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == '__main__':
    app.run(debug=True)

