import { FaLinkedin, FaGithub, FaEnvelopeOpen} from 'react-icons/fa';

export default function Experience() {
  const jobs = [
    {
      title: "Software Developer Intern",
      company: "CanAssist",
      date: "May 2024 – Aug 2024",
      description:
        "Led the redevelopment of CanPlan, a Flutter-based mobile accessibility app used by 4,000+ users on iOS and Android, with a large focus on accessibility-focused UI improvements. During this project I implemented features such as a scalable SQLite database, custom video recording, and task scheduling with push notifications. I also helped demonstrate other CanAssist technology during office visits and trade shows."
    },
    {
      title: "Software Developer Intern",
      company: "Lantronix Inc.",
      date: "May 2023 – Aug 2023",
      description:
        "Performed automated and manual testing, scripting and debugging for a car infotainment system product. Also collaborated with engineers to debug and resolve issues across software and systems layers.",
    },
    {
      title: "Software Engineer in Test",
      company: "Corvus Energy",
      date: "Sept 2022 – Dec 2022",
      description:
        "Designed Python test scripts for their Blue Whale marine energy storage system. I also assisted with migration to Azure DevOps for continuous testing as well as designed 3D printable parts for their hardware test benches.",
    },
    {
      title: "Junior Software Developer",
      company: "STR SpeechTech",
      date: "Jan 2022 – Apr 2022",
      description:
        "Helped with the .NET development and maintenance of their flagship StarCaster software. I also built and trained deep learning models using TensorFlow for speech synthesis.",
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
