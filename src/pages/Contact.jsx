import { FaLinkedin, FaGithub, FaEnvelopeOpen} from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-[#0a1e40] py-24 px-6 text-white flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold font-sans mb-6">Contact Me</h2>
      <div className="flex gap-8 items-center">
        <a
          href="https://www.linkedin.com/in/joemcd0224"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform hover:scale-125 text-blue-400"
        >
          <FaLinkedin size={40} />
        </a>
        <a
          href="https://github.com/joe-mcdonald"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform hover:scale-125 text-blue-400"
        >
          <FaGithub size={40} />
        </a>
        <a
          href="mailto:joemcd0224@gmail.com"
          className="transform transition-transform hover:scale-125 text-blue-400"
        >
          <FaEnvelopeOpen size={40} />
        </a>
      </div>
    </section>
  );
}
