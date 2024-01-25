from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/Datas')
def getDatas():
    return {
        'Datas': ['Data 1', 'Data 2', 'Data 3'],
        'Numbers': ['1', '2', '3']
    }

if __name__ == '__main__':
    app.run(debug=True)