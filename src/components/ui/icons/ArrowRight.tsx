import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#9FA2B4"
      strokeLinecap="round"
      strokeWidth={2}
      d="m9 18 5.93-5.93a.1.1 0 0 0 0-.14L9 6"
    />
  </svg>
);
export default SvgArrowRight;
