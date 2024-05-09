import Data from "../models/transport.js";
import mongoose from "mongoose";

//get all data
const getData = async (req, res) => {
  try {
    const data = await Data.find({}).sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//get a single data
const getSingleData = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such data" });
  }

  try {
    const data = await Data.findById(id);

    if (!data) {
      return res.status(404).json({ error: "No such data" });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//create a new data
const createData = async (req, res) => {
  const { rideName, sLocation, eLocation, leavingTime, name, number } = req.body;
  try {
    const data = await Data.create({ rideName, sLocation, eLocation, leavingTime, name, number });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a data
const deleteData = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such data" });
  }

  try {
    const data = await Data.findOneAndDelete({ _id: id });

    if (!data) {
      return res.status(404).json({ error: "No such data" });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//update a data
const updateData = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such data" });
  }

  try {
    const data = await Data.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      },
      { new: true }
    );

    if (!data) {
      return res.status(404).json({ error: "No such data" });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getData, createData, getSingleData, deleteData, updateData };
