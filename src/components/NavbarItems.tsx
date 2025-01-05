interface NavBarItemsProps {
  expanded: boolean;
  activated: number;
  navItems: {
    name: string;
    link: string;
  }[];
  onItemClick: (index: number) => void;
}

export default function NavbarItems({
  expanded,
  activated,
  navItems,
  onItemClick,
}: NavBarItemsProps) {
  return (
    <div
      className={`collapse navbar-collapse text-center ${
        expanded ? "show" : ""
      }`}
      id="navbarNav"
    >
      <ul className="navbar-nav">
        {navItems.map((item, index) => (
          <li className="nav-item" key={index}>
            <a
              className={`nav-link text-white ${
                activated === index ? "fw-bold" : ""
              }`}
              href={item.link}
              onClick={() => onItemClick(index)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
