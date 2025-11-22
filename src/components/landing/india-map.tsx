import { Banknote, Building, Briefcase, Tractor } from "lucide-react";

export default function IndiaMap() {
  const iconProps = {
    className: "text-primary drop-shadow-lg",
    strokeWidth: 1.5,
    size: 28
  };
  
  const iconWrapper = "absolute flex items-center justify-center h-16 w-16 rounded-full bg-card/70 backdrop-blur-sm shadow-lg border border-border";

  return (
    <div className="relative w-full max-w-2xl aspect-square">
      <svg
        viewBox="0 0 500 500"
        className="absolute inset-0 h-full w-full animate-fade-in"
        style={{ animationDelay: '0.5s' }}
      >
        {/* Glowing effect */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* India Map Path */}
        <path
          d="M260.5,10.5 C247,19.8 232.8,25.8 219.5,33.5 C201.2,42.7 181.9,49.2 165,58 C140.2,71.2 119.5,88.9 104.5,114.5 C90.5,138.6 82.2,165.7 81,194 C79.6,227.1 85,259.9 96.5,290.5 C107.8,320.7 125.7,347.8 148,369.5 C164.8,385.6 183.9,398.5 205.5,407 C224.5,414.5 244.7,419.6 265.5,422 C291.5,425 317,421.3 340.5,411.5 C363.8,401.8 384,386.4 400,367 C418.9,343.8 431.1,316.5 435.5,287.5 C440.4,255.4 437.9,222.6 427.5,192 C417.8,163.2 401.1,137.4 379,117.5 C358.1,98.6 332.6,85.8 305,80.5 C288.3,77.2 271.5,76.5 255.5,78.5 C240.2,80.4 225.5,85 212.5,92.5 C228.4,79.5 243.6,67.8 256.5,58 C276.5,43.5 293.7,31.7 308.5,22.5 C291.8,14.8 275.5,9.5 260.5,10.5 Z"
          fill="hsl(var(--primary) / 0.1)"
          stroke="hsl(var(--primary) / 0.5)"
          strokeWidth="2"
        />

        {/* Animated Hotspots */}
        {[
          { cx: 200, cy: 150 },
          { cx: 350, cy: 200 },
          { cx: 180, cy: 300 },
          { cx: 300, cy: 350 },
          { cx: 250, cy: 250 },
        ].map((p, i) => (
          <circle key={i} cx={p.cx} cy={p.cy} r="5" fill="hsl(var(--accent))" filter="url(#glow)">
            <animate
              attributeName="r"
              values="5;10;5"
              dur="3s"
              repeatCount="indefinite"
              begin={`${i * 0.5}s`}
            />
            <animate
              attributeName="opacity"
              values="1;0.5;1"
              dur="3s"
              repeatCount="indefinite"
              begin={`${i * 0.5}s`}
            />
          </circle>
        ))}
        
        {/* Animated connecting lines */}
        <path d="M50 80 Q 150 150 200 150" stroke="hsl(var(--accent))" fill="none" strokeWidth="1.5" strokeDasharray="5 5" className="opacity-70">
           <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite"/>
        </path>
         <path d="M450 80 Q 380 150 350 200" stroke="hsl(var(--accent))" fill="none" strokeWidth="1.5" strokeDasharray="5 5" className="opacity-70">
           <animate attributeName="stroke-dashoffset" from="0" to="10" dur="2s" repeatCount="indefinite"/>
        </path>
         <path d="M50 420 Q 120 350 180 300" stroke="hsl(var(--accent))" fill="none" strokeWidth="1.5" strokeDasharray="5 5" className="opacity-70">
           <animate attributeName="stroke-dashoffset" from="10" to="0" dur="2s" repeatCount="indefinite"/>
        </path>
         <path d="M450 420 Q 380 350 300 350" stroke="hsl(var(--accent))" fill="none" strokeWidth="1.5" strokeDasharray="5 5" className="opacity-70">
           <animate attributeName="stroke-dashoffset" from="0" to="10" dur="2s" repeatCount="indefinite"/>
        </path>
      </svg>
      
      {/* Floating Icons */}
      <div className={`${iconWrapper} top-[15%] left-[5%]`}>
        <Tractor {...iconProps} />
      </div>
      <div className={`${iconWrapper} top-[15%] right-[5%]`}>
        <Building {...iconProps} />
      </div>
      <div className={`${iconWrapper} bottom-[15%] left-[5%]`}>
        <Briefcase {...iconProps} />
      </div>
       <div className={`${iconWrapper} bottom-[15%] right-[5%]`}>
        <Banknote {...iconProps} />
      </div>
    </div>
  );
}
