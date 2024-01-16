import { atom } from 'recoil';
import data from '../../dummy/userData.json';
import { IUserData } from '../../utils/interfaces';

const importedData = data.users;

const userDataAtom = atom({
  key: 'userData',
  default: importedData,
});

const selectedUserDataAtom = atom({
  key: 'selectedUserData',
  default: [] as IUserData[],
});

export { userDataAtom, selectedUserDataAtom };
