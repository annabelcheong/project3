# Project 3: The Flow (Wellbeing and Happiness)

Final Project 
*************************
Completed by Annabel Cheong

*************************
# Project Requirements

- Use ML: Skikit-Learn and/or another machine learning library
- Use at least 2 of the following: Python Pandas, Python Matplotlib, HTML/CSS/Bootstrap, JavaScript Plotly, JavScript D3.js, JavaScript Leaflet, SQL Database, MongoDB Database, Google Cloud SQL, Amazon AWS, Tableau. 
- Host application using Heroku or a tool of your choice.

*************************
# Project Overview
## Audience
- General Public interested in Wellbeing and Happiness

## Purpose and Objective
The purpose of the project is to produce a website to raise awareness on the factors which have the most influence on happiness for an individual. Ultimately, provoke the audience to think about how the factors (social support, money, country's corruption etc) apply to their happiness.

## Methodology and Approach 
Loading in raw data (csv format) and performing ETL on the dataset via Python Pandas. There will be 2 final dataframes resulting from the ETL. 
- The first dataframe will be converted back to a csv file, and loaded to Tableau Public to produce visualisations. 
- The second dataframe will be loaded to the PostGRES database, loaded into the Flask app web server as an API endpoint. Subsequently, the API endpoint will be referenced in a javascript to be deployed onto the html webpage. Heroku will be used to deploy the website.

## Challenges


#### Talk about X-scaling


#### ***TALK ABOUT USER os.env variable and how uri changes regularly in Heroku Postgres***



------------------------
## Repository Structure
- ### FOLDER: Resources
    - Raw CSV Files: happy2020.csv, happy2021.csv, countries_codes_and_coodinates.csv
    - Transformed CSV File: happy_2020_2021.csv

- ### FOLDER: Models
    This folder contains the saved models.
    - model1.sav
    - model2.sav

- ### FOLDER: templates
    This folder contains all the html pages (which are rendered in Flask's app.py)
    - index.html
    - page2.html
    - page3.html
    - page4.html

- ### FOLDER: static
    This folder contains the styling file (CSS), images for the HTML pages and JS files which is referenced to ids in page3.html .
    - CSS
        - bootstrap.min.css
        - carousel.css
    - js
        - ml_table.js
        - predictScore.js
        - wordCloud.js
    - images
        - Multiple images in this folder for the Navbar logo and all the html pages.

- ### FILE: app.py

- ### FILE: happinessETL.ipynb
    - Extracts the raw data from the Resource folder datasets. Transforms the dataframe such that the final dataframe is 'clean'; ready for use in the happiness_ML.ipynb file and for Tableau Online. 
    - The final dataframe produced from the ETL process is saved into Resources, titled 'happy_2020_2021.csv'. 

- ### FILE: happiness_ML.ipynb





- ### FILE: schema.sql
    - Queries for creating the tables on Heroku PostGRES

*************************