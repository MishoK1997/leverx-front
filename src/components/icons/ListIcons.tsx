import React from "react";

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
};

export const PhotoIcon = ({ className, style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 330 330" fill="#2c68f6">
    <path d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.982,0,165,0z M165,300 C90.561,300,30,239.44,30,165S90.561,30,165,30c74.439,0,135,60.561,135,135S239.439,300,165,300z" />
  </svg>
);

export const NameIcon = ({ className }: IconProps) => (
  <svg
    width="17px"
    height="17px"
    className={className}
    viewBox="0 0 24 24"
    fill="#2c68f6"
  >
    <path
      fillRule="evenodd"
      d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
    />
  </svg>
);

export const DeptIcon = ({ className, style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="#2c68f6">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 5V4C6 2.34315 7.34315 1 9 1H15C16.6569 1 18 2.34315 18 4V5H20C21.6569 5 23 6.34315 23 8V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V8C1 6.34315 2.34315 5 4 5H6ZM8 4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V5H8V4ZM19.882 7H4.11803L6.34164 11.4472C6.51103 11.786 6.8573 12 7.23607 12H11C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12H16.7639C17.1427 12 17.489 11.786 17.6584 11.4472L19.882 7ZM11 14H7.23607C6.09975 14 5.06096 13.358 4.55279 12.3416L3 9.23607V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V9.23607L19.4472 12.3416C18.939 13.358 17.9002 14 16.7639 14H13C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14Z"
    />
  </svg>
);

export const RoomIcon = ({ className, style }: IconProps) => (
  <svg
    width="14px"
    height="14px"
    className={className}
    style={style}
    viewBox="0 0 32 32"
    fill="#2c68f6"
  >
    <path d="M30 28.75h-2.779v-26.75c-0-0.69-0.56-1.25-1.25-1.25h-19.971c-0.69 0-1.25 0.56-1.25 1.25v0 26.75h-2.75c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h28c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM7.25 28.75v-25.5h17.471v25.5zM21.48 14.84c-0.138-0.057-0.299-0.089-0.467-0.089-0.349 0-0.665 0.141-0.894 0.37l0-0c-0.232 0.222-0.377 0.534-0.379 0.88v0c0.004 0.174 0.041 0.338 0.103 0.489l-0.003-0.009c0.066 0.157 0.161 0.291 0.279 0.4l0.001 0.001c0.219 0.234 0.529 0.38 0.874 0.38 0.002 0 0.005 0 0.007-0h-0c0.174-0.005 0.339-0.041 0.489-0.104l-0.009 0.003c0.3-0.143 0.537-0.379 0.676-0.671l0.004-0.009c0.058-0.142 0.094-0.306 0.1-0.477l0-0.002c-0.002-0.346-0.148-0.658-0.38-0.879l-0-0c-0.109-0.119-0.241-0.214-0.391-0.278l-0.007-0.003z" />
  </svg>
);

export const DepartmentIcon = ({
  className,
  style,
  fill = "#2c68f6",
}: IconProps) => (
  <svg
    width="15px"
    height="15px"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    style={style}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 5V4C6 2.34315 7.34315 1 9 1H15C16.6569 1 18 2.34315 18 4V5H20C21.6569 5 23 6.34315 23 8V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V8C1 6.34315 2.34315 5 4 5H6ZM8 4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V5H8V4ZM19.882 7H4.11803L6.34164 11.4472C6.51103 11.786 6.8573 12 7.23607 12H11C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12H16.7639C17.1427 12 17.489 11.786 17.6584 11.4472L19.882 7ZM11 14H7.23607C6.09975 14 5.06096 13.358 4.55279 12.3416L3 9.23607V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V9.23607L19.4472 12.3416C18.939 13.358 17.9002 14 16.7639 14H13C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14Z"
      fill={fill}
    />
  </svg>
);

export const BuildingIcon = ({
  className,
  style,
  stroke = "#2c68f6",
}: IconProps) => (
  <svg
    width="15px"
    height="15px"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    style={style}
  >
    <path
      d="M3 21H21"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 21V15V7C19 5.11438 19 4.17157 18.4142 3.58579C17.8284 3 16.8856 3 15 3H12H9C7.11438 3 6.17157 3 5.58579 3.58579C5 4.17157 5 5.11438 5 7V15V21"
      stroke={stroke}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M9 8L10 8"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 12L10 12"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 16L10 16"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 8L15 8"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 12L15 12"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 16L15 16"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DeskIcon = ({ className, style, fill = "#2c68f6" }: IconProps) => (
  <svg
    width="15px"
    height="15px"
    viewBox="0 0 16 16"
    fill="none"
    className={className}
    style={style}
  >
    <path
      fill={fill}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.884 1.762a.75.75 0 01.604.872L7.058 5h2.975l.479-2.634a.75.75 0 111.476.268L11.558 5h1.192a.75.75 0 010 1.5h-1.465l-.546 3h2.011a.75.75 0 010 1.5h-2.283l-.48 2.634a.75.75 0 11-1.475-.268L8.942 11H5.967l-.48 2.634a.75.75 0 11-1.475-.268L4.442 11H3.25a.75.75 0 010-1.5h1.465l.545-3H3.25a.75.75 0 010-1.5h2.283l.479-2.634a.75.75 0 01.872-.604zM9.214 9.5l.546-3H6.785l-.546 3h2.976z"
    />
  </svg>
);

export const DateIcon = ({ className, style, fill = "#2c68f6" }: IconProps) => (
  <svg
    width="15px"
    height="15px"
    viewBox="0 0 20 20"
    fill={fill}
    className={className}
    style={style}
  >
    <path d="M5.67326018,0 C6.0598595,0 6.37326018,0.31324366 6.37326018,0.699649298 L6.373,2.009 L13.89,2.009 L13.8901337,0.708141199 C13.8901337,0.321735562 14.2035343,0.00849190182 14.5901337,0.00849190182 C14.976733,0.00849190182 15.2901337,0.321735562 15.2901337,0.708141199 L15.29,2.009 L18,2.00901806 C19.1045695,2.00901806 20,2.90399995 20,4.00801605 L20,18.001002 C20,19.1050181 19.1045695,20 18,20 L2,20 C0.8954305,20 0,19.1050181 0,18.001002 L0,4.00801605 C0,2.90399995 0.8954305,2.00901806 2,2.00901806 L4.973,2.009 L4.97326018,0.699649298 C4.97326018,0.31324366 5.28666085,0 5.67326018,0 Z M1.4,7.742 L1.4,18.001002 C1.4,18.3322068 1.66862915,18.6007014 2,18.6007014 L18,18.6007014 C18.3313708,18.6007014 18.6,18.3322068 18.6,18.001002 L18.6,7.756 L1.4,7.742 Z M6.66666667,14.6186466 L6.66666667,16.284778 L5,16.284778 L5,14.6186466 L6.66666667,14.6186466 Z M10.8333333,14.6186466 L10.8333333,16.284778 L9.16666667,16.284778 L9.16666667,14.6186466 L10.8333333,14.6186466 Z M15,14.6186466 L15,16.284778 L13.3333333,16.284778 L13.3333333,14.6186466 L15,14.6186466 Z M6.66666667,10.6417617 L6.66666667,12.3078931 L5,12.3078931 L5,10.6417617 L6.66666667,10.6417617 Z M10.8333333,10.6417617 L10.8333333,12.3078931 L9.16666667,12.3078931 L9.16666667,10.6417617 L10.8333333,10.6417617 Z M15,10.6417617 L15,12.3078931 L13.3333333,12.3078931 L13.3333333,10.6417617 L15,10.6417617 Z M4.973,3.408 L2,3.40831666 C1.66862915,3.40831666 1.4,3.67681122 1.4,4.00801605 L1.4,6.343 L18.6,6.357 L18.6,4.00801605 C18.6,3.67681122 18.3313708,3.40831666 18,3.40831666 L15.29,3.408 L15.2901337,4.33697436 C15.2901337,4.72338 14.976733,5.03662366 14.5901337,5.03662366 C14.2035343,5.03662366 13.8901337,4.72338 13.8901337,4.33697436 L13.89,3.408 L6.373,3.408 L6.37326018,4.32848246 C6.37326018,4.7148881 6.0598595,5.02813176 5.67326018,5.02813176 C5.28666085,5.02813176 4.97326018,4.7148881 4.97326018,4.32848246 L4.973,3.408 Z" />
  </svg>
);

export const ManagerIcon = ({
  className,
  style,
  fill = "#2c68f6",
}: IconProps) => (
  <svg
    width="15px"
    height="15px"
    viewBox="0 0 24 24"
    className={className}
    style={style}
  >
    <path
      fill={fill}
      fillRule="evenodd"
      d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
    />
  </svg>
);

export const PhoneIcon = ({
  className,
  style,
  stroke = "#2c68f6",
}: IconProps) => (
  <svg
    width="15px"
    height="15px"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    style={style}
  >
    <path
      d="M12 18H12.01M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const EmailIcon = ({
  className,
  style,
  stroke = "#2c68f6",
}: IconProps) => (
  <svg
    width="15px"
    height="15px"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    style={style}
  >
    <path
      d="M15.8571 12C15.8571 14.1302 14.1302 15.8571 12 15.8571C9.86972 15.8571 8.14282 14.1302 8.14282 12C8.14282 9.86972 9.86972 8.14282 12 8.14282C14.1302 8.14282 15.8571 9.86972 15.8571 12ZM15.8571 12L15.8571 13.2857C15.8571 14.7059 17.0084 15.8571 18.4286 15.8571C19.3408 15.8571 20.1422 15.3821 20.5986 14.6658C20.8528 14.2671 21 13.7936 21 13.2857V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C13.9122 21 15.6851 20.4037 17.1429 19.3868"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SkypeIcon = ({
  className,
  style,
  fill = "#2c68f6",
  stroke = "#2c68f6",
}: IconProps) => (
  <svg
    width="15px"
    height="15px"
    viewBox="0 0 192 192"
    fill="none"
    className={className}
    style={style}
  >
    <path
      fill={fill}
      d="m85.681 30.802-3.8 4.643a6 6 0 0 0 4.731 1.284l-.93-5.927Zm-54.88 54.88 5.928.93a6 6 0 0 0-1.284-4.73l-4.643 3.8Zm75.518 75.516 3.799-4.643a5.998 5.998 0 0 0-4.73-1.284l.931 5.927Zm54.879-54.879-5.927-.931a5.998 5.998 0 0 0 1.284 4.73l4.643-3.799Zm-71.717-80.16A44.839 44.839 0 0 0 61 16v12a32.84 32.84 0 0 1 20.882 7.445l7.599-9.287ZM61 16c-24.853 0-45 20.147-45 45h12c0-18.225 14.775-33 33-33V16ZM16 61a44.84 44.84 0 0 0 10.158 28.481l9.287-7.6A32.84 32.84 0 0 1 28 61H16Zm20 35c0-3.198.25-6.333.73-9.388l-11.855-1.861A72.497 72.497 0 0 0 24 96h12Zm60 60c-33.137 0-60-26.863-60-60H24c0 39.764 32.236 72 72 72v-12Zm9.388-.729c-3.055.479-6.19.729-9.388.729v12c3.823 0 7.581-.299 11.249-.875l-1.861-11.854Zm-2.869 10.571A44.84 44.84 0 0 0 131 176v-12a32.844 32.844 0 0 1-20.882-7.445l-7.599 9.287ZM131 176c24.853 0 45-20.147 45-45h-12c0 18.225-14.775 33-33 33v12Zm45-45a44.84 44.84 0 0 0-10.158-28.481l-9.287 7.599A32.844 32.844 0 0 1 164 131h12Zm-20-35c0 3.198-.25 6.333-.729 9.388l11.854 1.861c.576-3.668.875-7.426.875-11.249h-12ZM96 36c33.137 0 60 26.863 60 60h12c0-39.764-32.236-72-72-72v12Zm-9.388.73A60.45 60.45 0 0 1 96 36V24c-3.823 0-7.58.299-11.25.875l1.862 11.854Z"
    />
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
      d="M115.091 67.778S107.455 62 96 62c-7.636 0-21 0-21 15.111C75 96 117 96 117 114.89 117 130 103.636 130 96 130c-11.454 0-19.09-5.778-19.09-5.778"
    />
  </svg>
);

export const CNumIcon = ({
  className,
  style,
  stroke = "#2c68f6",
}: IconProps) => (
  <svg
    width="15px"
    height="15px"
    viewBox="0 0 48 48"
    fill="none"
    className={className}
    style={style}
  >
    <path
      stroke={stroke}
      strokeWidth="3.216"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M40.5,5.5H7.5a2,2,0,0,0-2,2v33a2,2,0,0,0,2,2h33a2,2,0,0,0,2-2V7.5A2,2,0,0,0,40.5,5.5Z"
    />
    <path
      stroke={stroke}
      strokeWidth="3.216"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M29.1945,28.567a5.5585,5.5585,0,0,1-4.8284,2.8007h0a5.5606,5.5606,0,0,1-5.5606-5.56V22.1928a5.5606,5.5606,0,0,1,5.5606-5.56h0a5.5583,5.5583,0,0,1,4.8228,2.791"
    />
  </svg>
);

export const VisaIcon = ({
  className,
  style,
  stroke = "#2c68f6",
}: IconProps) => (
  <svg
    width="15px"
    height="15px"
    viewBox="0 0 48 48"
    fill="none"
    className={className}
    style={style}
  >
    <path
      stroke={stroke}
      strokeWidth="2.688"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M40.5,5.5H7.5a2,2,0,0,0-2,2v33a2,2,0,0,0,2,2h33a2,2,0,0,0,2-2V7.5A2,2,0,0,0,40.5,5.5Z"
    />
    <polyline
      stroke={stroke}
      strokeWidth="2.688"
      strokeLinecap="round"
      strokeLinejoin="round"
      points="29.561 16.632 24 31.368 18.439 16.632"
    />
  </svg>
);

export const WorldIcon = ({
  className,
  style,
  stroke = "#2c68f6",
}: IconProps) => (
  <svg
    width="15px"
    height="15px"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    style={style}
  >
    <path
      d="M19.5 6L18.0333 7.1C17.6871 7.35964 17.2661 7.5 16.8333 7.5H13.475C12.8775 7.5 12.3312 7.83761 12.064 8.37206V8.37206C11.7342 9.03161 11.9053 9.83161 12.476 10.2986L14.476 11.9349C16.0499 13.2227 16.8644 15.22 16.6399 17.2412L16.6199 17.4206C16.5403 18.1369 16.3643 18.8392 16.0967 19.5083L15.5 21"
      stroke={stroke}
    />
    <path
      d="M2.5 10.5L5.7381 9.96032C7.09174 9.73471 8.26529 10.9083 8.03968 12.2619L7.90517 13.069C7.66434 14.514 8.3941 15.9471 9.70437 16.6022V16.6022C10.7535 17.1268 11.2976 18.3097 11.0131 19.4476L10.5 21.5"
      stroke={stroke}
    />
    <circle cx="12" cy="12" r="9.5" stroke={stroke} />
  </svg>
);

export const BurgerIcon = ({
  className,
  style,
  stroke = "currentColor",
}: IconProps) => (
  <svg
    width="30px"
    height="30px"
    viewBox="0 0 24 24"
    color="currentColor"
    className={className}
    style={style}
  >
    <path
      d="M20 7L4 7"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M20 12L4 12"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M20 17L4 17"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const CloseIcon = ({
  className,
  style,
  stroke = "currentColor",
}: IconProps) => (
  <svg
    width="30px"
    height="30px"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    style={style}
  >
    <path
      d="M19 5L5 19M5 5L9.5 9.5M12 12L19 19"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const EditIcon = ({ className, style, fill = "#2c68f6" }: IconProps) => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    style={style}
  >
    <path
      d="M4.20999 20.5199C4.11375 20.521 4.01826 20.5029 3.92902 20.4669C3.83977 20.4308 3.75854 20.3775 3.68999 20.3099C3.61139 20.2323 3.55092 20.1383 3.51288 20.0346C3.47485 19.9308 3.4602 19.82 3.46999 19.7099L3.77999 15.8699C3.79328 15.6916 3.87156 15.5244 3.99999 15.3999L15.06 4.33995C15.6762 3.76286 16.4961 3.45361 17.34 3.47995C18.1784 3.48645 18.9828 3.81181 19.59 4.38995C20.1723 4.98795 20.5073 5.7839 20.5277 6.61837C20.5481 7.45284 20.2524 8.26421 19.7 8.88995L8.62999 19.9999C8.50609 20.1234 8.34386 20.201 8.16999 20.2199L4.27999 20.5699L4.20999 20.5199ZM5.20999 16.2599L4.99999 18.9999L7.73999 18.7499L18.64 7.82995C18.8525 7.57842 18.9884 7.27118 19.0314 6.94472C19.0745 6.61827 19.0229 6.28631 18.8828 5.9883C18.7428 5.69028 18.5201 5.43873 18.2413 5.26354C17.9625 5.08834 17.6393 4.99685 17.31 4.99995C17.0936 4.98621 16.8766 5.01633 16.6721 5.0885C16.4676 5.16067 16.2798 5.27341 16.12 5.41995L5.20999 16.2599Z"
      fill={fill}
    />
  </svg>
);

export const BackIcon = ({ className, style, fill = "#2c68f6" }: IconProps) => (
  <svg
    width="25px"
    height="25px"
    className={className}
    style={style}
    viewBox="0 0 1024 1024"
    fill={fill}
  >
    <path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" />
  </svg>
);

export const CopyIcon = ({
  className,
  style,
  fill = "currentColor",
}: IconProps) => (
  <svg
    className={className}
    width="13px"
    height="13px"
    style={style}
    viewBox="0 0 512 512"
    fill={fill}
  >
    <g>
      {" "}
      <path d="M109.4,66h218.7c17.6,0,32.4,12,36.7,28.2h24.5C384.6,64.6,358.9,42,328.1,42H109.4c-34.2,0-62,27.8-62,62 v230.5c0,31.2,23.2,57.1,53.2,61.4v-24.4c-16.7-4-29.2-19.1-29.2-37V104C71.4,83.1,88.4,66,109.4,66z"></path>{" "}
      <path d="M408,115.8c-1.8-0.2-224.1-0.2-224.1-0.2c-34.2,0-62,27.8-62,62c0,0,0.1,234,0.2,235.8 c2.7,31.7,29.4,56.7,61.8,56.7h218.7c34.2,0,62-27.8,62-62V177.5C464.6,145.2,439.7,118.5,408,115.8z M440.6,408 c0,20.9-17,38-38,38H183.9c-21,0-38-17.1-38-38V177.5c0-21,17-38,38-38h218.7c21,0,38,17,38,38V408z"></path>{" "}
    </g>
  </svg>
);

export const LogoutIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="svg-icon log-svg"
      viewBox="0 0 1024 1024"
      version="1.1"
      style={{
        verticalAlign: "middle",
        fill: "#ffffff",
        overflow: "hidden",
      }}
    >
      <path d="M768 106V184c97.2 76 160 194.8 160 328 0 229.6-186.4 416-416 416S96 741.6 96 512c0-133.2 62.8-251.6 160-328V106C121.6 190.8 32 341.2 32 512c0 265.2 214.8 480 480 480s480-214.8 480-480c0-170.8-89.6-321.2-224-406z" />
      <path d="M512 32c-17.6 0-32 14.4-32 32v448c0 17.6 14.4 32 32 32s32-14.4 32-32V64c0-17.6-14.4-32-32-32z" />
    </svg>
  );
};

export const QuestionMarkIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path d="M512 960c247.424 0 448-200.576 448-448S759.424 64 512 64 64 264.576 64 512s200.576 448 448 448z m0 64C229.216 1024 0 794.784 0 512S229.216 0 512 0s512 229.216 512 512-229.216 512-512 512z m-160-650.368h77.632c3.36-49.504 36.736-80.64 88.48-80.64 51.392 0 84.768 31.136 84.768 73.504 0 38.624-16.128 60.384-61.504 87.744-51.36 30.752-74.24 64.512-72.384 117.376l0.384 30.016h77.632v-22.88c0-38.624 13.856-58.496 62.24-87.008 49.504-29.632 78.752-70.496 78.752-128.64C688 282.88 621.248 224 522.24 224c-108.736 0-166.88 64.512-170.24 149.632z m156.736 401.6c28.16 0 49.504-20.992 49.504-48.352 0-27.392-21.376-48.384-49.504-48.384-27.36 0-49.12 20.992-49.12 48.384 0 27.36 21.76 48.384 49.12 48.384z" />
    </svg>
  );
};

export const SearchIcon = ({ className }: IconProps) => {
  return (
    <svg
      id="search-icon"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
    >
      <circle cx="10.5" cy="10.5" r="6.5" stroke="#999" fill="none" />
      <path d="M20 20L15 15" stroke="#999" strokeLinecap="round" />
    </svg>
  );
};
