import { Link, useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    props.setSearchValue("");
  };

  const handleInputClick = () => {
    navigate("/search");
  };
  return (
    <div className="box-border flex flex-col items-center justify-around bg-Blazing-Yellow p-5 sm:flex-row">
      <h1
        onClick={handleClick}
        className="flex items-center justify-center p-1 font-mono text-3xl sm:justify-start sm:text-4xl"
      >
        <Link to="/"> Film Finder </Link>
      </h1>

      <div className="flex items-center justify-center p-3 sm:justify-end">
        <Link to="/search">
          <input
            className="w-full rounded-md p-2 sm:w-auto"
            placeholder="Type to search"
            value={props.searchValue}
            onClick={handleInputClick}
            onChange={(e) => props.setSearchValue(e.target.value)}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
