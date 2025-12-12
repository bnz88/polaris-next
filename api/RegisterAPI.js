import { ApiCall } from "./ApiCalls";
import { config } from "../constants";
import { setWithExpiry } from "../utils/generalFunction";

export const registerPreField = (token) => {
  console.log(token);
  return ApiCall({
    timeout: 7000,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  })
    .post(`${config.FE_API}/registration/fetch-form`, {
      registrationToken: token,
    })
    .then(function (res) {
      return res.data.data;
    });
};

export const registerSubmit = (data) => {
  return ApiCall({
    timeout: 7000,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  }).post(`${config.FE_API}/registration/submit`, data);
};

export const registerVerify = (data, auth) => {
  console.log(data);

  return ApiCall({
    timeout: 7000,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  })
    .post(`${config.FE_API}/registration/verify`, data)
    .then((res) => {
      if (!res.data.errorCode && data.enableAutoLogin) {
        setWithExpiry("T_SESSION", res.headers["x-session"], 0);
        auth.login(res.data.data);
        window.location.reload(true);
      }
    });
};
