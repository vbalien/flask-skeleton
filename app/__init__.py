# -*- coding: utf-8 -*-
from app.config.config import Config
from app.views.main import main_blueprint
from flask import Flask
from flask_sqlalchemy import SQLAlchemy


# Config
app = Flask(__name__)
app.secret_key = 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config.from_object(Config)

# Extensions
db = SQLAlchemy(app)


# Blueprints
app.register_blueprint(main_blueprint)
