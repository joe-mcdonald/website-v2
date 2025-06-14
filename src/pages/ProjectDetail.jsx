import { useParams } from 'react-router-dom';
import projects from '../data/projects';


export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="text-[#0f172a] dark:text-white font-sans text-center mt-12">Project not found.</div>;
  }

  return (
    <div className="bg-weave bg-white dark:bg-[#0a1e40] mx-auto flex items-center justify-center px-4 pt-24 pb-64">
        <div className="flex justify-center py-20 bg-[#e2e8f0] dark:bg-[#071736] rounded-xl shadow-lg">
          <div className="max-w-4xl w-full mx-4 px-6 rounded-xl">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
              {/* Left: Image */}
              <div className="w-2/3 md:w-1/4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-lg w-full object-cover"
                />
              </div>

              {/* Right: Content */}
              <div className="w-full md:w-1/2 text-[#0f172a] dark:text-white">
                <h1 className="text-4xl font-bold font-sans text-[#0f172a] dark:text-white mb-4">{project.title}</h1>
                <p className="text-m font-sans text-[#0f172a] dark:text-gray-400 mb-2">Published on <strong>{project.date}</strong></p>
                {project.link && (
                  <p className="text-m font-sans text-[#0f172a] dark:text-gray-400 mb-2">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      View on GitHub
                    </a>
                  </p>
                )}
                
              </div>
            </div>
            <div className="h-1 w-full my-6"></div>
            <pre className="text-lg text-[#0f172a] dark:text-gray-200 leading-relaxed whitespace-pre-wrap font-sans">
              {project.content}
            </pre>
          </div>
      </div>
    </div>
  );

}
