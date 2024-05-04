import "bootstrap/dist/css/bootstrap.min.css";
// import Swiper styles
import "swiper/css";

import "./App.css";
import Banner from "./pages/Banner/Banner";
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";
import Trend from "./pages/Trend/Trend";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Main />
    </>
  );
}

export default App;
