export interface Friend {
  id: number;
  name: string;
}
export interface Person {
  _id: string;
  isActive: boolean;
  picture: string;
  age: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  friends: Friend[];
}