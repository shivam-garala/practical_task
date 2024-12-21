const express = require('express');
const Router = express.Router();

const controller = require('./controller')

Router.post("/add/User", controller().addUser);
Router.post("/type/selection", controller().instituteTypeSelection);
Router.post("/board/class/selection", controller().selectClassAndStandard);
Router.post("/select/subject", controller().selectSubject);

module.exports = Router;
