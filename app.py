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
# @app.route("/")
# def prediction_table():

#  ######### CONNECT TO DATABASE AND READ DATA AS DATAFRAME VIA PANDAS #########
#     # Step 1. ##### Connect to postgres database and save to variable 'engine' #####
    
#     # Switch between 'develop' or 'deploy'
#     state = "develop"

#     if state = "develop"
#         rds_connection_string = "postgres:postgres@localhost:5432/events_db"

#     elif state = "deploy"
#         rds_connection_string = 'postgresql' + os.environ.get('DATABASE_URL', '')[8:]

#     # rds_connection_string = ('postgresql' + os.environ.get('DATABASE_URL', ''))[8:] or "postgres:postgres@localhost:5432/events_db"
    
#     engine = create_engine(f'postgresql://{rds_connection_string}')

#     # Step 2. #### Save the data to a variable via pandas, using the 'engine' variable. #####
#     happy_info = pd.read_sql_table('happy_table', engine) 

#     # Step 2. #### Convert pandas dataframe to json format. json.loads will convert it to a clean and readable format. #####
#         happy_info = json.dumps(json.loads(happy_info.to_json(orient = "records")), indent=4)
#         happy_info = json.loads(happy_info)
#     return jsonify(happy_table)

##########################################################

if __name__ == "__main__":
    app.run(debug=True)





