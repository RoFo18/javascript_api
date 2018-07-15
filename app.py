from flask import Flask, render_template, jsonify, request
import pandas

# Initialize Flask App
app = Flask(__name__)

# Templates
@app.route("/")
def index():
    return render_template("index.html")



# Api endpoint:
"""
Every api endpoint will have /api before the call.
"""
@app.route("/data")
def data():
    akhil=pandas.read_csv("ABA_2018.csv")


    return jsonify(akhil.to_dict())
if __name__ == "__main__":
    app.run(debug=True)