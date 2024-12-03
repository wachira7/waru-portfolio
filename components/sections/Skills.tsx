import ProgressBar from '@/components/ui/ProgressBar'
import CircularProgress from '@/components/ui/CircularProgress'

const CODING_SKILLS = [
  { label: 'TypeScript', percentage: 55 },
  { label: 'JavaScript', percentage: 80 },
  { label: 'CSS', percentage: 85 },
  { label: 'HTML', percentage: 90 },
  { label: 'SQL', percentage: 65 },
  { label: 'Python', percentage:80}
]

const TECHNOLOGIES = [
  { label: 'Next.js', percentage: 70 },
  { label: 'Node.js', percentage: 50 },
//   { label: 'Express.js', percentage: 50 },
  { label: 'React.js', percentage: 90 },
  { label: 'Tailwind CSS', percentage: 85 },
  { label: 'Flask', percentage: 75 },
  { label: 'PostgreSQL', percentage: 80 },
]

const Skills = () => {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Coding Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Coding Skills</h3>
            <div className="space-y-4">
              {CODING_SKILLS.map((skill) => (
                <ProgressBar 
                  key={skill.label}
                  label={skill.label}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Technologies */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {TECHNOLOGIES.map((tech) => (
                <CircularProgress
                  key={tech.label}
                  label={tech.label}
                  percentage={tech.percentage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills