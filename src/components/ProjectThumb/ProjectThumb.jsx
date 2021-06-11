import { ReactComponent as LinkIcon } from "./img/link.svg";

const ProjectThumb = ({ project }) => {
  return (
    <div key={project.id} className="relative aspect-w-4 aspect-h-3">
      <img
        src={project.image}
        alt={project.title}
        className="mx-auto object-fit"
      />
      <a
        href="https://www.google.com"
        className="inset-0 absolute opacity-0 hover:opacity-100 flex items-center justify-center transition-all"
        target="_blank"
        rel="noreferrer"
      >
        <div className="absolute inset-0 bg-white transition-all opacity-60"></div>
        <span className="absolute h-20 w-20 flex items-center justify-center rounded-full bg-green-500">
          <LinkIcon className="text-white fill-current" />
        </span>
      </a>
    </div>
  );
};

export default ProjectThumb;
