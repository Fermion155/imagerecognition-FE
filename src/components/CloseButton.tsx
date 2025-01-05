interface CloseButtonProps {
  onClick: () => void;
}

export default function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button
      type="button"
      className="btn-close"
      onClick={onClick}
      aria-label="Close"
    ></button>
  );
}
