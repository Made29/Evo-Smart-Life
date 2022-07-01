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

            const listBuyProduct = await Orders.create(
                {
                    name: data.name,
                    price: priceAfterTax,
                    salesTaxes: tax,
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
