# import os
# print(os.environ['DATABASE_URL'])

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

# Load saved Random Tree model making predictions for Happiness Score
# from tensorflow.keras.models import load_model
# model = load_model("Models/model2.sav")

####################### END POINTS #######################
# END POINT: HOME
@app.route("/")
def home():

    # Return template and data
    return render_template("index.html")

# END POINT: PAGE 2
@app.route("/page2")
def happiness_story():

    # Return template and data
    return render_template("page2.html")

# END POINT: PAGE 3
@app.route("/page3")
def machine_learning():

    # Return template and data
    return render_template("page3.html")

# END POINT: PAGE 4
@app.route("/page4")
def books():

    # Return template and data
    return render_template("page4.html")

# END POINT: MACHINE LEARNING PREDICTION; JSON DATA
@app.route("/ml_json")
def prediction_table():

    ######### CONNECT TO DATABASE AND READ DATA AS DATAFRAME VIA PANDAS #########
    # Step 1. ##### Connect to postgres database and save to variable 'engine' #####

    # Switch between 'develop' or 'deploy'
    state = "deploy"

    # State: Development (Local PostGRES)
    if state == "develop":
        rds_connection_string = "postgres:postgres@localhost:5432/the_flow_db"

    # State: Deployment (Heroku PostGRES)
    elif state == "deploy":
        rds_connection_string = "zrhfplbtdfzlsb:7a52354918a924ca23e8e6f09d7e221ec33c71c911e49ac91fef71daac2db1dc@ec2-54-74-14-109.eu-west-1.compute.amazonaws.com:5432/dasrk3uqfvvv2e"

    # rds_connection_string = ('postgresql' + os.environ.get('DATABASE_URL', ''))[8:] or "postgres:postgres@localhost:5432/events_db"
        
    engine = create_engine(f'postgresql://{rds_connection_string}')

    # Step 2. #### Save the dataframe to a variable via pandas, using the 'engine' variable. #####
    m2_table = pd.read_sql_table('happy_table_m2', engine) 
        
    # Step 2. #### Convert pandas dataframe to json format. json.loads will convert it to a clean and readable format. #####
    m2_table_json = json.dumps(json.loads(m2_table.to_json(orient = "records")), indent=4)
    m2_table_json = json.loads(m2_table_json)
    return jsonify(m2_table_json)

##########################################################

if __name__ == "__main__":
    app.run(debug=True)