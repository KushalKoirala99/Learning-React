import PropTypes from "prop-types";
import "./list.css";

const List = ({ item, list, setList }) => {
  const handleDel = (itemName) => {
    setList(list.filter((lists) => lists.name !== itemName));
  };

  const handleClick = (clickedItem) => {
    setList(
      list.map((listItem) =>
        listItem.name === clickedItem.name
          ? { ...listItem, done: !listItem.done }
          : listItem
      )
    );
  };

  return (
    <>
      <h3 className={`list ${item.done ? "done" : ""}`}>
        <span onClick={() => handleClick(item)}>{item.name}</span>
        <button className="del-button" onClick={() => handleDel(item.name)}>
          X
        </button>
      </h3>
    </>
  );
};

List.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    done: PropTypes.bool,
  }),

  list: PropTypes.array,
  setList: PropTypes.func,
};

export default List;
