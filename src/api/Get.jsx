import axios from "axios";

export default function getData(url) {
  let data;
  axios.get(url).then((res) => {
    console.log(res.data);
    data = Object.assign({}, res.data);
    console.log(res.data);
  }).catch((err) => {
    console.log(err)
  });
  console.log(data);

  return data;
};
