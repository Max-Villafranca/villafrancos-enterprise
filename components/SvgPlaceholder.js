const SvgPlaceholder = ({ width = '100%', height = 200, text = 'Image Placeholder', bgColor = '#AAAAAA', textColor = '#333', borderColor = '#888' }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={`Placeholder: ${text}`}
    preserveAspectRatio="xMidYMid slice"
    focusable="false"
    style={{ display: 'block', background: bgColor, border: `1px solid ${borderColor}`, borderRadius: '4px' }}
  >
    <title>Placeholder: {text}</title>
    <rect width="100%" height="100%" fill={bgColor}></rect>
    <text x="50%" y="50%" fill={textColor} dy=".3em" textAnchor="middle" fontFamily="'Arial', sans-serif" fontSize="1rem" fontWeight="bold">
      {text}
    </text>
  </svg>
);

export default SvgPlaceholder;