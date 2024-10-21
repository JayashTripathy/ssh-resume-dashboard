import axios from "axios";
import { Auth } from "./types/auth";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const postLogin = async (creds: Auth) => {
  try {
    const response = await axiosInstance.post("/auth/login", {
      email: creds.email,
      password: creds.password,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data;
    } else {
      throw error;
    }
  }
};
