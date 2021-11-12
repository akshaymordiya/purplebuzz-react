import './App.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store';
import Routes from './routes';
import { Suspense } from 'react';
import { ThemeProvider } from '@mui/material';
import globleTheme from "./components/UI/themes/globle.theme";
import Navbar from './components/UI/navbar';
import Footer from './components/UI/footer';
import Loading from './components/UI/loading';

function App() {
  return (
      <Suspense fallback={<Loading />}>
        <Provider store={store}>
          <ThemeProvider theme={globleTheme}>
            <Router>
              <Navbar />
                <Switch>
                  <Routes />
                  {/* <Route path="*" exact component={(<p>You are Lost at somewhere</p>)} /> */}
                </Switch>
              <Footer />
            </Router>
          </ThemeProvider>
        </Provider>
      </Suspense>
  );
}

export default App;
