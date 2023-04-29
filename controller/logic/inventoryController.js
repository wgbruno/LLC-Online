const model = require("../../models/inventoryDao")

async function getInventory(req, res) {
  const inventory = await model.getInventory();
  console.log(inventory[0])
  console.log(res)
  if(res) {
    res.send(inventory);
  }
  
}

module.exports = {
  getInventory
};

getInventory()

/*
exports.getData = async function(req,res){ 
    res.status(200); // 200 = Ok
    res.send(await dao.getData());
    res.end(); 
}
*/