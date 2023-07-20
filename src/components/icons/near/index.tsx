import { SVGProps } from "react";
const IconNear = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path fill="#FEFEFE" d="M0 0h24v24H0V0Z" />
      <path fill="#1AC6A9" d="M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98L21 3Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default IconNear;