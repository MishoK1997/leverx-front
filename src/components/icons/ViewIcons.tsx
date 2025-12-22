import React from "react";

export const GridIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <path d="M928 1024h-288a96 96 0 0 1-96-96v-288a96 96 0 0 1 96-96h288a96 96 0 0 1 96 96v288a96 96 0 0 1-96 96z m32-384a32 32 0 0 0-32-32h-288a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h288a32 32 0 0 0 32-32v-288z m-32-160h-288a96 96 0 0 1-96-96V96a96 96 0 0 1 96-96h288a96 96 0 0 1 96 96v288a96 96 0 0 1-96 96z m32-384a32 32 0 0 0-32-32h-288a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h288a32 32 0 0 0 32-32V96zM384 1024H96a96 96 0 0 1-96-96v-288a96 96 0 0 1 96-96h288a96 96 0 0 1 96 96v288a96 96 0 0 1-96 96z m32-384a32 32 0 0 0-32-32H96a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h288a32 32 0 0 0 32-32v-288z m-32-160H96a96 96 0 0 1-96-96V96a96 96 0 0 1 96-96h288a96 96 0 0 1 96 96v288a96 96 0 0 1-96 96z m32-384a32 32 0 0 0-32-32H96a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h288a32 32 0 0 0 32-32V96z" />
  </svg>
);

export const ListIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19 4a1 1 0 01-1 1H7a1 1 0 010-2h11a1 1 0 011 1zM4 4a1 1 0 01-1 1H2a1 1 0 010-2h1a1 1 0 011 1zm15 6a1 1 0 01-1 1H7a1 1 0 110-2h11a1 1 0 011 1zM4 10a1 1 0 01-1 1H2a1 1 0 110-2h1a1 1 0 011 1zm14 7a1 1 0 100-2H7a1 1 0 100 2h11zM3 17a1 1 0 100-2H2a1 1 0 100 2h1z"
    />
  </svg>
);
