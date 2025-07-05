import bannerBG from '../assets/bannerBG.jpg';

const Nav = () => {
  return (
    <>
      <div
        className="relative text-white min-h-screen"
        style={{
          backgroundImage: `url(${bannerBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
         <div className="absolute inset-0 bg-black/60 z-0"></div>

         <div className="relative z-10 px-8 py-5">
           <div className="flex justify-between items-center">
            <div
              className="text-5xl font-black text-red-600 tracking-wider italic"
              style={{ transform: 'skewX(-10deg)' }}
            >
              NETFLEX
            </div>
            <div className="flex items-center gap-3">
              <select className="border border-gray-500 px-3 py-1 text-white bg-black/50 backdrop-blur-sm rounded">
                <option className="text-black" value="English">
                  English
                </option>
                <option className="text-black" value="Arabic">
                  Arabic
                </option>
              </select>
              <button className="bg-red-600 hover:bg-red-700 transition px-5 py-1 rounded text-white">
                Sign In
              </button>
            </div>
          </div>

           <div className="py-28 flex flex-col items-center text-center space-y-6">
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
              Unlimited movies, TV <br /> shows and more.
            </h1>
            <p className="text-xl">Watch anywhere. Cancel anytime.</p>
            <p className="text-lg">
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-80 p-3 rounded-lg text-white bg-black/30 backdrop-blur-md border border-white/20 placeholder-white/70 shadow-md"
              />
              <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded text-white text-lg font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
