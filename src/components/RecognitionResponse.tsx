import Check from "./icons/Check";
import Danger from "./icons/Danger";
import Info from "./icons/Info";

interface RecognitionResponseProps {
  response: string;
}

const statusMapping = {
  ALLOWED: "Image successfully classified as allowed.",
  NOT_ALLOWED: "Image recognized but is classified as not allowed.",
  NOT_RECOGNIZED:
    "Image was analyzed but it can't be recognized as allowed or not allowed based on the current categories and their labels.",
  ERROR: "Unkown error occurred. Please try again later.",
};

export default function RecognitionResponse({
  response,
}: RecognitionResponseProps) {
  let alertStatus = "";
  let message = "";
  switch (response) {
    case "ALLOWED":
      alertStatus = "alert-success";
      message = statusMapping["ALLOWED"];
      break;
    case "NOT_ALLOWED":
      alertStatus = "alert-warning";
      message = statusMapping["NOT_ALLOWED"];
      break;
    case "NOT_RECOGNIZED":
      alertStatus = "alert-primary";
      message = statusMapping["NOT_RECOGNIZED"];
      break;
    default:
      message = statusMapping["ERROR"];
      alertStatus = "alert-danger";
  }

  return (
    <>
      <div className={`align-self-center alert ${alertStatus}`}>
        {alertStatus === "alert-primary" && <Info />}
        {(alertStatus === "alert-success" ||
          alertStatus === "alert-warning") && <Check />}
        {alertStatus === "alert-danger" && <Danger />}
        <span className="m-2">{message}</span>
      </div>
    </>
  );
}
