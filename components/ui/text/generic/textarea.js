export const Textarea = ({ attr, style = {} }) => (attr.textarea) && <p className="ow-text ow-textarea" style={{ ...style }}>{ attr.textarea }</p>;