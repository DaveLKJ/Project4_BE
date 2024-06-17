import coffeeModel from "../models/coffeeModel.js";
import fs from "fs";

// add coffee
const addCoffee = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const coffee = new coffeeModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await coffee.save();
    res.json({ success: true, message: "Coffee added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// all coffee list
const listCoffee = async (req, res) => {
  try {
    const coffees = await coffeeModel.find({});
    res.json({ success: true, data: coffees });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addCoffee, listCoffee };
