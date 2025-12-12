import { ApiCall } from "./ApiCalls";

export const checkDuplication = async (param, data) => {
  var dataTosend = {};
  dataTosend[param] = data;
  const response = await ApiCall({
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  }).post(`/validation/check${param}`, dataTosend);

  return response.data;
};

export const checkEmailDuplication = async (data) => {
  var dataTosend = {};
  dataTosend["email"] = data;
  try {
    const response = await ApiCall({
      timeout: 5000,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    }).post(`/bnz-api/email/check-email`, dataTosend);

    return response.data;
  } catch (e) {
    return e;
  }
};
