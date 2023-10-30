import useNavigation from "../hooks/useNavigation";

function Link({ to, children }) {
  const { navigate } = useNavigation();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
