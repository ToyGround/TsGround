interface IUser {
  age: number;
  name: string
}

const 홍길동: IUser = {
  age : 10,
  name: '홍길동'
};

const getUser = (user:IUser) => console.log(user)

getUser(홍길동);