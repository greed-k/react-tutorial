import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multiSelect, setMultiSelect] = useState(false);
  const [multi, setMulti] = useState([]);

  function handleSingle(getID) {
    setSelected(getID === selected ? null : getID);
  }
  function handleMulti(getID) {
    let temp = [...multi];
    const index = temp.indexOf(getID);
    // check if the current id is in the multi already, if yes, then remove it
    if (index === -1) temp.push(getID);
    else temp.splice(index, 1);

    setMulti(temp);
  }

  // Multi select Accordion

  return (
    <div className="wrapper">
      <button onClick={() => setMultiSelect(!multiSelect)}>
        Enable Multi-Select
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  multiSelect
                    ? () => handleMulti(dataItem.id)
                    : () => handleSingle(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {multiSelect
                ? multi.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
