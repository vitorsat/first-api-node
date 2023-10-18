import { sql } from './db.js'

// sql`DROP TABLE IF EXISTS videos;`.then(() => {
//   console.log('table dropped')
// })

sql`
CREATE TABLE videos (
  ID TEXT PRIMARY KEY,  
  title VARCHAR(255) NOT NULL,
  description TEXT,
  url VARCHAR(255)
);
`.then(() => {
  console.log('table created')
})