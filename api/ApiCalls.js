import axios from "axios";

import { config } from "@/constants/common";
import { getWithExpiry, setWithExpiry } from "@/lib/generalFunction";

// axios.defaults.headers.common[
//   "x-session"
// ] = ` 1a73fc584d5507fef8d089d9b2504f7096e1d8605cd77122ae0e054a571cad2aaa30b33edd179eadea1db6d8da3b3375ed621f90a7d7f5f37fcc0a3f582f28ad`;

export const ApiCall = (param, withoutxsession) => {
  let configDefault = {
    baseURL: config.FE_API,
    headers: {},
  };

  if (!withoutxsession) {
    configDefault.headers["X-Session"] = getWithExpiry("T_SESSION");
  }

  let configs = {
    ...configDefault,
    ...param,
  };

  const apiVar = axios.create(configs);

  apiVar.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      if (getWithExpiry("T_SESSION") != response.headers["x-session"]) {
        setWithExpiry("T_SESSION", response.headers["x-session"], 0);
      }

      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  return apiVar;
};
