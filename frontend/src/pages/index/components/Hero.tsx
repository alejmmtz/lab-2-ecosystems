import { useState } from "react";

export default function Hero() {
  const quotes = [
    "“That's what she said!” - Michael Scott",
    "“The truth is out there.” - Fox Mulder",
    "“Bazinga!” - Sheldon Cooper",
    "“Everybody lies.” - Dr. House",
    "“It keeps going and going and going …” - Energizer Ad",
    "“Oh, my God! They killed Kenny!” - Stan & Kyle",
    "“Suit Up!” - Barney Stinson",
  ];

  const [randomQuote] = useState(
    () => quotes[Math.floor(Math.random() * quotes.length)],
  );

  return (
    <div>
      <div className="bg-blue flex justify-center items-center transition-all duration-700">
        <svg
          className="w-18 h-18 fill-white shrink-0"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16,6.204l-5.528-0.803L8,0.392L5.528,5.401L0,6.204l4,3.899l-0.944,5.505L8,13.009l4.944,2.599L12,10.103L16,6.204z" />
        </svg>
        <h2 className="text-[200px] text-center scale-x-50 whitespace-nowrap shrink-0 text-white leading-none -mx-70 -mb-5">
          AWKWARDLY SOCIAL
        </h2>
        <svg
          className="w-18 h-18 fill-white shrink-0"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16,6.204l-5.528-0.803L8,0.392L5.528,5.401L0,6.204l4,3.899l-0.944,5.505L8,13.009l4.944,2.599L12,10.103L16,6.204z" />
        </svg>
      </div>
      <div className="w-full flex px-12 pt-12 ">
        <div className="w-1/3 mr-8 border-r-2 border-dashed border-blue">
          <h2 className="text-blue text-4xl  ">Welcome to Awkwardly social!</h2>
          <p className="font-medium">
            // hello, world! <br /> // this is the{" "}
            <span className="font-bold"> AwkwardlySocial </span>
            forum,
            <br /> // a public archive of internet users' thoughts.
          </p>
        </div>

        <div className="bg-green w-2/3 flex justify-center relative items-center border-2 border-dashed border-blue">
          <h2 className="text-blue text-5xl p-8">
            {randomQuote || "TODAY IS A GOOD DAY TO BE AWKWARD"}
          </h2>
        </div>
      </div>
    </div>
  );
}
