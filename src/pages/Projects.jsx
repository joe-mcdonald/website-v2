import { Link } from 'react-router-dom';
import projects from '../data/projects.js';

export default function Projects() {
  return (
    <div className="bg-weave bg-white dark:bg-[#0a1e40] flex items-center justify-center px-4 pt-24 pb-64">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold font-sans text-[#0f172a] dark:text-white mb-10 text-center">Projects</h1>
        <div className="space-y-10">
          {projects.map((proj) => (
            <Link 
              to={`/projects/${proj.slug}`} 
              key={proj.slug} 
              className="block bg-[#e2e8f0] dark:bg-[#071736] p-6 rounded-lg transition justify-center shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
            >
              <h2 className="text-2xl font-sans font-semibold text-[#0f172a] dark:text-white mb-2">{proj.title}</h2>
              <p className="text-sm font-sans text-gray-800 dark:text-gray-300 mb-2">{proj.summary}</p>
              <p className="text-sm font-sans text-gray-700 dark:text-gray-400">Published on <strong>{proj.date}</strong></p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
