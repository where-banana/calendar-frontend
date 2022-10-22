import React, { useState } from 'react';
import axios from 'axios';

function NameForm(props) {
  const [value, setValue] = useState('');
  const [data, setData] = useState(null);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function updateHandler() {
    axios.get(props.url).then((res) => {
      setData(res.data);
    }).catch((err) => {
      console.log(err)
    });

    if (data != null){
      setData(data);
    }
  };

  //useEffect(update, [props.url]);

  return (
    <div className='nameForm'>
      <div>
          Name:
          <input
            type="text"
            value={value}
            onChange={handleChange}
          />
      </div>
      <div>
        <button onClick={updateHandler}>Click</button>
      </div>
      <textarea className="answer" rows="10" cols="30" value={data?.joke} readonly></textarea>
    </div>
  );
}

export default NameForm;
