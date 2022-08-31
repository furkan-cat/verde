import { useLocation, useNavigate } from "react-router-dom";
import Card from "@components/card/card";
import Vstack from "@components/vstack/vstack";
import TextInput from "@components/text-input/text-input";
import Space from "@components/space/space";

interface ICardStateProps {
  id: number | undefined;
  title: string | undefined;
  body: string | undefined;
}

const Detail = () => {
  const data = useLocation().state as ICardStateProps;
  const navigate = useNavigate();

  return (
    <Vstack center="items-center">
      <TextInput text={data.title} />
      <Space/>
      <TextInput text={data.body} />
      {/* <input type="text" value={data.body} /> */}
      <div className="flex justify-between">
        <button>Delete</button>
        <button>Update</button>
      </div>
    </Vstack>
  );
};

export default Detail;
