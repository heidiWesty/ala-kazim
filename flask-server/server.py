from flask import Flask

app = Flask(__name__)

#Members API route
@app.route('/backend')
def backend():
    return{"backend": ["This", "is", "an", "array", "on", "the", "backend"]}

if __name__ == "__main__":
    app.run(debug=True)
