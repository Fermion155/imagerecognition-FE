interface ImageProps {
  image: File;
}

export default function ImageFile({ image }: ImageProps) {
  return (
    <div className="p-4">
      <img
        src={URL.createObjectURL(image)}
        className="mw-100"
        alt="Your image"
        width="500"
        height="auto"
      />
    </div>
  );
}
