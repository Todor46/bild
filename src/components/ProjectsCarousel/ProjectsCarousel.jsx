import { useEffect, useRef, useState } from "react";
import { getProjectsByNumber } from "../../services/projectsService";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { ReactComponent as LinkIcon } from "./img/link.svg";
import { ReactComponent as ArrowLeft } from "./img/arrow_left.svg";
import { ReactComponent as ArrowRight } from "./img/arrow_right.svg";

const ProjectsCarousel = () => {
  const [projects, setProjects] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);

  const primaryRef = useRef();
  const secondaryRef = useRef();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await getProjectsByNumber(10);
        setProjects(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProjects();
    primaryRef.current.sync(secondaryRef.current.splide);
  }, []);

  return (
    projects && (
      <div className="mt-[50px]">
        <Splide
          options={{
            type: "loop",
            perPage: 5,
            perMove: 1,
            gap: 20,
            arrows: false,
            pagination: false,
            autoplay: true,
            interval: 300,
            focus: "center",
          }}
          onMoved={(e) => setActiveSlide(e._i)}
          ref={primaryRef}
          className="slider-big"
        >
          {projects.map((project, idx) => {
            return (
              <SplideSlide>
                <div key={project.id} className="relative mx-2">
                  <img src={project.image} alt={project.title} />
                  {activeSlide !== idx && (
                    <div className="absolute inset-0 bg-white opacity-60"></div>
                  )}
                  <a
                    href="https://www.google.com"
                    className="inset-0 absolute opacity-0 hover:opacity-100 flex items-center justify-center "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="absolute h-20 w-20 flex items-center justify-center rounded-full bg-green-primary">
                      <LinkIcon className="text-white fill-current" />
                    </span>
                  </a>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
        <div className="mt-[50px] max-w-[800px] mx-auto">
          <Splide
            options={{
              type: "loop",
              gap: 20,
              arrows: true,
              pagination: false,
              autoplay: true,
              interval: 300,
            }}
            ref={secondaryRef}
            renderControls={() => (
              <div class="splide__arrows">
                <button class="carousel-arrow splide__arrow--prev">
                  <ArrowRight />
                </button>
                <button class="carousel-arrow splide__arrow--next">
                  <ArrowRight />
                </button>
              </div>
            )}
          >
            {projects.map((project, idx) => (
              <SplideSlide>
                <div key={project.id} className="text-center">
                  <h2 className="text-lg text-gray-dark mb-7">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-dark px-24">
                    {project.description}
                  </p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    )
  );
};

export default ProjectsCarousel;
