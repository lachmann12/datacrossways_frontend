import { fetchPublic } from "./fetch";

export const getKey = async (id) => {
  return fetchPublic("/user/accesskey");
};

export const createKey = async (data) => {
  const response = await fetchPublic("/user/accesskey/${expiration}", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return response;
};

export const deleteKey = async (id) => {
  const response = await fetchPublic(`/user/accesskey/${id}`, { method: "DELETE" });
  return response;
};
