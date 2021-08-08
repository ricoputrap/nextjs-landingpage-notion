const Button = ({ type, children }) => (
  <button 
    type={ type }
    className="bg-red-400 hover:bg-red-500 transition-colors duration-300 px-3 py-2 rounded text-white"
  >
    { children }
  </button>
)

export default Button;