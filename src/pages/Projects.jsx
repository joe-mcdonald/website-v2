import { Link } from 'react-router-dom';
import projects from '../data/projects.js';

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
      <h1 className="text-4xl font-bold font-sans text-white mb-10">Projects</h1>
      <div className="space-y-10">
        {projects.map((proj) => (
          <Link 
          to={`/projects/${proj.slug}`} 
          key={proj.slug} 
          className="block bg-[#050a23] p-6 rounded-lg hover:bg-[#050a33] transition">
            <h2 className="text-2xl font-sans font-semibold mb-2">{proj.title}</h2>
            <p className="text-sm font-sans text-gray-300 mb-2">{proj.summary}</p>
            <p className="text-sm font-sans text-gray-400">Published on <strong>{proj.date}</strong></p>
          </Link>
        ))}
      </div>
    </div>
  );
}
