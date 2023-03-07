import { axiosinstance as api } from "../config/api";
const stored = localStorage.getItem("lang");
const lang = stored === "" ? stored : "en";

export const login = async (Identifier, Password) => {
  try {
    const response = await api.post(`/auth`, {
      identifier: Identifier,
      password: Password,
    });
    return { success: true, data: response.data };
  } catch (err) {
    if (err.response) {
      return { success: false, data: null, error: err.message };
    } else {
      console.log(`Error: ${err.message}`);
    }
  }
};

export const register = async (data) => {
  try {
    const response = await api.post(`/auth/local/register?locale=${lang}`, {
      username: data.username,
      email: data.email,
      password: data.password,
      role: data.role,
      accountType: data.accounttype,
      mobileNumber: data.phone,
    });
    return { success: true, data: response.data };
  } catch (err) {
    if (err.response) {
      return { success: false, data: null, error: err.message };
    } else {
      console.log(`Error: ${err.message}`);
    }
  }
};

export const get_current_user = async (Identifier, Password) => {
  try {
    const response = await api.get(`/users/me?locale=${lang}`);
    return { success: true, data: response.data };
  } catch (err) {
    if (err.response) {
      return { success: false, data: null, error: err.message };
    } else {
      console.log(`Error: ${err.message}`);
    }
  }
};
