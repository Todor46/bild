import { useEffect, useRef, useState } from "react";
import { getProjectsByNumber } from "../../services/projectsService";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { ReactComponent as LinkIcon } from "./img/link.svg";
import { ReactComponent as ArrowRight } from "./img/arrow_right.svg";
import { breakpoints } from "../../constants/breakpoints";

const ProjectsCarousel = () => {
  const [projects, setProjects] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [error, setError] = useState(null);

  const primaryRef = useRef();
  const secondaryRef = useRef();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await getProjectsByNumber(10);
        setProjects(data);
      } catch (err) {
        setError(err);
      }
    };
    fetchProjects();
    primaryRef.current.sync(secondaryRef.current.splide);
  }, []);

  const screenWidth = window.screen.width;

  let perPage;
  perPage = 1;
  if (screenWidth > breakpoints.xs) perPage = 3;
  if (screenWidth > breakpoints.lg) perPage = 5;

  if (error)
    return (
      <div className="mt-[50px] flex items-center justify-center">
        <p className="text-red-500">An error occurred. Please try again</p>
      </div>
    );

  return (
    projects && (
      <div className="mt-[50px]">
        <Splide
          options={{
            type: "loop",
            perPage: perPage,
            perMove: 1,
            arrows: false,
            pagination: false,
            autoplay: true,
            interval: 300,
            focus: "center",
          }}
          onMoved={({ _i }) => setActiveSlide(_i)}
          ref={primaryRef}
          className="slider-big"
        >
          {projects.map((project, idx) => {
            return (
              <SplideSlide key={project.id}>
                <div className="relative mx-[10px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mx-auto"
                  />
                  <div
                    className={`absolute inset-0 bg-white transition-all ${
                      activeSlide !== idx ? "opacity-60" : "opacity-0"
                    }`}
                  ></div>
                  <a
                    href="https://www.google.com"
                    className="inset-0 absolute opacity-0 hover:opacity-100 flex items-center justify-center transition-all"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="absolute h-20 w-20 flex items-center justify-center rounded-full bg-green-500">
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
              <div className="splide__arrows">
                <button className="carousel-arrow splide__arrow--prev">
                  <ArrowRight />
                </button>
                <button className="carousel-arrow splide__arrow--next">
                  <ArrowRight />
                </button>
              </div>
            )}
          >
            {projects.map((project, idx) => (
              <SplideSlide key={project.id}>
                <div className="text-center">
                  <h2 className="text-lg text-gray-500 mb-7">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-500 px-12 md:px-24">
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
