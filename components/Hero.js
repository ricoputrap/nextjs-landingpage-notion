const Hero = () => (
  <div className="text-center md:text-left md:flex max-w-3xl mx-auto mt-24 space-x-3">
    <h1 className="font-bold text-6xl leading-tight">All-in-one workspace</h1>
    <div className="space-y-3">
      <p className="text-xl font-light">Write, plan, collaborate, and get organized. Notion is all you need - in one tool.</p>
      <form 
        onSubmit={e => {
          e.preventDefault();
          console.log("TODO on submit form");
        }}
        className="space-x-3"
      >
        <input 
          type="email" 
          placeholder="Enter your email..."
          className="bg-white border border-gray-300 rounded p-2" 
        />
        <button 
          type="submit"
          className="bg-red-400 px-3 py-2 rounded text-white"
        >
          Get Started
        </button>
      </form>
      <p className="text-sm text-gray-400">For teams & individuals - web, mobile, Mac, Windows.</p>
    </div>
    
  </div>
)

export default Hero;