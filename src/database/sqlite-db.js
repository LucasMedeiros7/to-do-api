import sqlite from 'sqlite3';
const bd = new sqlite.Database('./src/infra/database.db');

//Processamento de sinal
process.on('SIGINT', () =>
  bd.close(() => {
    console.log('BD encerrado!');
    process.exit(0);
  })
);

export default bd;
