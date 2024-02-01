// pages/about.js

import axios from 'axios';

const AboutPage = ({ data }) => {
  return (
    <div className="bg-rose-200 text-center p-8">
      About RKR
      {/* You can use the data fetched from the API here */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export async function getStaticProps() {
  try {
    // Fetch data from the API
    const response = await axios.get('http://localhost:3000');
    const data = response.data;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        data: null,
      },
    };
  }
}

export default AboutPage;
