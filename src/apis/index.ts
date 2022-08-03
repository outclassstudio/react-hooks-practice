import axios from "axios";

const apiClient = () => {
  const accessToken = localStorage.getItem("token");

  const axiosInstance = axios.create({
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    withCredentials: true,
  });

  return axiosInstance;
};

export default apiClient;
