# Futebol
[![Python](https://img.shields.io/badge/python-3.7-blue.svg)]() [![MIT License](https://img.shields.io/badge/license-MIT-007EC7.svg?style=flat)](/LICENSE) ![Travis-CI](https://api.travis-ci.com/duanribeiro/futebol_client.svg?token=BzJFp8x15XHWp7qszhFF&branch=master)

The main objective of this project is to use technology and data science in the Brazilian Football Championship


This project consists of 3 services:

* __Client:__ Made in Javascript, using __React__ library and is responsible for data presentation.
* __Server:__ Made in Python, using __Flask__ microframework for API's.
* __Crawler:__ Made in Python, using __Scrapy__ asynchronous framework for web scraping.

And also the database:
* __No-SQL:__ MongoDB, hosted on Atlas using a EC2 instance on AWS.

![Imagem Exemplo](screenshots/screenshot_20_10_19.png)



## 1) Starting Server

```
cd server
export MONGO_URI=mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[database][?options]]

pip install -r requirements.txt
python3 run.py
```


## 2) Starting Client

```
cd client

npm install
npm start
```
