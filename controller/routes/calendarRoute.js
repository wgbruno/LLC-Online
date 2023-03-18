import getEvents from '../logic/calendarController';
import calendarController from '../logic/calendarController'

exports.getAll = async function(req,res){ // REST get (all) method
    let events = calendarController.getEvents()
    res.status(200); // 200 = Ok
    res.send(events); //send the users back to the client
    res.end(); 
}