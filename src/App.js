import React, { useState, useEffect } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layot/Main";
import Placeinfo from "./Pages/Placeinfo";
import Carinfo from "./Pages/Carinfo/Carinfo";
import { loadState, saveState } from "./utils";
import DataContext from "./Datacontext/Datas";
import UserDettails from "./Pages/UserDettails/UserDettails";
import Payment from "./Pages/Payment/Payment";
import Thaks from "./Pages/Thaks";

function App() {
  const [data, setData] = useState(null);
  const [category, setCategory] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const initialState = loadState();
    if (initialState) {
      setData(initialState.data);
      setCategory(initialState.category);
      setUserInfo(initialState.userInfo);
    }
  }, []);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Placeinfo></Placeinfo>,
        },

        {
          path: "/car",
          element: <Carinfo></Carinfo>,
        },
        {
          path: "/userinfo",
          element: <UserDettails></UserDettails>,
        },
        {
          path: "/payment",
          element: <Payment></Payment>,
        },
        {
          path: "/thanks",
          element: <Thaks></Thaks>
        },
      ],
    },
  ]);

  // Save the state to localStorage whenever it changes
  useEffect(() => {
    saveState({ data, category, userInfo });
  }, [data, category, userInfo]);

  return (
    <div className="App">
      <DataContext.Provider value={{ data, setData, category, setCategory, userInfo, setUserInfo }}>
        <RouterProvider router={routes}></RouterProvider>
      </DataContext.Provider>
    </div>
  );
}

export default App;
