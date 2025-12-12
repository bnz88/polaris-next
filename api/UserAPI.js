import { ApiCall } from "./ApiCalls";
import { deleteSession } from "../utils/generalFunction";
import { useAuth } from "../context/Auth";
import { config } from "../constants";

export const logout = () => {
  return ApiCall({
    timeout: 7000,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  })
    .post(`${config.FE_API}/auth/logout`, { playerIp: "" })
    .then((res) => {
      console.log(res);
      if (res.data.errorCode == 0) {
        deleteSession("T_SESSION");

        window.location.reload(true);
      }
    });
};
