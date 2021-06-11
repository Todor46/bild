import { useEffect, useState } from "react";
import { useParams } from "react-router";
import InfiniteScroll from "react-infinite-scroller";
import { getProjectsFiltered } from "../../services/projectsService";
import ProjectCard from "../ProjectCard/ProjectCard";

const Portfolio = ({ layout }) => {
  const [projects, setProjects] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
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
      console.error(err);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 lg:px-0 my-[50px]">
      <InfiniteScroll
        pageStart={0}
        loadMore={fetchData}
        hasMore={hasMore}
        loader="loading..."
      >
        <div
          className={`${
            layout === "grid" ? "grid" : "flex flex-col"
          } grid-cols-2 sm:grid-cols-3 gap-5`}
        >
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Portfolio;
