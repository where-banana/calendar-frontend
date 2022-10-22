import NameForm from '../components/NameForm';
import "../styles/Home.css"

const base_url = "https://v2.jokeapi.dev/"

function Home() {

  return (
    <div className='rightSide'>
      <NameForm
        url= {base_url + "joke/Any?type=single"}
      />
      <NameForm
        url= {base_url + "joke/Any?type=single"}
      />
    </div>
  );
}

export default Home;
