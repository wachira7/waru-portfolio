interface CircularProgressProps {
    percentage: number;
    label: string;
  }
  
  const CircularProgress = ({ percentage, label }: CircularProgressProps) => {
    const circumference = 2 * Math.PI * 40; // radius = 40
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
    return (
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24">
          <svg className="transform -rotate-90 w-24 h-24">
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-dark-light"
            />
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="text-primary transition-all duration-500"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
            {percentage}%
          </span>
        </div>
        <span className="mt-2 text-sm text-gray-300">{label}</span>
      </div>
    )
  }
  
  export default CircularProgress