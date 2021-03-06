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
      maxlength: 35,
    },
    color: {
      type: String,
      required: true,
    },
    points: {
      type: [Number],
      default: [],
    },
    secret: {
      type: String,
      required: true,
    },
  },
  opts
);

module.exports = mongoose.model("Player", PlayerSchema);
