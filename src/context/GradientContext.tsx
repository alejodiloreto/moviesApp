import { createContext, useState } from "react";

interface ImageColors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: ImageColors;
  prevColors: ImageColors;
  setColors: React.Dispatch<React.SetStateAction<ImageColors>>;
  setPrevColors: React.Dispatch<React.SetStateAction<ImageColors>>;
}

export const GradientContext = createContext({} as ContextProps);

export const GradiendProvider = ({ children }: any) => {

  const [colors, setColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent'
  })

  const [prevColors, setPrevColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent'
  })

  return (
    <GradientContext.Provider value={{
      colors,
      prevColors,
      setColors,
      setPrevColors
    }}>
      {children}
    </GradientContext.Provider>
  )
}
