import { axiosinstance as api } from "../config/api";
const stored = localStorage.getItem("lang");
const lang = stored === "" ? stored : "en";
export const get_service = async () => {
  try {
    const response = await api.get(`/services?locale=${lang}`);
    return { success: true, data: response.data };
  } catch (err) {
    if (err.response) {
      return { success: false, data: null, error: err.message };
    } else {
      console.log(`Error: ${err.message}`);
    }
  }
};

export const get_topics = async () => {
  try {
    const response = await api.get(`/services`);
    return { success: true, data: response.data };
  } catch (err) {
    if (err.response) {
      return { success: false, data: null, error: err.message };
    } else {
      console.log(`Error: ${err.message}`);
    }
  }
};
