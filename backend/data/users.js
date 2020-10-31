import bcrypt from 'bcryptjs';

const users = [
  {
    name:  'Admin User',
    email: 'admin@proshop.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name:  'Punisher',
    email: 'punisher@proshop.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name:  'Daredevil',
    email: 'daredevil@proshop.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
