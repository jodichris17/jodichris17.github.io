import React, { useEffect, useRef, useState } from "react";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";
import SocialLinks from "./components/_SocialLinks";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const mainRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true)
  const [headerHeight, setHeaderHeight] = useState(1536);
  const [bannerHeight, setBannerHeight] = useState(256);

  useEffect(() => {
    const tempHeaderHeight = Math.max(384, window.innerHeight);
    setHeaderHeight(tempHeaderHeight);
    setBannerHeight(Math.max(256, tempHeaderHeight / 2));
    setIsLoading(false);
    mainRef.current.hidden = false;
  }, []);

  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <header className={styles.heroBanner} style={{ minHeight: headerHeight }}>
        <div
          className={styles.heroBannerWrapper}
          style={{ minHeight: bannerHeight, display: isLoading ? "none" : "block" }}
        >
          <p>
          <img
              className={styles.aboutProfilePic}
              src={useBaseUrl("img/profilepic.jpg")}
            />
          </p>
          <SocialLinks />
          <p>
            <Link to={useBaseUrl("#main")}>
              <button className="border-0 rounded p-2 pl-4 pr-0 bg-primary-900 hover:bg-primary-800 transition text-white text-lg cursor-pointer">
                whoami<span className="pl-1 animate-pulse">▎</span>
              </button>
            </Link>
          </p>
        </div>
      </header>
      <main id="main" ref={mainRef} hidden={true}>
      <div className={styles.aboutHeader}>
        <h2 className="border-0 border-b-4 border-solid border-success">Who am I</h2>
      </div>
       <div className={styles.about}>
          <div>
            <img
              className={styles.aboutProfilePic}
              src={useBaseUrl("img/DSC01267.JPG")}
            />
          </div>
          <div>
            <img
              className={styles.aboutProfilePic}
              src={useBaseUrl("img/imgmdn.jpeg")}
            />
          </div>
          <div>
            <img
              className={styles.aboutProfilePic}
              src={useBaseUrl("img/1703851620189.jpg")}
            />
          </div>
          <div>
            <img
              className={styles.aboutProfilePic}
              src={useBaseUrl("img/DSC00744.JPG")}
            />
          </div>
        </div>
        <div className={styles.about}>
          <div>
            <img
              className={styles.aboutProfilePic}
              src={useBaseUrl("img/1000059718.jpg")}
            />
          </div>
          <div>
            <img
              className={styles.aboutProfilePic}
              src={useBaseUrl("img/IMG_0763.jpg")}
            />
          </div>
          <div>
            <img
              className={styles.aboutProfilePic}
              src={useBaseUrl("img/DSC00602.JPG")}
            />
          </div>
          <div>
            <img
              className={styles.aboutProfilePic}
              src={useBaseUrl("img/lensaroom.jpg")}
            />
          </div>
        </div>
        <div className={styles.about}>
          <div>
            <img
              className={styles.aboutProfilePic}
              src={useBaseUrl("img/1703852565599.jpg")}
            />
          </div>
          <div>
            <img
              className={styles.aboutProfilePic}
              src={useBaseUrl("img/P1010720.JPG")}
            />
          </div>
          <div>
            <img
              className={styles.aboutProfilePic}
              src={useBaseUrl("img/me.jpg")}
            />
          </div>
          <div>
            <img
              className={styles.aboutProfilePic}
              src={useBaseUrl("img/IMG_20240923.jpg")}
            />
          </div>
        </div>
        <section className={styles.directory}>
          <div className="container">
            <h3>Continue exploring?</h3>
            <nav className="pagination-nav">
              <div className="pagination-nav__item">
                <Link className="pagination-nav__link" to={useBaseUrl("blog/")}>
                  <div className="pagination-nav__sublabel">Read</div>
                  <div className="pagination-nav__label">My blog</div>
                </Link>
              </div>
              <div className="pagination-nav__item pagination-nav__item--next">
                <Link className="pagination-nav__link" to={useBaseUrl("docs/")}>
                  <div className="pagination-nav__sublabel">Refer to</div>
                  <div className="pagination-nav__label">My docs</div>
                </Link>
              </div>
            </nav>
            <nav className="pt-4 pagination-nav">
              <div className="pagination-nav__item">
                <Link
                  className="pagination-nav__link"
                  to={useBaseUrl("projects/")}
                >
                  <div className="pagination-nav__sublabel">Check out</div>
                  <div className="pagination-nav__label">My projects</div>
                </Link>
              </div>
            </nav>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
