interface ProgressBarProps {
    percentage: number;
    label: string;
  }
  
  const ProgressBar = ({ percentage, label }: ProgressBarProps) => {
    return (
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-300">{label}</span>
          <span className="text-sm text-primary">{percentage}%</span>
        </div>
        <div className="w-full bg-dark-light rounded-full h-2.5">
          <div 
            className="bg-primary h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    )
  }
  
  export default ProgressBar