import express from "express";
const router = express.Router();

import {
  getData,
  getSingleData,
  createData,
  deleteData,
  updateData,
} from "../controllers/transport.js";

//get all data
router.get("/", getData);

//get a single data
router.get("/:id", getSingleData);

//create a new data
router.post("/", createData);

//delete a data
router.delete("/:id", deleteData);

//update a data
router.patch("/:id", updateData);

export default router;
