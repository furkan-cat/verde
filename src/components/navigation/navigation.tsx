import { Link } from 'react-router-dom';
import { FiPlay } from 'react-icons/fi';
import { IoIosNotifications } from 'react-icons/io';
import { MdWindow } from 'react-icons/md';
import { useAppSelector } from '@features/hooks/hooks';
import { routes } from '@constants/routes';

const Navigation = () => {
  const state = useAppSelector((state) => state.ownPostsReducer.ownPosts);
  return (
    <nav className="bg-white px-2 flex justify-between p-2">
      <Link
        to={routes.home}
        className="flex justify-center items-center space-x-2 hover:bg-slate-200 hover:rounded-md hover:px-1 hover:duration-150"
      >
        <FiPlay className=" hover:bg-slate-200" />
        <div className="text-lg font-medium">Arbit Blog</div>
      </Link>
      <div className="flex justify-center items-center space-x-2 relative">
        <p className="relative">
          Posts <span className="absolute bottom-2 rıght-0">1</span>
        </p>
        <IoIosNotifications className="text-gray-600 hover:text-gray-400" />
        <MdWindow />
        <div className="rounded-lg w-4 h-4 bg-slate-800" />
      </div>
    </nav>
  );
};

export default Navigation;
