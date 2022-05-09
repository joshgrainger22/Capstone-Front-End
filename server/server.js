const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')
const { Lakes } = require('./models')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3001
const bodyParser = require('body-parser')