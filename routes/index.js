const express = require("express");
const router = express.Router();
const Player = require("../model/player");

// Retrieve all players
router.get("/player", async (req, res) => {
  try {
    const players = await Player.find();
    return res.status(200).json(players);
  } catch (error) {
    return res.status(500).send(error);
  }
});

// Only udpates the text of a player
router.post("/player/:playerId", async (req, res) => {
  if (req.body.secret === process.env.SECRET) {
    try {
      let player = await Player.findById(req.params.playerId);
      if (!player) {
        return res.status(400).send(`Player with id {${req.query.playerId}} not found.`);
      }
      player.text = req.body.text;
      player = await player.save();
      return res.status(200).json(player);
    } catch (error) {
      console.error(error);
      return res.status(500).send(error);
    }
  } else {
    return res.status(401).send("Wrong secret");
  }
});

router.post("/addPoints", async (req, res) => {
  try {
    let ppp;
    for (ppp of req.body) {
      const p = await Player.findById(ppp.playerId);
      p.points.push(ppp.newPoints);
      await p.save();
    }
    return res.status(200).json("Ok");
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
