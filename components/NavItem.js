const NavItem = ({href, text}) => (
  <li>
    <a 
      href={href}
      className="text-sm font-bold text-gray-700 px-2 py-1 hover:bg-gray-300 rounded transition-colors duration-300"
    >
      {text}
    </a>
  </li>
)

export default NavItem;