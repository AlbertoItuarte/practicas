import Cards from "./components/Cards.jsx";
import Features from "./components/Features.jsx";
import Banner from "./components/Banner.jsx";
import Comentarios from "./components/Comentarios.jsx";
import CardsPlan from "./components/CardPlan.jsx";

const App = () => {
  return (
    <div>
      <Banner />
      <Features />
      <Cards />
      <Comentarios />
      <CardsPlan />
    </div>
  );
};

export default App;
