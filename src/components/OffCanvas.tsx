import { ReactNode } from "react";
import CloseButton from "./CloseButton";

interface OffCanvasProps {
  showCanvas?: boolean;
  children: ReactNode;
  onClose: () => void;
}

export default function OffCanvas({
  showCanvas,
  children,
  onClose,
}: OffCanvasProps) {
  return (
    <div
      className={`offcanvas offcanvas-start d-lg-none d-flex flex-column vh-100 ${
        showCanvas ? "show" : ""
      }`}
      tabIndex={-1}
    >
      <div className="offcanvas-header border-bottom">
        <h4 className="offcanvas-title">Categories</h4>
        <CloseButton onClick={onClose} />
      </div>
      <div className="offcanvas-body flex-grow-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
