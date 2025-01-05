import { ChangeEvent, FormEvent, useState } from "react";
import ImageFile from "./ImageFile";
import Button from "./Button";
import RecognitionResponse from "./RecognitionResponse";

const MAX_FILE_SIZE = 1 * 1024 * 1024;

export default function ImageUploadWindow() {
  const [image, setImage] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [response, setResponse] = useState("");

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    setResponse("");
    setImage(event.target.files && event.target.files[0]);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!image) {
      alert("Please provide an image file");
    } else if (image.size > MAX_FILE_SIZE) {
      alert(
        "Image is too large! Only images with sizes less than 1MB are accepted."
      );
    } else {
      setSubmitting(true);
      setResponse("");
      const formData = new FormData();
      formData.append("file", image);
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/`, {
          method: "POST",
          body: formData,
        });
        //setError(null);
        if (!response.ok) {
          setResponse("ERROR");
          throw new Error("Failed to fetch data");
        }
        setResponse((await response.json()) as string);
      } catch (error) {
        setResponse("ERROR");
        console.log(error);
      }
      setSubmitting(false);
    }
  };

  return (
    <main className="h-100 d-flex flex-column align-middle justify-content-center">
      {image && <ImageFile image={image} />}

      <form
        className="d-flex flex-column align-middle justify-content-center"
        onSubmit={handleSubmit}
      >
        <div className="d-flex align-middle justify-content-center mb-3">
          <label className="form-label m-3">Upload an image</label>
          <input
            className="form-control w-50 align-self-center"
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            disabled={submitting}
          />
        </div>
        <div className="pb-4">
          <Button
            functionality={`btn btn-primary mb-3 ${
              submitting ? "disabled" : ""
            }`}
            type="submit"
          >
            {submitting ? (
              <>
                <span className="spinner-border spinner-border-sm"></span>
                <span className="ps-1">Analyzing...</span>
              </>
            ) : (
              "Recognize your image"
            )}
          </Button>
        </div>
      </form>
      {response && <RecognitionResponse response={response} />}
    </main>
  );
}
