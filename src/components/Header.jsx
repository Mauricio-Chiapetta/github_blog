import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMicrochip
  } from "@fortawesome/free-solid-svg-icons";

export function Header(){
    return (
        <div className="bg-sky-950/50 py-20">
        <div className="container">
          <div className="flex items-center gap-2 justify-center mb-3">
            <h1 className="text-4xl font-light text-blue py-12">Github Viewer</h1>
            <FontAwesomeIcon
              icon={faMicrochip}
              className="text-blue w-10 h-10"
            />
          </div>
        </div>
      </div>
    )
}