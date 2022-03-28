import  React from 'react';
import data from "./SearchListData.json";

function SearchList(props) {
  const filteredData = data.filter((el) => {
    if (props.input === '') {
      return el;
    }
    else {
      return el.text.toLowerCase().includes(props.input);
    }
  });
  return (
    <ul className="search__list">
      {filteredData.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

export default SearchList;
