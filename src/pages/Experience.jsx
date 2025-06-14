import { FaLinkedin, FaGithub, FaEnvelopeOpen} from 'react-icons/fa';

export default function Experience() {
  const jobs = [
    {
      title: "Software Developer Intern",
      company: "CanAssist",
      date: "May 2024 – Aug 2024",
      description:
        "Rebuilt their CanPlan app, an app that helps people with cognitive disabilities perform daily tasks. The app was rebuilt using Flutter with both iOS and Android support. Also managed all development deadlines as the sole developer of the app during that work term.",
    },
    {
      title: "Software Developer Intern",
      company: "Lantronix Inc.",
      date: "May 2023 – Aug 2023",
      description:
        "Performed automated and manual testing, scripting and debugging for a car infotainment system product.",
    },
    {
      title: "Software Test Engineer",
      company: "Corvus Energy",
      date: "Sept 2022 – Dec 2022",
      description:
        "Designed Python test scripts for their Blue Whale marine energy storage system. Also designed 3D printable parts for their hardware test benches.",
    },
    {
      title: "Junior Software Developer",
      company: "STR SpeechTech",
      date: "Jan 2022 – Apr 2022",
      description:
        "Helped with the .NET development and maintenance of their flagship StarCaster software. Also experimented with voice cloning software in a side project.",
    },
  ];

  return (
    <section className="w-full bg-[#e2e8f0] dark:bg-[#050a23] py-8 px-6 text-[#0f172a] dark:text-white flex flex-col items-center max-w-6xl shadow-lg">
      <h2 className="text-3xl font-bold font-sans text-[#0f172a] dark:text-white mb-12">My Experience</h2>
      <div className="relative border-l-2 border-gray-400 dark:border-blue-400 pl-6">
        {jobs.map((job, index) => (
          <div key={index} className="mb-12 pl-8 relative">
            <div className="absolute left-0 top-1.5 w-3 h-3 bg-gray-400 dark:bg-blue-400 rounded-full" />

            <h3 className="text-xl font-bold font-sans text-[#0f172a] dark:text-white">{job.title}</h3>
            <p className="font-sans text-[#0f172a] dark:text-white text-sm mb-1">
            <span className="font-medium font-sans text-[#0f172a] dark:text-white">{job.company}</span> • {job.date}
            </p>
            <p className="font-sans text-[#0f172a] dark:text-white">{job.description}</p>
        </div>
        ))}
      </div>
    </section>
  );
}
