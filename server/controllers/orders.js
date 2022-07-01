const { Products, Orders } = require("../models");

class Controller {
    static async getAllOrders(req, res) {
        try {
            const order = await Orders.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
                include: [{ model: Products, key: "productId" }],
            });

            res.status(200).json(order);
        } catch (error) {
            console.log("error: ", error);
        }
    }

    static async buyProducts(req, res) {
        const { productId } = req.params;
        try {
            const data = await Products.findByPk(productId);
            let priceAfterTax = data.price;
            let tax = 0;

            if (
                data.category !== "book" &&
                data.category !== "food" &&
                data.category !== "medical"
            ) {
                priceAfterTax = data.price * 0.1 + data.price;
                tax += data.price * 0.1;
            }
            if (data.name.includes("imported")) {
                priceAfterTax += data.price * 0.05;
                tax += data.price * 0.05;
            }

            if(!Number.isInteger(priceAfterTax)){
                let newPoint = priceAfterTax.toFixed(2).toString().split(".")[1];
                
                if(newPoint[1] < 5 && newPoint[1] > 0){
                    let temp = (5 - newPoint[1]) / 100
                    priceAfterTax += temp
                }
            }

            if(!Number.isInteger(tax)){
                let newPoint = tax.toString().split(".")[1];
                console.log("tax: ATAS", tax);
                
                if(newPoint[1] < 5 && newPoint[1] > 0){
                    let temp = (5 - newPoint[1]) / 100
                    tax += temp
                }
            }
            
            const listBuyProduct = await Orders.create(
                {
                    name: data.name,
                    price: priceAfterTax.toFixed(2),
                    salesTaxes: tax.toFixed(2),
                    productId: productId,
                },
                {
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    },
                }
            );

            res.status(201).json(listBuyProduct);
        } catch (error) {
            console.log("error: ", error);
        }
    }
}

module.exports = Controller;
