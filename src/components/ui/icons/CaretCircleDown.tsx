import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCaretCircleDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <g clipPath="url(#caret-circle-down_svg__a)">
      <path
        fill="#C4C4C4"
        d="M17.719 9A8.717 8.717 0 0 0 9 .281 8.717 8.717 0 0 0 .281 9 8.717 8.717 0 0 0 9 17.719 8.717 8.717 0 0 0 17.719 9ZM9 16.594c-4.173 0-7.594-3.379-7.594-7.594 0-4.173 3.379-7.594 7.594-7.594 4.173 0 7.594 3.379 7.594 7.594 0 4.173-3.379 7.594-7.594 7.594Zm1.125-4.219L6.75 9l3.375-3.375v6.75Zm1.125-6.75c0-.998-1.213-1.505-1.92-.795L5.955 8.205c-.439.44-.439 1.154 0 1.593l3.375 3.375c.707.707 1.92.207 1.92-.794V5.625Z"
      />
    </g>
    <defs>
      <clipPath id="caret-circle-down_svg__a">
        <path fill="#fff" d="M18 0v18H0V0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCaretCircleDown;
