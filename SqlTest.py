from flask import request
from flask import Flask
from flask_mysqldb import MySQL
import json
import time

app = Flask(__name__)
app.config['MYSQL_HOST'] = 'mysql.2223.lakeside-cs.org'
app.config['MYSQL_USER'] = 'student2223'
app.config['MYSQL_PASSWORD'] = 'm545CS42223'
app.config['MYSQL_DB'] = '2223playground'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)
app.secret_key = '2345h2345kjfjvbnn'


cursor = mysql.connection.cursor()
query = 'INSERT INTO bentontameling_lessonplans (name, lesson_plans) VALUES ("test","test")'
cursor.execute(query)
cursor.close()