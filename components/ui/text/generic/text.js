export const Text = ({ attr, style = {} }) => (attr.text) && <span className="ow-text" style={{ ...style }}>{ attr.text }</span>;