import { db } from "../db/index.js";

import express from "express";
const router = express.Router();

const deleteSong = router.delete("/deleteSong", (req, res) => {
  if (!req.body) {
    return;
  }

  const { id } = req.body;

  db.query("delete from songs where id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(`User deleted song with ID: ${id}`);
  });
});

export default deleteSong;
