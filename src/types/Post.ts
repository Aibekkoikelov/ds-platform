export interface IUser {
  _id: string;
  fullName: string;
  email: string;
  passwordHash: string;
  phoneNumber: string;
  avatarUrl: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface ServerResponse<IUser> {
  _id: string;
  title: string;
  text: string;
  tags: string[];
  viewsCount: number;
  user: IUser;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
