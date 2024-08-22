import homeStyles from '../../styles/home.module.css';

import Layout from '../Layout.jsx';
import HubSpotSprocket from '../HubSpotSprocket';

function Home() {
  return (
    <Layout>
      <div className={homeStyles.logo}>
        <h1 className='mb-7'>Boilerplate Commit 123</h1>
        <HubSpotSprocket link={'https://hubspot.com'} />
      </div>
    </Layout>
  );
}

export default Home;
