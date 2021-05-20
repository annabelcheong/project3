# Dependencies
from flask import Flask, render_template, redirect, jsonify
# import sqlalchemy
import pandas as pd
from sqlalchemy import create_engine, func
import json
import os
from flask_sqlalchemy import SQLAlchemy

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


####################### END POINTS #######################
# END POINT: HOME
@app.route("/")
def home():

    # Return template and data
    return render_template("index.html")

# END POINT: 
@app.route("/page2")
def happiness_story():

    # Return template and data
    return render_template("page2.html")

# END POINT: 
@app.route("/page3")
def books():

    # Return template and data
    return render_template("page3.html")






##########################################################

if __name__ == "__main__":
    app.run(debug=True)