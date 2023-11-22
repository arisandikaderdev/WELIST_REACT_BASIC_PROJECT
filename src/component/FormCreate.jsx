import { useState } from "react";
import Button from "./Button";
import DialogBox from "./DialogBox";
import { ACTIONTYPE, useDispatcList, useList } from "./ListProvider";

function FormCreate({ handleClose, onAdd }) {
  const [text, setText] = useState("");

  const dispatch = useDispatcList();
  return (
    <DialogBox>
      <textarea
        className="bg-secondary min-h-[9rem] w-full rounded-md border-none px-4 py-2 text-white outline-none placeholder:text-white"
        placeholder="Type your List"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="flex justify-center gap-4 md:justify-start">
        <Button
          classname="bg-secondary"
          onClick={() => {
            dispatch({
              type: ACTIONTYPE.ADD,
              text: text,
            });
            handleClose();
          }}
        >
          Create
        </Button>
        <Button classname="bg-red" onClick={handleClose}>
          Cencel
        </Button>
      </div>
    </DialogBox>
  );
}

export default FormCreate;
