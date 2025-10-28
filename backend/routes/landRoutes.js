import express from "express";
import upload from "../middleware/upload.js";
import {
  createLand,
  getAllLands,
  getLandById,
  updateLand,
  deleteLand,
} from "../controllers/landcontroller.js";

const router = express.Router();

router.post("/", upload.single("photo"), createLand);
router.get("/", getAllLands);
router.get("/:id", getLandById);
router.put("/:id", upload.single("photo"), updateLand);
router.delete("/:id", deleteLand);

export default router;
