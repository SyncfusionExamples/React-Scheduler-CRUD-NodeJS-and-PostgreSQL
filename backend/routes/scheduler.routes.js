module.exports = app => {
    const scheduleService = require("../controllers/scheduler.controller.js");
    var router = require("express").Router();
    router.post("/getData", scheduleService.getData);
    router.post("/crudActions", scheduleService.crudActions); 
    app.use('/api/scheduleevents', router);
  };