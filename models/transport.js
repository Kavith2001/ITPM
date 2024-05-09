import { Schema, model } from "mongoose";

const schema = Schema(
  {
    rideName: {
      type: String,
      required: true,
    },
    sLocation: {
      type: String,
      required: true,
    },
    eLocation: {
      type: String,
      required: true,
    },
    leavingTime: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true }
);

export default model("data", schema);

