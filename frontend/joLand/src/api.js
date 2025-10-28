import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5555";
const LANDS_URL = `${BASE_URL}/api/lands`;

export const fetchProjects = async () => {
  try {
    console.log('Fetching from URL:', LANDS_URL); // Debug log
    const res = await axios.get(LANDS_URL);
    console.log('API Response:', res.data); // Debug log
    return res.data;
  } catch (error) {
    console.error("❌ Error fetching lands:", error);
    console.error("Error details:", error.response || error.message); // More detailed error
    return [];
  }
};
