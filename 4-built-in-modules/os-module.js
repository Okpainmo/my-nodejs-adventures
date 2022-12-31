const os = require('os');
const user = os.userInfo();
// const userCPU = os.cpus();

const currentOS = {
  type: os.type(),
  TotalMem: os.totalmem(),
  freeMem: os.freemem(),
  release: os.release(),
  uptime: os.uptime(),
};

// console.log(userCPU);
console.log(user);
console.log(currentOS);
