import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCode,
  faFile,
  faGamepad,
  faLink,
  faTools,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faChrome } from "@fortawesome/free-brands-svg-icons";

import styles from "./styles.module.css";
import projects from "../../data/_Projects";

function CategoryIcon({ category, size = "1x" }) {
  let faIcon;
  switch (category) {
    case "Open Source Tool":
      faIcon = faTools;
      break;
    case "Website":
      faIcon = faChrome;
      break;
    case "Game":
      faIcon = faGamepad;
      break;
    default:
      faIcon = faFile;
  }
  return <FontAwesomeIcon size={size} icon={faIcon} />;
}

function Projects() {
  const { siteConfig = {} } = useDocusaurusContext();
  const slug = useLocation();
  const projectItemRef = useRef(null);

  const [showProjectItem, setShowProjectItem] = useState(false);
  const [projectItem, setProjectItem] = useState(projects[0]);

  const baseProjectsUrl = useBaseUrl("/projects");
  const blogUrl = useBaseUrl("blog/");

  const projectsWithUrls = projects.map((project) => ({
    ...project,
    slugUrl: useBaseUrl(project.slug),
    imageUrlResolved: project.imageUrl ? useBaseUrl(project.imageUrl) : null,
  }));

  useEffect(() => {
    if (slug.hash) {
      const match = projectsWithUrls.find((p) => p.slug === slug.hash);
      if (match) {
        setProjectItem(match);
        setShowProjectItem(true);
        return;
      }
    }
    setShowProjectItem(false);
  }, [slug, projectsWithUrls]);

  // 🔽 Scroll into view after project is shown
  useEffect(() => {
    if (showProjectItem && projectItemRef.current) {
      projectItemRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showProjectItem]);

  return (
    <Layout title="Projects" description={siteConfig.tagline}>
      <header className={styles.projectPageHeader}>
        <h2 className="border-0 border-b-4 border-solid border-success">
          My projects
        </h2>
      </header>

      <main>
        <div className="py-6 md:py-12">
          <div className="my-0 mx-auto max-w-7xl">
            {!showProjectItem && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 px-4 md:px-0">
                {projectsWithUrls.map((project) => (
                  <div
                    key={project.title}
                    className="bg-secondary-800 hover:bg-secondary-900 transition rounded-lg overflow-hidden"
                  >
                    <Link
                      to={project.slugUrl}
                      className="block h-full text-white hover:text-white no-underline hover:no-underline"
                    >
                      {project.imageUrlResolved ? (
                        <div className="overflow-hidden h-40 md:h-48">
                          <img
                            src={project.imageUrlResolved}
                            alt={project.title}
                          />
                        </div>
                      ) : (
                        <div
                          className={
                            project.bgColor === "alternate"
                              ? "overflow-hidden bg-danger h-40 md:h-48"
                              : "overflow-hidden bg-success h-40 md:h-48"
                          }
                        >
                          <h2 className="m-3 inline-block">
                            {project.title}
                          </h2>
                        </div>
                      )}
                      <div className="pt-4 px-4">
                        <h3 className="mb-1">{project.title}</h3>
                        <p className="text-s mb-2 text-secondary-500">
                          {project.period}
                        </p>
                        <p>{project.subtitle}</p>
                        <p className="text-primary-default font-bold">
                          Read more
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}

            <div
              ref={projectItemRef}
              className={clsx(
                "text--center margin-bottom--xl",
                styles.projectItem
              )}
              style={{ display: showProjectItem ? "block" : "none" }}
            >
              <Link to={baseProjectsUrl}>
                <button className="border-0 rounded py-2 px-4 mb-2 bg-primary-900 hover:bg-primary-800 transition text-white text-lg cursor-pointer">
                  Back
                </button>
              </Link>

              <h1>{projectItem.title}</h1>
              <h2>{projectItem.subtitle}</h2>

              {projectItem.imageUrl && (
                <img
                  src={useBaseUrl(projectItem.imageUrl)}
                  alt={projectItem.title}
                />
              )}

              <div>
                <ul>
                  <li>
                    <CategoryIcon category={projectItem.category} />{" "}
                    {projectItem.category}
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCalendar} /> {projectItem.period}
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCode} /> {projectItem.tech}
                  </li>
                  {projectItem.team && (
                    <li>
                      <FontAwesomeIcon icon={faUsers} />{" "}
                      {projectItem.team.map((member, i) => (
                        <span key={i}>
                          {member.link ? (
                            <a href={member.link}>{member.name}</a>
                          ) : (
                            member.name
                          )}
                          {i < projectItem.team.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </li>
                  )}
                </ul>
                <b>Description</b>
                <p style={{ whiteSpace: "pre-wrap" }}>
                  {projectItem.description}
                </p>
                {projectItem.links && (
                  <>
                    <b>Links</b>
                    <ul>
                      {projectItem.links.map((link, i) => (
                        <li key={i}>
                          <a href={link.link}>
                            <FontAwesomeIcon icon={faLink} /> {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <Link to={baseProjectsUrl}>
                <button className="border-0 rounded py-2 px-4 bg-primary-900 hover:bg-primary-800 transition text-white text-lg cursor-pointer">
                  More projects
                </button>
              </Link>
            </div>
          </div>
        </div>

        <section className={styles.directory}>
          <div className="container">
            <h3>Continue exploring?</h3>
            <nav className="pagination-nav">
              <div className="pagination-nav__item">
                <Link className="pagination-nav__link" to={blogUrl}>
                  <div className="pagination-nav__sublabel">Read</div>
                  <div className="pagination-nav__label">My blog</div>
                </Link>
              </div>
            </nav>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Projects;
