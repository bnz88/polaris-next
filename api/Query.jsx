import i18next from "i18next";
import Cookies from "js-cookie";
import { createElement, lazy, useEffect, useState } from "react";
import { hideLoader } from "../App";
import { config } from "../constants";
import { useInit } from "../context/Init";
import { getWithExpiry, setWithExpiry } from "../utils/generalFunction";
import { ApiCall } from "./ApiCalls";

const SejarahKemenangan = lazy(() => import("../widget/SejarahKemenangan"));
const PromosiWidget = lazy(() => import("../widget/PromosiWidget"));
const Gallery = lazy(() => import("../widget/Gallery"));
const PermainanWidget = lazy(() => import("../widget/PermainanWidget"));
const SlotWidget = lazy(() => import("../widget/SlotWidget"));
const SeoText = lazy(() => import("../widget/SeoText"));

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const WidgetList = {
  Sejarahkemenangan: {
    component: SejarahKemenangan,
  },
  Promosiwidget: {
    component: PromosiWidget,
  },
  Gallery: {
    component: Gallery,
  },
  Permainanwidget: {
    component: PermainanWidget,
  },
  Slotwidget: {
    component: SlotWidget,
  },
  Seotext: {
    component: SeoText,
  },
};

let currentData;

const Query = ({ children, query }) => {
  const [data, setData] = useState(null);
  const InitData = useInit();

  const getStaticData = async (lang) => {
    const thisUrl = `${config.CMS_API}${query}&locale=${
      lang ? lang : Cookies.get("i18next") || useInit.defaultLanguage
    }`;
    const cacheData = getWithExpiry(thisUrl);
    let response;
    if (cacheData) {
      response = cacheData;
    } else {
      response = await ApiCall({}, true).get(thisUrl);
      setWithExpiry(thisUrl, response, 10); // safe to local Storage
    }
    currentData = response.data.data.attributes.localizations.data.map(
      (res) => {
        return res.attributes.locale;
      }
    );

    if (typeof response.data.data.attributes["Widget"] != "undefined") {
      // proses Widget Data
      const prosesDataWidget = await response.data.data.attributes.Widget.map(
        (res, index) => {
          console.log(res.__component);
          const components = capitalizeFirstLetter(
            res.__component.split(".")[1]
          );

          if (typeof WidgetList[components] !== "undefined") {
            // check widgetlist exist or not
            console.log(components);
            const element = createElement(WidgetList[components].component, {
              key: index,
              data: res,
            });
            res.component = element;
          }
          return res;
        }
      );

      response.data.data.attributes.Widget = prosesDataWidget;
    }

    if (typeof response.data.data.attributes["Meta"] != "undefined") {
      InitData.setMeta(response.data.data.attributes.Meta); // set Meta Tag
    }

    setData(response.data.data.attributes);
  };

  useEffect(() => {
    i18next.on("languageChanged", (lng) => {
      // listen to language change
      if (currentData.includes(lng)) getStaticData(lng); // check if language exist
    });
    getStaticData();
  }, []);

  if (data) {
    hideLoader();
    return children({ data });
  }

  //return <div>{JSON.stringify(data)}</div>;
};

export default Query;
