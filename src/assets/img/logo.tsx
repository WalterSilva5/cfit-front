export const Logo = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="375mm"
    height="210mm"
    viewBox="0 0 375 210"
    {...props}
  >
    <text
      xmlSpace="preserve"
      x={49.305}
      y={175.121}
      style={{
        fontSize: "136.223px",
        fill: "#000",
        strokeWidth: 11.3519,
        ...props.sx,
      }}
      transform="matrix(1.29249 0 0 1.40856 -66.508 -68.65)"
    >
      <tspan
        x={49.305}
        y={175.121}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 700,
          fontStretch: "normal",
          fontFamily: "arial",
          strokeWidth: 11.3519,
        }}
      >
        {"C"}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      x={118.673}
      y={193.83}
      style={{
        fontSize: "111.991px",
        fill: "#000",
        strokeWidth: 9.33256,
      }}
      transform="matrix(1.53627 0 0 1.18504 -66.508 -68.65)"
    >
      <tspan
        x={118.673}
        y={193.83}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 700,
          fontStretch: "normal",
          fontFamily: "arial",
          strokeWidth: 9.33256,
        }}
      >
        {"FIT"}
      </tspan>
    </text>
  </svg>
)
export default Logo
