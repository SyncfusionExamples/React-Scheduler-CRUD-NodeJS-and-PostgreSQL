const db = require("../models");
const SchedulerEvents = db.scheduler;

exports.crudActions = (req, res) => {

    if (req.body.added !== null && req.body.added.length > 0) {
        for (var i = 0; i < req.body.added.length; i++) {
            var insertData = req.body.added[i];
            SchedulerEvents.create(insertData)
                .then(data => {
                    res.send(data);
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while inserting the events."
                    });
                });
        }
    }

    if (req.body.changed !== null && req.body.changed.length > 0) {
        for (var i = 0; i < req.body.changed.length; i++) {
            var updateData = req.body.changed[i];
            SchedulerEvents.update(updateData, { where: { id: updateData.id } })
                .then(num => {
                    if (num == 1) {
                        res.send(updateData);
                    } else {
                        res.send({
                            message: `Cannot update Event with id=${id}. Maybe Event was not found or req.body is empty!`
                        });
                    }
                })
                .catch(err => {
                    res.status(500).send({
                        message: "Error updating Event with id=" + id
                    });
                });
        }
    }

    if (req.body.deleted !== null && req.body.deleted.length > 0) {
        for (var i = 0; i < req.body.deleted.length; i++) {
            var deleteData = req.body.deleted[i];
            SchedulerEvents.destroy({ where: { id: deleteData.id } })
                .then(num => {
                    if (num == 1) {
                        res.send(deleteData);
                    } else {
                        res.send({
                            message: `Cannot delete Event with id=${id}. Maybe Event was not found!`
                        });
                    }
                })
                .catch(err => {
                    res.status(500).send({
                        message: "Could not delete Event with id=" + id
                    });
                });
        }
    }
};

exports.getData = (req, res) => {
    SchedulerEvents.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Events."
            });
        });
};
