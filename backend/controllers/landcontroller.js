import landModel from "../models/landModel.js";

// 🟢 Create new land

export const createLand = async (req, res) => {
  try {
    const { location, size, description } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    const newLand = new landModel({ location, size, description, photo });
    await newLand.save();

    res.status(201).json({ message: "Land created successfully", land: newLand });
  } catch (error) {
    console.error("❌ Error creating land:", error);
    res.status(500).json({ message: "Error creating land", error: error.message });
  }
};



// 🟢 Get all lands
export const getAllLands = async (req, res) => {
  try {
    const lands = await landModel.find();
    console.log('Found lands:', lands); // Debug log
    res.status(200).json(lands);
  } catch (error) {
    console.error('Error in getAllLands:', error); // Debug log
    res.status(500).json({ message: "Error fetching lands", error });
  }
};

// 🟢 Get land by ID
export const getLandById = async (req, res) => {
  try {
    const land = await landModel.findById(req.params.id);
    if (!land) return res.status(404).json({ message: "Land not found" });

    res.status(200).json(land);
  } catch (error) {
    res.status(500).json({ message: "Error fetching land", error });
  }
};

// 🟢 Update land
export const updateLand = async (req, res) => {
  try {
    const updates = { ...req.body };
    if (req.file) {
      updates.photo = `/uploads/${req.file.filename}`;
    }

    const updatedLand = await landModel.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!updatedLand) return res.status(404).json({ message: "Land not found" });

    res.status(200).json({ message: "Land updated successfully", land: updatedLand });
  } catch (error) {
    res.status(500).json({ message: "Error updating land", error });
  }
};

// 🟢 Delete land
export const deleteLand = async (req, res) => {
  try {
    const deletedLand = await landModel.findByIdAndDelete(req.params.id);
    if (!deletedLand) return res.status(404).json({ message: "Land not found" });

    res.status(200).json({ message: "Land deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting land", error });
  }
};
