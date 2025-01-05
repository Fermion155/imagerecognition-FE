import { useState } from "react";
import ThreeDots from "./icons/ThreeDots";
import Hamburger from "./icons/Hamburger";
import styles from "./Navigation.module.css";
import SideWindow from "./SideWindow";
import OffCanvas from "./OffCanvas";
import NavbarItems from "./NavbarItems";
import Button from "./Button";

const navItems = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "About",
    link: "#",
  },
];
const navbarButtonStyle = "navbar-toggler";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [activated, setActivated] = useState(0);
  const [showCanvas, setShowCanvas] = useState(false);

  const handleItemsTogglerClick = () => {
    setExpanded(!expanded);
  };

  const handleItemClick = (index: number) => {
    setActivated(index);
  };

  const handleOffCanvasTogglerClick = () => setShowCanvas(true);

  const handleOffCanvasClose = () => setShowCanvas(false);

  return (
    <nav className="navbar navbar-expand-lg bg-primary sticky-top">
      <div className="container-fluid">
        <Button
          color={styles.navbarColoring}
          functionality={navbarButtonStyle}
          type="button"
          onClick={handleOffCanvasTogglerClick}
        >
          <ThreeDots color="var(--color-for-toggler)"></ThreeDots>
        </Button>
        <OffCanvas showCanvas={showCanvas} onClose={handleOffCanvasClose}>
          <SideWindow />
        </OffCanvas>
        <a className="navbar-brand mx-auto text-white" href="">
          Image Recognition
        </a>
        <Button
          color={styles.navbarColoring}
          functionality={navbarButtonStyle}
          type="button"
          onClick={handleItemsTogglerClick}
        >
          <Hamburger color="var(--color-for-toggler)"></Hamburger>
        </Button>
        <NavbarItems
          expanded={expanded}
          activated={activated}
          navItems={navItems}
          onItemClick={handleItemClick}
        />
      </div>
    </nav>
  );
};

export default Navigation;
