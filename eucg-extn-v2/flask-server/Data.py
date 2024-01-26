from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/Datas')
def getDatas():
    response = jsonify({
        'Datas': ['Data 1', 'Data 2', 'Data 3'],
        'Numbers': ['1', '2', '3']
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == '__main__':
    app.run(debug=True)
