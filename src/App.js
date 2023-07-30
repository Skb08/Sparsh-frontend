import { BrowserRouter } from 'react-router-dom'
import Router from './components/Navbar/Router';
import { Auth0Provider } from '@auth0/auth0-react';
function App() {
  return (
      <BrowserRouter>
        <Auth0Provider
          domain={process.env.DOMAIN}
          clientId={process.env.CLIENTID}
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >
          <Router/>
        </Auth0Provider>
      </BrowserRouter>   
  );
}

export default App;