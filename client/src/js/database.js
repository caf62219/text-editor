import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
try {
  //create a connection to the database
  const jatedb = await openDB('jate', 1);

  //create a new transation and specify the database and data privileges
  const tx = jatedb.transaction('jate', 'readwrite');

  //open up the desired object store
  const store = tx.objectStore('jate');

  // use the .add() method to add the data to the object store
  const request = store.add({jate: content});

  const result = await request;

  console.log('Data saved to the database', result);
} catch {
console.error('putDb not implemented');
}
}
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try{
    //create a connection to the database
  const jatedb = await openDB('jate', 1);

  //create a new transation and specify the database and data privileges
  const tx = jatedb.transaction('jate', 'readonly');

  //open up the desired object store
  const store = tx.objectStore('jate');

  // use the .getAll() method to get all the data from the object store
  const request = store.getAll();

  //return the data
  const result = await request;
  console.log('Data retrieved from the database', result);
  } catch {
    console.error('getDb not implemented')
  }
  
};
  
initdb();
