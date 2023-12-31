import { create } from "apisauce";
import cache from "../utils/cache";
import authStorate from "./../auth/storage";

const apiClient = create({ baseURL: "http://192.168.8.101:9000/api" });

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorate.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
