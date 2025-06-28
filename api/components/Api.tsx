import { useState, useEffect } from 'react';

function HelloFromApi() {
  const [message, setMessage] = useState('');
  const [menu, setMenu] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your actual mobile IP address
    fetch('http://127.0.0.1:8000/api/hello/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch API');
        }
        return response.json();
      })
      .then(data => {
        setMessage(data.message);
        setMenu(data.menu);  
      })
      .catch(error => setError(error.message));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Django API Test</h2>
      {message && <p>Message: <strong>{message}</strong></p>}
      {menu && <p>Menu: <strong>{menu}</strong></p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </div>
  );
}

export default HelloFromApi;