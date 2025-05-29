// CSS as a string for use in JavaScript
const styles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f2f3f7;
  color: #333;
}
`;

// Example: inject styles into the document (browser environment)
if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.textContent = styles;
  document.head.appendChild(styleTag);
}

