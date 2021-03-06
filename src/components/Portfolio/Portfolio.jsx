import { useEffect, useState } from "react";
import { useParams } from "react-router";
import InfiniteScroll from "react-infinite-scroller";
import { getProjectsFiltered } from "../../services/projectsService";
import ProjectThumb from "../ProjectThumb/ProjectThumb";
import Spinner from "../Spinner/Spinner";

const Portfolio = ({ layout }) => {
  const [projects, setProjects] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const pageSize = 10;
  const { category } = useParams();

  useEffect(() => {
    setProjects([]);
    setHasMore(true);
    setPage(1);
  }, [category]);

  const fetchData = async () => {
    try {
      const { data } = await getProjectsFiltered(
        `_page=${page}&_limit=${pageSize}${
          category ? `&category=${category}` : ""
        }`
      );
      setProjects((projects) => [...projects, ...data]);
      setHasMore(data.length === 10);
      setPage(page + 1);
    } catch (err) {
      setError(err);
      setHasMore(false);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 lg:px-0 my-[50px] relative">
      <InfiniteScroll
        pageStart={0}
        loadMore={fetchData}
        hasMore={hasMore}
        loader={
          <div className="text-center py-10">
            <Spinner />
          </div>
        }
      >
        <div
          className={`${
            layout === "grid" ? "grid gap-5" : "flex flex-col gap-12"
          } grid-cols-1 sm:grid-cols-2 md:grid-cols-3`}
        >
          {projects.map((project, idx) =>
            layout === "grid" ? (
              <div key={idx}>
                <ProjectThumb project={project} />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5" key={idx}>
                <div className="col-span-1">
                  <ProjectThumb project={project} />
                </div>
                <div className="col-span-1 hidden sm:block">
                  <h2 className="text-xl font-semibold text-gray-600 mb-4">
                    {project.title}
                  </h2>
                  <p>{project.description}</p>
                </div>
              </div>
            )
          )}
        </div>
      </InfiniteScroll>
      {error && (
        <div className="py-12 text-red-500 text-center">
          An error occurred. Please try again
        </div>
      )}
      {!projects.length && !hasMore && !error && (
        <div>There are no results</div>
      )}
    </div>
  );
};

export default Portfolio;
