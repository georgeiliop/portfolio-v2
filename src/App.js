import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Work from "./routes/work/Work";
import About from "./routes/about/About";
import Footer from "./components/footer/Footer";
import Extra from "./routes/extra/Extra";
import "./assets/global.scss";
const App = () => {
  return (
    <div className="app">
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={38}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
          borderRadius: "0px",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
          borderRadius: "0px",
        }}
      /> */}
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Work />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/extra" element={<Extra />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
