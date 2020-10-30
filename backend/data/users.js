import bcrypt from 'bcryptjs';

const users = [
  {
    name:  'Admin User',
    email: 'admin@prohop.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name:  'Punisher',
    email: 'punisher@prohop.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name:  'Daredevil',
    email: 'daredevil@prohop.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
