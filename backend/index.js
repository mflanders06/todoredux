require('dotenv').config();
const express = require('express');

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;