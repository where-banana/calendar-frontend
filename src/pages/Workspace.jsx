import NameForm from '../components/NameForm';
import TwoInputForm from '../components/TwoInputForm';

const base_url = "http://localhost:8080/entity-management/";

function WS() {
  return (
    <div>
      <NameForm
        name={"get WS"}
        type={"get"}
        url={base_url + "workspaces/"}
      />
      <TwoInputForm
        name={"post name"}
        name2={"user_id"}
        type={"post"}
        url={base_url + "workspaces"}
      />
      <TwoInputForm
        name={"put id"}
        name2={"name"}
        type={"put"}
        url={base_url + "workspaces"}
      />
      <NameForm
        name="delete WS"
        type={"delete"}
        url={base_url + "workspaces/"}
      />
    </div>
  );
}

export default WS;
