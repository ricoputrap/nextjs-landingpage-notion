import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4">
      <div className="flex">
        <div className="inline-block h-6 w-6 rounded-full bg-gray-400" />
        <span className="ml-2">Notion</span>
      </div>
      <div className="hidden md:block ">
        <ul className="flex space-x-2">
          <NavItem href="/product" text="Product" />
          <NavItem href="/download" text="Download" />
          <NavItem href="/resources" text="Resources" />
          <NavItem href="/pricing" text="Pricing" />
          <NavItem href="/careers" text="Careers" />
          <NavItem href="/login" text="Log in" />
          <NavItem href="/signup" text="Sign up" />
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;