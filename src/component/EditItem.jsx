import { useState } from "react";
import checklist from "../assets/check.svg";
import Button from "./Button";
import { ACTIONTYPE, useDispatcList } from "./ListProvider";

function EditItem({ item, onChangeItem }) {
  const [text, setText] = useState(item.name);
  const dispatch = useDispatcList();

  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="text-primary border-primary h-max flex-1 rounded-md border-2 border-solid bg-white px-4 py-2 font-semibold md:py-3"
      />

      <Button classname="bg-primary" onClick={() => onChangeItem(text)}>
        <img src={checklist} alt="save" className=" w-5 md:w-9" />
      </Button>
    </>
  );
}

export default EditItem;
