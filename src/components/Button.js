const Button = ({ btnclass, btntype, text }) => {
  return (
  <button type={`${btntype}`} className={`${btnclass} font-monospace`}>  
    {text}
  </button>
  )
};

export default Button;
