import {useEffect, useState} from 'react';

function useGetWindowWidth() {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updatedWindowWidth = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updatedWindowWidth);
    return () => window.removeEventListener("resize", updatedWindowWidth);
  }, []);

  return width;
};

export default useGetWindowWidth;
