import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
const LANDS_URL = `${BASE_URL}/api/lands`;

export const getLands = async () => {
  const res = await axios.get(LANDS_URL);
  return res.data;
};

export const createLand = async (formData) => {
  const res = await axios.post(LANDS_URL, formData);
  return res.data;
};

export const updateLand = async (id, formData) => {
  const res = await axios.put(`${LANDS_URL}/${id}`, formData);
  return res.data;
};

export const deleteLand = async (id) => {
  const res = await axios.delete(`${LANDS_URL}/${id}`);
  return res.data;
};
