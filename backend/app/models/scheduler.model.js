module.exports = (sequelize, Sequelize) => {
    const SchedulerEvents = sequelize.define("scheduleevents", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        starttime: {
            type: Sequelize.DATE,
            allowNull: false
        },
        endtime: {
            type: Sequelize.DATE,
            allowNull: false
        },
        subject: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        isallday: {
            type: Sequelize.BOOLEAN
        },
        starttimezone: {
            type: Sequelize.STRING
        },
        endtimezone: {
            type: Sequelize.STRING
        },
        recurrencerule: {
            type: Sequelize.STRING
        },
        recurrenceid: {
            type: Sequelize.INTEGER
        },
        recurrenceexception: {
            type: Sequelize.STRING
        },
        followingid: { 
            type: Sequelize.INTEGER 
        },
        createdAt: {
            type: Sequelize.DATE,
            field: 'created_at'
          },
    
          updatedAt: {
            type: Sequelize.DATE,
            field: 'updated_at'
          }
    });
    return SchedulerEvents;
};
