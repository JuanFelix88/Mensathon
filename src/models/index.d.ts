export interface User {
  _id: string;
  name: string;
  nickName: string;
  password: string;
  job: string;
  team: string;
  /** _id team*/
  image: string;
  tags: string[];
  /** date time team*/
  createdAt: string
}

export interface Team {
  _id: string;
  name: string;
  nickName: string;
  description: string;
  /** Array<user> */
  participants: User[];
  /** user */
  leader: User;
  /** amount */
  amountParticipants: number;
  /** date time team*/
  createdAt: string
}