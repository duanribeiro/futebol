# Flask Base
[![Build Status](https://travis-ci.org/alefeans/flask-base.svg?branch=master)](https://travis-ci.org/alefeans/flask-base) [![Python](https://img.shields.io/badge/python-3.7-blue.svg)]() [![Python](https://img.shields.io/badge/python-3.6-blue.svg)]() [![MIT License](https://img.shields.io/badge/license-MIT-007EC7.svg?style=flat)](/LICENSE)

My template base to build Flask RESTful APIs using [Flask RESTPlus](https://flask-restplus.readthedocs.io/en/stable/index.html), [JWT Extended](https://flask-jwt-extended.readthedocs.io/en/latest/) and [PyMongo](https://flask-pymongo.readthedocs.io/en/latest/).

You can just clone this repo and start to create/customize your own RESTful API using this code as your template base :)

# Getting Started

## Docker


### Build

```
docker build -t flask-app .
```

### Start a New Container

```
docker run -d \
--name flask-app \
-p 5000:5000 \
-e MONGO_URI="<mongodb://<your_mongo_host>:27017/<your_database>" \
flask-app
```

## Swagger

After the application goes up, open your browser on `localhost:5000/api/v1/docs` to see the self-documented interactive API:

![](/imgs/swagger.png)


## Tests

To run the automated tests:

```
# rull all tests stages (with '-q' for a better output)
tox -q

# run unit tests with lint stage
tox -q -- tests/unit

# run integration tests with lint stage
tox -q -- tests/unit

# run only lint stage
tox -q -e lint

# skip lint stage (if u want integration, just modify the directory after '--')
tox -q -e py37 -- tests/unit
```
