import Button from "./Button";

const Hero = () => (
  <div className="text-center md:text-left md:flex max-w-3xl mx-auto mt-12 md:mt-24 space-x-3">
    <h1 className="font-bold text-6xl leading-tight">All-in-one workspace</h1>
    <div className="space-y-3">
      <p className="text-xl font-light">Write, plan, collaborate, and get organized. Notion is all you need - in one tool.</p>
      <div className="md:hidden">
        <Button type="button">Download from App Store</Button>
      </div>
      <form 
        onSubmit={e => {
          e.preventDefault();
          console.log("TODO on submit form");
        }}
        className="space-x-3 hidden md:block"
      >
        <input 
          type="email" 
          placeholder="Enter your email..."
          className="bg-white border border-gray-300 rounded p-2" 
        />
        <Button type="submit">Get Started</Button>
      </form>
      <p className="text-sm text-gray-400">For teams & individuals - web, mobile, Mac, Windows.</p>
    </div>
    
  </div>
)

export default Hero;