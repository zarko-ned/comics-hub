import axios from "axios";
import md5 from "md5"; // Treba ti za hash generisanje

const publicKey = "f5fdf5d2fdab59918190db167140a9ef";
const privateKey = "1450830e3779aa79fae61c95c26600ef5509d35a";
const ts = new Date().getTime();
const hash = md5(ts + privateKey + publicKey);

const apiClient = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public",
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});

export default apiClient;
