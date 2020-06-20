import React, { CSSProperties, RefObject } from 'react';
import './index.scss';


const scriptElem = document.createElement("script");
scriptElem.src = "//at.alicdn.com/t/font_1891915_ndgr420z3gq.js";
document.body.appendChild(scriptElem);

interface IPropsTypes {
  className?: string;
  type: string;
  style?: object;
  svgRef?: RefObject<SVGSVGElement>;
  clickEvent?: (T: any) => void;
}


export const IconFont = (props: IPropsTypes) => {
  const { className, type, style, svgRef, clickEvent } = props
  return (
    <svg
      ref={svgRef}
      className={className ? "icon-font " + className : "icon-font"}
      aria-hidden="true"
      style={style as CSSProperties}
      onClick={clickEvent}
    >
      <use xlinkHref={`#${type}`} />
    </svg>
  )
};

export default IconFont;