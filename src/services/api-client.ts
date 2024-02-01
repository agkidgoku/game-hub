import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string;
  previous: string | null;
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

  getAll = (config?: AxiosRequestConfig) => {
    console.log(this.endpoint);
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((response) => response.data);
  };

  getPage = (page: number) => {
    return axiosInstance
      .get<FetchResponse<T>>(`${this.endpoint}?page=${page}`)
      .then((response) => response.data);
  };
}

export default APIClient;
