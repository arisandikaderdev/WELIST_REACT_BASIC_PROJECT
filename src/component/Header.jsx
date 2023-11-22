import logo from "../assets/loogo.png";
import SearchBar from "./SearchBar";
import Button from "./Button";
import FormCreate from "./FormCreate";
import { useState } from "react";
function Header() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleTriggerForm() {
    setIsFormOpen(!isFormOpen);
  }
  return (
    <header className=" bg-primary flex min-h-[20vh] flex-col items-center justify-between px-9 py-6 md:flex-row ">
      <img src={logo} alt="logo" className="mx-auto w-52 md:mx-0" />
      <div className="flex flex-col-reverse items-center gap-8 md:flex-row">
        <Button classname="bg-secondary" onClick={handleTriggerForm}>
          Create
        </Button>
        <SearchBar />
        {isFormOpen && <FormCreate handleClose={handleTriggerForm} />}
      </div>
    </header>
  );
}

export default Header;
