import { useEffect, useState } from 'react';
import { Footer, Navbar } from '../../shared';
import { PickUsersComponent } from '.';
import { useRecoilValue } from 'recoil';
import { IUserData } from '../../utils/interfaces';
import { userDataAtom } from '../../recoil/atom/users';

const HomeComponent: React.FC = () => {
  const [inputData, setInputData] = useState<string>('');
  const [searchResults, setSearchResults] = useState<IUserData[]>([]);
  const allUsersData = useRecoilValue<IUserData[]>(userDataAtom);

  useEffect(() => {
    const filteredUserData = allUsersData.filter(
      (item) =>
        item.name.toLowerCase().includes(inputData.toLowerCase()) ||
        item.email.toLowerCase().includes(inputData.toLowerCase()),
    );
    setSearchResults(filteredUserData);
  }, [inputData, allUsersData]);

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center p-2 md:p-10">
        <PickUsersComponent data={inputData.length !== 0 ? searchResults : allUsersData} inputData={inputData} setInputData={setInputData} />
      </div>
      <Footer />
    </>
  );
};

export default HomeComponent;
