import { cloneElement } from "react";

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