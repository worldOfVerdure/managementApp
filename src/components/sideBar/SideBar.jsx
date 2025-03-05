// import svg here from assets folder.
import { useState } from "react";

export default function SideBar () {
  const [toggleSideBar, setToggleSideBar] = useState(false); //~Look up setting state that is based on previous state.

  function handleClick () {
    // change state here to have sidebar appear and disappear.
  }

  return (
    <>
      <button type="button" >
        <img alt="" src="" />
      </button>
      {/* Maybe use aside element? Maybe nav? */}
    </>
  );
}
