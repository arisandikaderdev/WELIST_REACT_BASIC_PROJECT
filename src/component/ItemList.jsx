import { useState } from "react";
import AlertDelete from "./AlertDelete";
import Item from "./Item";
import { ACTIONTYPE, useDispatcList, useList } from "./ListProvider";

function ItemList() {
  const [triggerAlertDelete, setTriggerAlertDelete] = useState(false);
  const [itemId, setItemId] = useState();

  const items = useList();
  const dispatch = useDispatcList();

  const list = items.map((item) => (
    <Item
      key={item.id}
      item={item}
      onTriggerAlertDelete={(id) => {
        setTriggerAlertDelete(true);
        setItemId(id);
      }}
    />
  ));

  return (
    <>
      <ul className="mx-auto mt-4 flex w-[90%] max-w-screen-lg flex-col gap-4">
        {list}
      </ul>
      {triggerAlertDelete && (
        <AlertDelete
          onClose={() => setTriggerAlertDelete(false)}
          onDelete={() => {
            console.log(itemId);
            dispatch({
              type: ACTIONTYPE.DELETE,
              id: itemId,
            });
            setTriggerAlertDelete(false);
          }}
        />
      )}
    </>
  );
}

export default ItemList;
