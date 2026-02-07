import { request, response, Router } from "express";
import { Pizza } from "../models/pizzaModel.js";
import { sequelize } from "../index.js";

const router = Router();

router.get('/', async (request, response) => {

    try{
        const statusQuery = request.query.status;

        const allPizza = await Pizza.findAll({

            where: {
                status: statusQuery
            }

        })
        return response.json({ allPizza });


    } catch (error) {
        console.error("Something went wrong:", error);
        return res.status(400).json({ message: "bad request" });
    }

});


router.post('/pizza', async (request, response) => {
    const transaction = await sequelize.transaction()

     if (! data.pizza || !data.size || !data.description || !data.price){
            return res.status(400).json({ message: "faltan datos" });
        }


    const newPizza = await Pizza.create({
            trackingNumber: data.trackingNumber,
            recipient: data.recipient,
            weight: data.weight,
            status: data.status

        },{transaction})

})