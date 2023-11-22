import { createContext, useContext, useEffect, useReducer } from "react";
import { initialList } from "../data";

export const ListsContext = createContext(null);
export const DispatchListContext = createContext();

function ListProvider({ children }) {
  const fetchData = {
    currenlylists: initialList,
    lists: initialList,
  };
  const initialData = JSON.parse(localStorage.getItem("lists")) || fetchData;

  const [lists, dispatch] = useReducer(listReducer, initialData);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  return (
    <ListsContext.Provider value={lists.lists}>
      <DispatchListContext.Provider value={dispatch}>
        {children}
      </DispatchListContext.Provider>
    </ListsContext.Provider>
  );
}

export function useList() {
  return useContext(ListsContext);
}

export function useDispatcList() {
  return useContext(DispatchListContext);
}

function listReducer(state, action) {
  switch (action.type) {
    case ACTIONTYPE.ADD: {
      const list = {
        id: state.currenlylists.length + 1,
        name: action.text,
        isDone: false,
      };

      const newLists = [...state.currenlylists, list];

      return {
        currenlylists: newLists,
        lists: newLists,
      };
    }

    case ACTIONTYPE.DELETE: {
      const deletelist = state.currenlylists.filter(
        (list) => list.id !== action.id
      );

      return {
        currenlylists: deletelist,
        lists: deletelist,
      };
    }

    case ACTIONTYPE.CHANGE: {
      const changeList = state.currenlylists.map((list) => {
        if (list.id === action.newItem.id) {
          return action.newItem;
        }

        return list;
      });

      return {
        currenlylists: changeList,
        lists: changeList,
      };
    }

    case ACTIONTYPE.CHECKLIST: {
      const changeList = state.currenlylists.map((list) => {
        if (list.id == action.id) {
          return { ...list, isDone: !list.isDone };
        }

        return list;
      });

      return {
        currenlylists: changeList,
        lists: changeList,
      };
    }

    case ACTIONTYPE.SEARCH: {
      const searchList = state.currenlylists.filter((list) =>
        list.name.includes(action.text)
      );

      return {
        ...state,
        lists: searchList,
      };
    }
  }
}

export const ACTIONTYPE = {
  ADD: "add_list",
  SEARCH: "search_list",
  DELETE: "delete_list",
  CHANGE: "change_list",
  CHECKLIST: "check_list",
};

export default ListProvider;
