import dao from "../../models/inventoryDao"

exports.getData = async function(req,res){ 
    res.status(200); // 200 = Ok
    res.send(await dao.getData());
    res.end(); 
}