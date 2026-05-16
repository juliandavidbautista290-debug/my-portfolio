import { useEffect, useState } from "react";

function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div className="loader-container">
      <h1 className="loader-text">JULIÁN FRONTEND DEVELOPER</h1>
    </div>
  );
}

export default Loader;