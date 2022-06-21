const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Your name please? ', (answer) => {
  
  console.log(`Have a great Day ${answer}`);

  rl.close();
});