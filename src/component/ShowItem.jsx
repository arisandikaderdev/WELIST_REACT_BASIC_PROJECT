import x from "../assets/x.svg";
import checklist from "../assets/check.svg";
import write from "../assets/write.svg";
import trash from "../assets/trash3.svg";
import Button from "./Button";
import { ACTIONTYPE, useDispatcList } from "./ListProvider";

function ShowItem({ item, onTriggerAlertDelete, onTriggerChange }) {
  const dispatch = useDispatcList();
  return (
    <>
      {item.isDone && (
        <del className="bg-red h-max flex-1 rounded-md px-4 py-2 font-semibold text-white md:py-3 truncate">
          {item.name}
        </del>
      )}
      {!item.isDone && (
        <p className="bg-primary h-max flex-1 rounded-md px-4 py-2 font-semibold text-white md:py-3 truncate">
          {item.name}
        </p>
      )}
      <div className="flex gap-4">
        <Button
          classname="bg-red"
          onClick={() => onTriggerAlertDelete(item.id)}
        >
          <img src={trash} alt="trash" className=" w-5 md:w-7" />
        </Button>
        <Button
          classname={
            item.isDone
              ? "cursor-not-allowed bg-sky-300"
              : " bg-blue cursor-pointer"
          }
          disabled={item.isDone ? true : false}
          onClick={onTriggerChange}
        >
          <img src={write} alt="write" className=" w-5 md:w-7" />
        </Button>
        <Button
          classname={item.isDone ? "bg-red" : "bg-secondary"}
          onClick={() =>
            dispatch({
              type: ACTIONTYPE.CHECKLIST,
              id: item.id,
            })
          }
        >
          <img
            src={item.isDone ? x : checklist}
            alt="check"
            className=" w-5 md:w-7"
          />
        </Button>
      </div>
    </>
  );
}

export default ShowItem;
