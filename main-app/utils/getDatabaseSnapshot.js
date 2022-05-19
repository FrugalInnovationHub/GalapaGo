import { ref, onValue } from "firebase/database";

getDatabaseSnapshot = (database) => {
  return new Promise((resolve, reject) => {
    const starCountRef = ref(database);
    try {
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      });
    } catch (error) {
      reject(error);
    }
  });
};

export default getDatabaseSnapshot;
