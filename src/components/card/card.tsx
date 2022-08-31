import { baseUrl } from "@constants/index";
import { routes } from "@constants/routes";
import { BiArrowBack } from "react-icons/bi";

export interface ICardProps {
  title?: string;
  description?: string;
  back?: any;
}

const Card = (props: ICardProps): JSX.Element => {
  const { title, description, back } = props;
  return (
    <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 min-h-full">
      {back && (
        <span className="rounded-lg bg-red shadow-md">
          <BiArrowBack onClick={back} />
        </span>
      )}
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-4">
        {description}
      </p>
    </div>
  );
};

export default Card;
