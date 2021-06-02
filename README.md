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
Loading in raw data (csv format) and performing ETL on the dataset via Python Pandas. There will be 3 final dataframes resulting from the ETL. 
- The first dataframe will be converted back to a csv file, and loaded to Tableau Public to produce visualisations. 
- The second dataframe will be loaded to the PostGRES database, loaded into the Flask app web server as an API endpoint. Subsequently, the API endpoint will be referenced in a javascript to be deployed onto the html webpage. Heroku will be used to deploy the website.
- The third dataframe is the X_train variable dataframe. This is loaded into PosgGRES and retrieved in the Flask app to enable X scaling, which is required for the final prediction variable returned at the endpoint function. 

## Challenges
Overall, the process of successfully connecting up the databases to Flask and deploying the Flask app proved to be most challenging. 

One of the biggest learning experiences is that Heroku periodically changes the uri of the Heroku PostGRES the Heroku app is connected to. Luckily, the tables and content remain as is. To prevent continuously changing code in the Flask app, simply set the DATABASE_URL (connection string) variable in the laptop's local environment. (Heroku will automatically change its DATABASE_URL variable on its environment to match the Heroku PostGRES uri.)

For additional information of the project, see The Flow.pdf in this repository.

*************************
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
    This folder contains the styling file (CSS) and images for the HTML pages. The JS files in this folder are all referenced to ids on page3.html .
    - CSS
        - bootstrap.min.css
        - carousel.css
    - js
        - ml_table.js: 
            This table allows the user to view all the actual and predicted happiness scores by country.
        - predictScore.js: 
            This section allows the user to input and submit values for the x features, and have it returning a happiness score. 
        - wordCloud.js:
            This summarises the amount of influence of each feature on the happiness score and how they compare relatively. 
    - images
        - Multiple images in this folder for the Navbar logo and all the html pages.

- ### FILE: app.py
    Consists of multiple endpoints to:
        - render html files
        - return dataframes or variables which have been attained from Heroku PostGRES

- ### FILE: happinessETL.ipynb
    Extracts the raw data from the Resource folder datasets. Transforms the dataframe such that the final dataframe is 'clean'; ready for use in the happiness_ML.ipynb file and for Tableau Online. 
    
    The final dataframe produced from the ETL process is saved into Resources, titled 'happy_2020_2021.csv'. 

- ### FILE: happiness_ML.ipynb
    This file prepares the data for machine learning. The file happy_2020_2021.csv produced from happinessETL.ipynb, is used to further process the data so that the x and y variables are split to allow x_train, y_train and x_test and y_test variables be formed.
    Furthermore, the x_train and x_test variables are scaled to prepare it for use in the prediction model.

- ### FILE: schema.sql
    - Contains queries for creating the tables on Heroku PostGRES.

- ### FILE: model1.ipynb
    The machine learning model used is Linear Regression for model1.
    The accuracy attained is 60%.

- ### FILE: model2.ipynb
    The machine learning model used is Random Forest for model2.
    The accuracy attained is 76%. This is the highest accuracy of all 3 models. Thus, this model was used as the prediction model for the website.

- ### FILE: model3.ipynb
    The machine learning model used is Keras Deep Learning for model3.
    The accuracy attained is 67%.

*************************