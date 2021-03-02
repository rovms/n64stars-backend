const express = require("express");
const router = express.Router();
const Player = require("../model/player");

router.get("/", async (req, res) => {
  const players = await Player.find();
  return res.status(200).json(players);
});

router.post("/", async (req, res) => {
  let ppp;
  console.log(req.body);
  for (ppp of req.body) {
    console.log(ppp);
    const p = await Player.findById(ppp.playerId);
    p.points.push(ppp.newPoints);
    await p.save();
  }
  return res.status(200).json("Ok");
});

module.exports = router;
