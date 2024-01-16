import { useRecoilState } from 'recoil';
import { selectedUserDataAtom, userDataAtom } from '../../recoil/atom/users';
import UserPill from './userPill';
import { IUserData } from '../../utils/interfaces';
import { useRef, useState } from 'react';
import { UserDropdownComponent } from '.';
import { findUserById } from '../../utils/utils';

type Props = {
  inputData: string;
  data: IUserData[];
  setInputData: React.Dispatch<React.SetStateAction<string>>;
};

const PickUsers: React.FC<Props> = ({ data, inputData, setInputData }) => {
  const [isHighlightedPill, setIsHighlightedPill] = useState<boolean>(false);
  const [highlightedUserCount, setHighlightedUserCount] = useState<number>(-1);
  const [selectedUsers, setSelectedUsers] = useRecoilState<IUserData[]>(selectedUserDataAtom);
  const [allUsersData, setAllUsersData] = useRecoilState<IUserData[]>(userDataAtom);
  const inputElementRef = useRef<HTMLInputElement>(null);

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  const handleInputNav = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isHighlightedPill && e.key !== 'ArrowDown' && e.key !== 'ArrowUp') {
      setIsHighlightedPill(true);
    }
    if (isHighlightedPill && e.key === 'Backspace' && selectedUsers.length > 0) {
      setSelectedUsers(selectedUsers.slice(0, -1));
      setIsHighlightedPill(false);
      const foundUser = findUserById(selectedUsers, selectedUsers[selectedUsers.length - 1].id);
      setAllUsersData([...allUsersData, foundUser] as IUserData[]);
    }
    if (e.key === 'ArrowDown') {
      setHighlightedUserCount(highlightedUserCount + 1);
    }
    if (e.key === 'ArrowDown' && highlightedUserCount === data.length - 1) {
      setHighlightedUserCount(0);
    }
    if (e.key === 'ArrowUp') {
      setHighlightedUserCount(highlightedUserCount - 1);
    }
    if (e.key === 'ArrowUp' && highlightedUserCount < -1) {
      setHighlightedUserCount(-1);
    }
    if (e.key === 'Enter') {
      const foundUser = data[highlightedUserCount];
      setSelectedUsers([...selectedUsers, foundUser] as IUserData[]);
      setAllUsersData(allUsersData.filter((item) => item.id !== foundUser.id));
      setInputData('');
      setHighlightedUserCount(-1);
    }
  };

  const handleInputFocus = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      inputElementRef.current?.focus();
    }
  };

  return (
    <div
      onClick={handleInputFocus}
      role="button"
      tabIndex={0}
      className="w-full h-full flex flex-wrap md:w-3/4 p-2 border-b-2 border-blue-300 cursor-text"
    >
      {selectedUsers.map((user: IUserData, index: number) => {
        return (
          <UserPill
            key={user.id}
            id={user.id}
            name={user.name}
            image={user.image}
            isHighlightedPill={isHighlightedPill}
            setIsHighlightedPill={setIsHighlightedPill}
            isLastPill={selectedUsers.length - 1 === index}
          />
        );
      })}

      <div className="relative mt-3 w-full md:w-2/5">
        <input
          ref={inputElementRef}
          className="w-full p-2 focus:outline-none"
          type="text"
          placeholder="Add new user..."
          autoFocus={true}
          onKeyUp={(e) => handleInputNav(e)}
          onChange={(e) => handleUserInput(e)}
          value={inputData}
        />
        <div className="w-full absolute top-14">
          <UserDropdownComponent
            data={data}
            setInputData={setInputData}
            highlightedUserCount={highlightedUserCount}
            setHighlightedUserCount={setHighlightedUserCount}
          />
        </div>
      </div>
    </div>
  );
};

export default PickUsers;
