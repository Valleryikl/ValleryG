import axios from "axios";
import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    axios.get("http://localhost:8000/api/test")
      .then(res => {
        setMessage(res.data.message);
      })
      .catch(err => {
        console.error("Ошибка при запросе:", err);
      });
  }, []);
  return (
    <div>{message}</div>
  );
}

export default App;

