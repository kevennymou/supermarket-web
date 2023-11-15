import bcrypt from "bcryptjs";

// o bcrypt e uma dependencia do js que criptografa as senhas:
// criando alguns usuarios...

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Miguel Coelho",
    email: "miguel@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Julia Tavares",
    email: "julia@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
