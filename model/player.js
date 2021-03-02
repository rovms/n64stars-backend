var mongoose = require("mongoose");

var Schema = mongoose.Schema;

const opts = {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  timestamps: true,
};

const PlayerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    points: {
      type: [Number],
      default: [],
    },
  },
  opts
);

module.exports = mongoose.model("Player", PlayerSchema);
