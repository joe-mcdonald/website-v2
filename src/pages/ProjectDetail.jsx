import { useParams } from 'react-router-dom';
import projects from '../data/projects';

``
export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="text-white font-sans text-center mt-12">Project not found.</div>;
  }

  return (
    <div className="flex justify-center py-20 bg-[#050a23]">
      <div className="max-w-4xl w-full mx-4 px-6 rounded-xl shadow-lg">
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
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-4xl font-bold font-sans mb-4">{project.title}</h1>
            <p className="text-m text-gray-400 font-sans mb-2">Published on <strong>{project.date}</strong></p>
          </div>
        </div>
        <div className="h-1 w-full my-6"></div>
        <pre className="text-lg text-gray-200 font-sans leading-relaxed whitespace-pre-wrap font-sans">
          {project.content}
        </pre>
      </div>
    </div>
  );

}
