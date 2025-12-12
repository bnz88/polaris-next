import { headers } from "next/headers";
import { userAgent } from "next/server";

export async function isMobile() {
  const headersList = await headers();
  var isMobile = headersList.get("x-isMobile");
  return isMobile == "1" ? true : false;
}
