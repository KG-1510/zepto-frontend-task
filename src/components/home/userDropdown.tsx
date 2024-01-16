import { useRecoilState } from 'recoil';
import { selectedUserDataAtom, userDataAtom } from '../../recoil/atom/users';
import { IUserData } from '../../utils/interfaces';
import { findUserById } from '../../utils/utils';

type Props = {
  data: IUserData[];
  setInputData: React.Dispatch<React.SetStateAction<string>>;
  highlightedUserCount: number;
  setHighlightedUserCount: React.Dispatch<React.SetStateAction<number>>;
};

const UserDropdown: React.FC<Props> = ({
  data,
  setInputData,
  highlightedUserCount,
  setHighlightedUserCount,
}) => {
  const [allUsersData, setAllUsersData] = useRecoilState<IUserData[]>(userDataAtom);
  const [selectedUsers, setSelectedUsers] = useRecoilState<IUserData[]>(selectedUserDataAtom);

  const handleAddUser = (id: number) => {
    const foundUser = findUserById(allUsersData, id);
    setSelectedUsers([...selectedUsers, foundUser] as IUserData[]);
    setAllUsersData(allUsersData.filter((item) => item.id !== id));
    setInputData('');
    setHighlightedUserCount(-1);
  };

  return (
    <div className="h-60 shadow-md rounded-b-md w-full overflow-y-auto border-b-2 border-x-2 border-gray-300 bg-white">
      {data.length > 0 ? (
        data.map((item: IUserData, index: number) => {
          return (
            <div
              onClick={() => handleAddUser(item.id)}
              key={item.id}
              role="button"
              className={`flex flex-row items-center p-2 w-full cursor-pointer hover:bg-gray-200 ${
                highlightedUserCount === index ? 'bg-gray-400' : ''
              }`}
            >
              <img className="h-10 rounded-full" src={item.image} alt="user-profile" />
              <div className="flex flex-col mx-4">
                <p className="font-semibold">{item.name}</p>
                <p>{item.email}</p>
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex items-center justify-center mt-10 p-2">
          <p>Uh Oh! No more users found! 🤥</p>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
