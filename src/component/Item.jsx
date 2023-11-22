import { useEffect, useState } from "react";
import EditItem from "./EditItem";
import ShowItem from "./ShowItem";
import { useDispatcList, ACTIONTYPE } from "./ListProvider";

function Item({ item, onTriggerAlertDelete }) {
  //   console.log(onTriggerAlertDelete);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatcList();

  function handleChangeItem(text) {
    dispatch({
      type: ACTIONTYPE.CHANGE,
      newItem: {
        id: item.id,
        name: text,
        isDone: item.isDone,
      },
    });

    setIsEdit(false);
  }
  return (
    <li className="flex items-center gap-4">
      {!isEdit && (
        <ShowItem
          item={item}
          onTriggerAlertDelete={onTriggerAlertDelete}
          onTriggerChange={() => setIsEdit(true)}
        />
      )}

      {isEdit && <EditItem item={item} onChangeItem={handleChangeItem} />}
    </li>
  );
}

export default Item;
