import { cloneElement, useState, useEffect } from "react";

export const SVG = ({
  style = {},
  fill = 'currentColor',
  width = '100%',
  className = '',
  height,
  viewBox = '0 0 32 32',
  children
}) =>
  <svg
    width={width}
    style={style}
    height={height ? height : width}
    viewBox={viewBox}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {cloneElement(children, {
      fill
    })}
  </svg>;

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    setSize([window.innerHeight, window.innerWidth]);
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    // Clean up!
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

export const useViewportWidth = () => {
  return useWindowSize()[1];
};

export const useViewportWidthSize = () => {
  const width = useViewportWidth();
  return { // the width is greater than
    widthIGT768: width > 768
  }
}