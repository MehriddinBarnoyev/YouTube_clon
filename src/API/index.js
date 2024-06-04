import axios from "axios";

const getData = async () => {
  try {
    const res = await axios.get("http://localhost:3000/video");
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export { getData };
