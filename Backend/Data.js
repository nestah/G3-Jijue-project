import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'phestus',
      email: 'phestuskitsao@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      
    },
    {
      name: 'Jane',
      email: 'janedoe@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
     
    },
    
  ],
 
};
export default data;
