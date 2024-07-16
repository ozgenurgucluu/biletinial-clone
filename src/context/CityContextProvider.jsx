import { createContext, useState } from "react";

export const CityContext = createContext({});

const CityContextProvider = ({ children }) => {

  const [city, setCity] = useState([]);
  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  )
}

export default CityContextProvider