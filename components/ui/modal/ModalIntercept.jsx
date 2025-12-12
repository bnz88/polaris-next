"use client";
import { Dialog, DialogOverlay, DialogContent, DialogTitle } from "../dialog";
import { useRouter } from "next/navigation";

const ModalIntercept = ({ children, title }) => {
  const router = useRouter();
  const handleOpenChange = () => {
    router.back();
  };
  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <DialogOverlay>
        <DialogContent className="overflow-x-hidden">
          <DialogTitle>{title}</DialogTitle>
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default ModalIntercept;
