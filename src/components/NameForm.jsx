import React, { useState } from 'react';
import axios from 'axios';

function NameForm(props) {
  const [value, setValue] = useState('');
  const [data, setData] = useState(null);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function updateHandler() {
    if (props.type === "get"){
      axios.get(props.url + value).then((res) => {
        setData(res.data);
      }).catch((err) => {
        console.log(err);
      });
      if (data != null){
        setData(data);
      }
    }
    else if (props.type === "delete") {
      axios.delete(props.url + value).catch((err) => {
        console.log(err);
      });
      setData({name: "succesfuly deleted, maybe, check console"});
    }
    else if (props.type === "post") {

      let json = { name: value };
      axios.post(props.url, json)
      .catch((err) => {
        console.log(err);
      });
    }
  };

  //useEffect(update, [props.url]);

  return (
    <div className='nameForm'>
      <div>
          <p>{props.name}</p>
          <input
            type="text"
            value={value}
            onChange={handleChange}
          />
      </div>
      <div>
        <button onClick={updateHandler}>Click</button>
      </div>
      <textarea className="answer" rows="10" cols="30" value={data?.name} readOnly></textarea>
    </div>
  );
}

export default NameForm;
