import { FiPlay } from 'react-icons/fi';
import { IoIosNotifications } from 'react-icons/io';
import { MdWindow } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { routes } from '@constants/routes';

const Navigation = () => {
  return (
    <nav className="bg-white px-2 flex justify-between p-2">
      <Link
        to={routes.home}
        className="flex justify-center items-center space-x-2 hover:bg-slate-200 hover:rounded-md hover:px-1 hover:duration-150"
      >
        <FiPlay className=" hover:bg-slate-200" />
        <div className="text-lg font-medium">Arbit Blog</div>
      </Link>
      <div className="flex justify-center items-center space-x-2">
        <div>Posts</div>
        <IoIosNotifications className="text-gray-600 hover:text-gray-400" />
        <MdWindow />
        <div className="rounded-lg w-4 h-4 bg-slate-800" />
      </div>
    </nav>
  );
};

export default Navigation;
