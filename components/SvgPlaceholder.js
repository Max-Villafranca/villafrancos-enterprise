// components/SvgPlaceholder.js
const SvgPlaceholder = ({
  width = 100,
  height = 100,
  text = "Placeholder",
  bgColor = "#cccccc",
  textColor = "#333333",
  className = "" // Added className to allow external styling if needed
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className} // Apply className here
      aria-label={text}
    >
      <rect width="100%" height="100%" fill={bgColor} />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill={textColor}
        fontSize="16" // As per your component
        fontFamily="sans-serif"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgPlaceholder;