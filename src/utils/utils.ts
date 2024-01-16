import { IUserData } from './interfaces';

export const findUserById = (arr: IUserData[], id: number) => {
  return arr.find((item) => item.id === id);
};

export const removeUserFromArray = (arr: IUserData[], id: number) => {
  return arr.find((item) => item.id === id);
};
