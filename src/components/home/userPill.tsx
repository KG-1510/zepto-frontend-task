import { IoMdClose } from 'react-icons/io';
import { useRecoilState } from 'recoil';
import { IUserData } from '../../utils/interfaces';
import { selectedUserDataAtom, userDataAtom } from '../../recoil/atom/users';
import { findUserById } from '../../utils/utils';

type Props = {
  id: number;
  name: string;
  image: string;
  isHighlightedPill: boolean;
  setIsHighlightedPill: React.Dispatch<React.SetStateAction<boolean>>;
  isLastPill: boolean;
};

const UserPill: React.FC<Props> = ({
  id,
  name,
  image,
  isHighlightedPill,
  setIsHighlightedPill,
  isLastPill,
}) => {
  const [allUsersData, setAllUsersData] = useRecoilState<IUserData[]>(userDataAtom);
  const [selectedUsers, setSelectedUsers] = useRecoilState<IUserData[]>(selectedUserDataAtom);

  const handleUserDelete = (id: number) => {
    const foundUser = findUserById(selectedUsers, id);
    setAllUsersData([...allUsersData, foundUser] as IUserData[]);
    setSelectedUsers(selectedUsers.filter((item) => item.id !== id));
    setIsHighlightedPill(false);
  };

  return (
    <div
      className={`flex flex-row items-center justify-between rounded-full bg-gray-300 shadow-md p-1 md:p-2 m-1 cursor-pointer ${
        isHighlightedPill && isLastPill ? 'border-2 border-blue-400' : ''
      }`}
    >
      <img className="h-8 rounded-full" src={image} alt="user-profile" />
      <p className="w-full px-2 text-sm">{name}</p>
      <button className="p-2 hover:bg-gray-400 rounded-full" onClick={() => handleUserDelete(id)}>
        <IoMdClose />
      </button>
    </div>
  );
};

export default UserPill;
