import { useTranslations } from "next-intl";
import { inputConfig } from "../constants/common";

export const setWithExpiry = (key, value, ttl) => {
  // in minutes
  const now = new Date();

  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value: value,
    expiry: ttl ? now.getTime() + ttl * 60 * 1000 : false,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getWithExpiry = (key) => {
  const itemStr = localStorage.getItem(key);
  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  // compare the expiry time of the item with the current time
  if (item.expiry && now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};

export const deleteSession = (key) => {
  localStorage.removeItem(key);
};

export const generalFunction = {
  handleSubmitProps: (data) => {
    let tempobj = {};

    Object.entries(data).forEach(([key, val]) => {
      console.log(key, val);
      if (key != "callingCode" && key != "errMsg") {
        tempobj[key] = val || "";
      }
      if (
        key == "operatorBankShortName" ||
        key == "day-birthDate" ||
        key == "month-birthDate" ||
        key == "year-birthDate"
      ) {
        tempobj[key] = val.value;
      }
      //if (key === "captcha") tempobj["userInput"] = val.toUpperCase();
      //if (key === "password") tempobj["confirmPassword"] = val;
      if (key === "phone") tempobj["callingCode"] = `${data.callingCode.value}`;
    });

    return tempobj;
  },
  handleCommonFormError: (label, inputName, error, isCheckbox) => {
    let returnMsg = null;
    const t = useTranslations();
    console.log(error);
    if (Object.keys(error).length > 0) {
      let type = error.type;
      let msg = error.message;

      if (type === "required") {
        if (isCheckbox) {
          returnMsg = t(label);
        } else {
          returnMsg = t(msg, { 0: label });
        }
      } else if (
        type === "minLength" ||
        type === "maxLength" ||
        type === "min" ||
        type === "max"
      ) {
        returnMsg = t(msg, {
          0: label,
          1: inputConfig[inputName][type].value,
        });
      } else if (type === "pattern") {
        returnMsg = t(msg);
      } else if (type === "validate") {
        returnMsg = t(msg);
      } else if (
        type === "minAmount" ||
        type === "maxAmount" ||
        type === "duplicated" ||
        type === "emailNotValid"
      ) {
        returnMsg = msg;
      }
    }

    return returnMsg;
  },
  handleFormFeedBack: (t, callback, msg, status, param) => {
    // param TO DO: get error message from API return
    var statusCode = msg ? "error" : "success";

    if (msg) {
      // if error
      if (isNaN(msg)) {
        msg = t(msg);
      } else {
        if (msg) {
          msg = "ERR.GENERAL." + msg;
        } else {
          msg = msg;
        }
        msg = t(msg);
      }
    } else {
      // if success
      msg = t("ERR.GENERAL.SUCCESS");
    }

    if (status) {
      statusCode = status;
    }

    callback.setError("errMsg", { type: statusCode, message: msg });
    return status;
  },
  parseHtml: (html) => {
    const { t } = useTranslation();
    return { __html: t(html) };
  },
  convertAmountToRealValue: (val) => {
    val = val.replaceAll(".", "");
    val = val.replaceAll(",", ".");
    return val;
  },
  errMsg: (msg) => {
    // List of all ERR CODES MESSAGE
    if (msg) {
      return "ERR.GENERAL." + msg;
    } else {
      return msg;
    }
  },
};
