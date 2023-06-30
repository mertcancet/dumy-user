import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 14"
    {...props}
  >
    <g clipPath="url(#search_svg__a)">
      <path
        fill="#C4C4C4"
        d="M13.904 13.169 10.377 9.64a.325.325 0 0 0-.232-.095h-.282A5.687 5.687 0 0 0 5.688 0 5.687 5.687 0 0 0 0 5.687a5.687 5.687 0 0 0 9.546 4.179v.279c0 .087.035.17.095.232l3.528 3.527a.329.329 0 0 0 .465 0l.27-.27a.329.329 0 0 0 0-.465ZM5.688 10.5A4.81 4.81 0 0 1 .875 5.687 4.81 4.81 0 0 1 5.688.875 4.81 4.81 0 0 1 10.5 5.688 4.81 4.81 0 0 1 5.687 10.5Z"
      />
    </g>
    <defs>
      <clipPath id="search_svg__a">
        <path fill="#fff" d="M0 0h14v14H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSearch;
