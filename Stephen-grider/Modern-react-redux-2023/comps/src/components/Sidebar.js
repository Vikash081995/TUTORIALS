import Link from "./Link";

function Sidebar() {
  const links = [
    {
      label: "DropDown",
      path: "/"
    },
    {
      label: "Accordion",
      path: "/accordion"
    },
    {
      label: "Buttons",
      path: "/buttons"
    },
    {
      label: "Modal",
      path: "/modal"
    },
    {
      label: "Table",
      path: "/table"
    }
  ];

  return (
    <div>
      {links.map((link) => {
        return (
          <Link key={link.label} to={link.path}>
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;
