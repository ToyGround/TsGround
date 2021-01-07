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

const 이름만있는유저 = {
  name:'철수'
}
getUser(이름만있는유저); // ts error 정의한 인터페이스형식이 아님