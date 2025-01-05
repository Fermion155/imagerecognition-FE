import SideWindow from "./SideWindow";
import styles from "./MainWindow.module.css";
import ImageUploadWindow from "./ImageUploadWindow";

const MainWindow = () => {
  return (
    <div className="container text-center h-100 w-100 mw-100">
      <div className="row h-100">
        <div
          className={`col-lg-3 d-none d-lg-block overflow-auto p-2 border-end ${styles.sideWindowSize}`}
        >
          <SideWindow></SideWindow>
        </div>
        <div className="col-lg-9 pt-3">
          <ImageUploadWindow />
        </div>
      </div>
    </div>
  );
};

export default MainWindow;
