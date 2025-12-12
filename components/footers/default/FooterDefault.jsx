import FooterLink from "@/components/ui/FooterLink";
import MetodePembayaran from "@/components/ui/MetodePembayaran";
import SeoFooter from "@/components/ui/SeoFooter";
import { Suspense } from "react";

export default function FooterDefault() {
  return (
    <>
      <Suspense>
        <MetodePembayaran></MetodePembayaran>
      </Suspense>
      <FooterLink></FooterLink>

      <SeoFooter></SeoFooter>
    </>
  );
}
