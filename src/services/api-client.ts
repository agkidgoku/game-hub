import axios, { AxiosRequestConfig } from "axios";

export interface FetchRespose<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "22dd76f0b9054ce5ba37afe02e52b755",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchRespose<T>>(this.endpoint, config)
      .then((response) => response.data);
  };
}

export default APIClient;
