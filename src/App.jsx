import { useEffect, useState } from "react";
import Header from "./component/Header";
import "./App.css";
import { initialList } from "./data";
import ItemList from "./component/ItemList";
import ListProvider from "./component/ListProvider";

function App() {
  return (
    <>
      <ListProvider>
        <Header />
        <ItemList />
      </ListProvider>
    </>
  );
}

export default App;
