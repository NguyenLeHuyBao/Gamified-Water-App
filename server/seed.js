import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import Plant from "./models/Plant.model.js";
import Pot from "./models/Pot.model.js";
import Background from "./models/Background.model.js";
import User from "./models/user.model.js";

import { PlantTypes, PlantLevels } from "./utils/constants.js";

mongoose.connect(process.env.MONGO_URI, { autoIndex: true, autoCreate: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connected successfully!");
  init();
});

const init = async () => {
  console.log("Init db...");
  const plant = new Plant({
    name: "Plant 1",
    image: "",
    type: PlantTypes.Indoor,
    level: PlantLevels.Easy,
    price: 100,
    isDefault: true,
  });

  await plant.save();
  console.log("Init default plant done!");

  const pot = new Pot({
    name: "Pot 1",
    image: "",
    price: 10,
    isDefault: true,
  });

  await pot.save();
  console.log("Init default pot done!");

  const background = new Background({
    image: "",
    price: 100,
    isDefault: true,
  });

  await background.save();
  console.log("Init default background done!");
};
