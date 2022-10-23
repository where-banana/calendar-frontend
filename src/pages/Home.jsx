import NameForm from '../components/NameForm';
import TwoInputForm from '../components/TwoInputForm';
import "../styles/Home.css"

const base_url = "http://localhost:8080/entity-management/";

function Home() {

  return (
    <div className='rightSide'>
      <NameForm
        name={"get User"}
        type={"get"}
        url= {base_url + "users/"}
      />
      <NameForm
        name={"post User"}
        type={"post"}
        url= {base_url + "users/"}
      />
      <TwoInputForm
        name={"id"}
        name2={"name"}
        type={"put"}
        url={base_url + "users/"}
      />
      <NameForm
        name={"delete User"}
        type={"delete"}
        url= {base_url + "users/"}
      />
    </div>
  );
}

export default Home;
