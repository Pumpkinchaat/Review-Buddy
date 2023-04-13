import Home from './home';
import Footer from "./footer";
import Logo from "./logo";
import Review from "./review";
import Catalog from "./catalog";


function App() {
  let Comp;
  switch (window.location.pathname) {
    case '/':
      Comp = Home;
      break;
    case '/review':
      Comp = Review;
      break;
    case '/more':
      Comp = Catalog;
      break;
    default:
      break;
  }

  return (
    <>
      <Logo></Logo>
      <Comp></Comp>
      <Footer></Footer>
    </>
  );
}

export default App;
