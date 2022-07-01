const { Products } = require("../models")

class Controller{
    //menampilkan semua product 
    static async getAllProducts(req, res){
        try{
            const products = await Products.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
            })

            res.status(200).json(products)

        }catch(error){
            console.log(error)
        }
    }

}

module.exports = Controller