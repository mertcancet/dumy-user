import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="m15 18-5.93-5.93a.1.1 0 0 1 0-.14L15 6"
    />
  </svg>
);
export default SvgArrowLeft;
