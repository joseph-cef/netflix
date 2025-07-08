import React from 'react';

function Reasons() {
  const reasons = [
    {
      title: "Enjoy on your TV",
      description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
    },
    {
      title: "Download your shows to watch offline",
      description: "Save your favorites easily and always have something to watch."
    },
    {
      title: "Watch everywhere",
      description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
    },
    {
      title: "Create profiles for kids",
      description: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black p-4 md:p-10">
      <div className="font-bold text-2xl md:text-3xl mb-5 text-center md:text-left">
        More Reasons to Join
      </div>

      <div className="flex flex-col gap-13 lg:flex-row lg:flex-wrap lg:justify-center ">
        {reasons.map((reason, index) => (
          <div 
            key={index} 
            className="w-full lg:w-[400px] p-6 md:p-8 bg-gradient-to-br from-cyan-800 to-fuchsia-950 rounded-2xl"
          >
            <div className="font-bold text-xl md:text-2xl">
              {reason.title}
            </div>
            <div className="text-sm md:text-base">
              {reason.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reasons;