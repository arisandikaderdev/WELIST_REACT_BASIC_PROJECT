import { useEffect, useState } from "react";
import Header from "./component/Header";
import "./App.css";
import { initialList } from "./data";
import ItemList from "./component/ItemList";

function App() {
  const initialLists = JSON.parse(localStorage.getItem("lists")) || initialList;

  const [currenlylists, setCurrenlyLists] = useState(initialLists);
  const [lists, setLists] = useState(currenlylists);
  let nextID = lists.length;

  function handleSearchList(text) {
    setLists(currenlylists.filter((list) => list.name.includes(text)));
  }

  function handleAddList(text) {
    const newList = {
      id: ++nextID,
      name: text,
      isDone: false,
    };

    setCurrenlyLists([...currenlylists, newList]);
  }

  function handleChecklist(id) {
    console.log("ok");
    const newLists = currenlylists.map((list) => {
      if (list.id == id) {
        return { ...list, isDone: !list.isDone };
      }

      return list;
    });
    setCurrenlyLists(newLists);
  }

  function handleDeleteList(id) {
    setCurrenlyLists(currenlylists.filter((list) => list.id !== id));
  }

  function handleChangelist(newList) {
    setCurrenlyLists(
      currenlylists.map((list) => {
        if (list.id === newList.id) {
          return newList;
        }

        return list;
      })
    );
  }

  useEffect(() => {
    setLists(currenlylists);
    localStorage.setItem("lists", JSON.stringify(currenlylists));
    // console.log(lists, currenlylists);
  }, [currenlylists]);

  useEffect(() => {
    console.log(lists);
  }, [lists]);
  return (
    <>
      <Header onAdd={handleAddList} onSearch={handleSearchList} />
      <ItemList
        items={lists}
        onChecklist={handleChecklist}
        onDelete={handleDeleteList}
        onChange={handleChangelist}
      />
    </>
  );
}

export default App;
