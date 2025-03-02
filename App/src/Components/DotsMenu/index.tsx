import { useState } from "react";
import { PiDotsThree } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";
import "./DotsMenu.scss";
import { EditButton } from "./EditButton";
import { TrashButton } from "./TrashButton";

export const DotsMenu = ({ className }: { className: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleDropdown() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <a
        onClick={toggleDropdown}
        className={`${className} bg-transparent border-0 component-dotsbutton`}
        >
        {isMenuOpen ?
            <>
                <AiOutlineClose className="text-white fs-3" />
                <div className="component-dotsmenu text-white p-2 d-flex flex-column gap-2">
                    <EditButton/>
                    <TrashButton/>
                </div>
            </> 
            :
            <PiDotsThree className="text-white fs-1" />

        }
    </a>
  );
};
