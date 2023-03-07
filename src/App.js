import { ProSidebarProvider } from "react-pro-sidebar";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./scenes/Home/Home";
import React from "react";
import Providers from "./scenes/Providers/Providers";
import Login from "./scenes/Login/Login";
import Register from "./scenes/Register/Register";
import PrivateRoutes from "./services/config/PrivateRoute";
import Menu from "./components/Menu/Menu";
import Myapplication from "./scenes/Myapplication/MyApplication";
import Footer from "./components/Footer/Footer";
const Services = React.lazy(() => import("./scenes/Services/Services"));
const Topics = React.lazy(() => import("./scenes/Topics/Topics"));

function App() {
  const [progress, setProgress] = React.useState(0);
  const [showMenu, setshowMenu] = React.useState(false);

  return (
    <div className="App">
      <Navbar setshowMenu={() => setshowMenu(!showMenu)} />
      {showMenu && <Menu />}
      <main>
        <Suspense
          fallback={
            <LoadingBar
              color="#1cbe8e"
              progress={99}
              height={4}
              loaderSpeed={4000}
              onLoaderFinished={() => setProgress(0)}
            />
          }
        >
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/Services" element={<Services />} />
              <Route path="/Topics" element={<Topics />} />
              <Route path="/providers" element={<Providers />} />
              <Route
                path="/myapplication/*"
                element={
                  <ProSidebarProvider>
                    <Myapplication />
                  </ProSidebarProvider>
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
