import { useState } from "react";

const Section = ({ title, discription,isVisible,setIsVisible}) => {
//   const [isVisiblee, setIsVisible] = useState(false);

  return (
    <div className="m-3 p-2 border border-black">
      <h1 className="font-bold">{title}</h1>
      {isVisible ? (
        <button
          className="px-2 my-1 bg-pink-300 rounded-sm"
          onClick={()=>setIsVisible()}
        >
          hide
        </button>
      ) : (
        <button
          className="px-2 my-1 mx-2 bg-pink-300 rounded-sm"
          onClick={() => setIsVisible()}
        >
          Show
        </button>
      )}
      {isVisible && <h4>{discription}</h4>}
    </div>
  );
};

const Instamart = () => {

    const [isVisibleSection,setisVisibleSection] = useState("");

    function handleVisibilityofSection(sectioName){
        if(isVisibleSection !== sectioName){
            setisVisibleSection(sectioName)
        }else{
            setisVisibleSection("");
        }
    }

  return (
    <>
      <h1 className="font-bold text-lg mt-3 p-1">Welcome to InstaMart</h1>
      <Section
        title={"About Instamart"}
        discription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible= {isVisibleSection === "about"}
        setIsVisible = {()=>handleVisibilityofSection("about")}
      />

      <Section
        title={"Team Instamart"}
        discription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible= {isVisibleSection === "team"}
        setIsVisible = {()=>handleVisibilityofSection("team")}
      />

      <Section
        title={"Careers Instamart"}
        discription={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible= {isVisibleSection === "careers"}
        setIsVisible = {()=>handleVisibilityofSection("careers")}
      />
    </>
  );
};

export default Instamart;
