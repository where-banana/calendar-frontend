import React, { useState } from 'react';
import axios from 'axios';

function TwoInputForm(props) {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [data, setData] = useState(null);

  function handleChange(event) {
    setValue1(event.target.value);
  }

  function handleChange2(event) {
    setValue2(event.target.value);
  }

  function updateHandler(){
    if (props.type === "post") {
      const json = { name: value1, user_id: value2};
      axios.post(props.url, json)
      .catch((err) => {
        console.log(err);
      });
    }
    if (props.type === "put") {
      const json = { name: value2 };
      axios.put(props.url + value1, json)
      .catch((err) => {
        console.log(err);
      });
      setData({ name: "Put Request send" });
    }
  }

  return (
    <div className='nameForm'>
      <div>
        <div>
          <p>{props.name}</p>
          <p>{props.name2}</p>
        </div>
        <div className="inputs">
          <input
            type="text"
            value={value1}
            onChange={handleChange}
          />
          <input
            type="text"
            value={value2}
            onChange={handleChange2}
          />
        </div>
      </div>
      <div>
        <button onClick={updateHandler}>Click</button>
      </div>
      <textarea className="answer" rows="10" cols="30" value={data?.name} readOnly></textarea>
    </div>
  );
}

export default TwoInputForm;
