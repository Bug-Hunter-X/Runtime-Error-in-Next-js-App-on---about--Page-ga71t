```javascript
// pages/aboutSolution.js
import fetch from 'node-fetch';

export async function getServerSideProps() {
  try {
    const res = await fetch('https://api.example.com/data');
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }
    const data = await res.json();
    return { props: { data } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        error: 'Failed to load data from the server. Please try again later.',
      },
    };
  }
}

export default function About({ data, error }) {
  if (error) {
    return <div><h1>{error}</h1></div>;
  }
  return (
    <div>
      <h1>About Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```