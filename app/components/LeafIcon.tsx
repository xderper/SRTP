interface LeafIconProps {
  className?: string;
  size?: number;
}

export default function LeafIcon({ className = "", size = 24 }: LeafIconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Tree leaf shape */}
      <path 
        d="M12 2C12 2 8 4 6 8C4 12 6 16 8 18C10 20 12 22 12 22C12 22 14 20 16 18C18 16 20 12 18 8C16 4 12 2 12 2Z" 
        fill="currentColor" 
        className="text-black"
      />
      
      {/* Main vein */}
      <path 
        d="M12 2L12 22" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round"
        className="text-green-200"
      />
      
      {/* Side veins */}
      <path 
        d="M12 6C10 7 8 8 7 10" 
        stroke="currentColor" 
        strokeWidth="1" 
        strokeLinecap="round"
        className="text-green-200"
      />
      
      <path 
        d="M12 6C14 7 16 8 17 10" 
        stroke="currentColor" 
        strokeWidth="1" 
        strokeLinecap="round"
        className="text-green-200"
      />
      
      <path 
        d="M12 10C10 11 8 12 7.5 14" 
        stroke="currentColor" 
        strokeWidth="1" 
        strokeLinecap="round"
        className="text-green-200"
      />
      
      <path 
        d="M12 10C14 11 16 12 16.5 14" 
        stroke="currentColor" 
        strokeWidth="1" 
        strokeLinecap="round"
        className="text-green-200"
      />
      
      <path 
        d="M12 14C10 15 8.5 16 8.5 17" 
        stroke="currentColor" 
        strokeWidth="1" 
        strokeLinecap="round"
        className="text-green-200"
      />
      
      <path 
        d="M12 14C14 15 15.5 16 15.5 17" 
        stroke="currentColor" 
        strokeWidth="1" 
        strokeLinecap="round"
        className="text-green-200"
      />
    </svg>
  );
} 