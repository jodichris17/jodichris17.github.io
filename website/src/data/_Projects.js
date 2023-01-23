import React from "react";

const projects = [
  {
    category: "Project",
    title: "DDoS Detection System",
    slug: "#ddos-detection-system",
    imageUrl: "img/projects/ddos-svm.png",
    subtitle:
      "An Implementation of DDoS detection and mitigation system using SVM Classifier.",
    period: "January 2020",
    tech: "Machine Learning",
    description: (
      <>
        <p>
          In this project, the detection and mitigation system of DDoS attacks was 
          built to minimize DDoS attacks on SDN architecture using SVM Classifier.
        </p>
        <p>
          SVM is applied to the machine learning model to classify 
          normal traffic and DDoS attack traffic based on features 
          taken from flow entries. 
          {/* <a href="https://github.com/">
            jodichris17/
          </a> */}
          {/* From the test results, the system has been able to detect DDoS 
          attacks with an average accuracy of 96.83% and an average detection 
          time of 67,80 ms. */}
        </p>
        <p>
          From the test results, the system has been able to detect DDoS 
          attacks with an average accuracy of 96.83% and an average detection 
          time of 67,80 ms.{" "}
          {/* <a href="https://github.com/">
            Infrastructure-as-Code
          </a>{" "}
          DDoS
          <a href="https://github.com/">
            Software Defined Network
          </a> */}
        </p>
      </>
    ),
    links: [
      {
        name: "Journal",
        link: "https://j-ptiik.ub.ac.id/index.php/j-ptiik/article/view/6476",
      },
    ],
  },
  {
    category: "Project",
    title: "Django Simple E-Commerce",
    slug: "#django-simple-ecommerce",
    imageUrl: "img/projects/django-ecommerce.png",
    subtitle: "A Simple E-Commerce Web with Django and Python",
    period: "April 2021",
    tech: "python, container",
    description: (
      <>
        <p>
          Simple django ecommerce website, build & deploy with docker & docker-compose.
        </p>
        <p>
          <a
            href="https://github.com/jodichris17/django-ecommerce-dockerized"
            title="django-ecommerce-dockerized"
          >
            {/* <img src="img/projects/django-ecommerce.png" /> */}
          </a>
        </p>
        {/* <p>
          github repository{" "}
          <a href="https://github.com/jodichris17/django-ecommerce-dockerized">django-ecommerce-dockerized</a> {" "}
          <a href="https://github.com/">my-project-2</a>
        </p> */}
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/jodichris17/django-ecommerce-dockerized",
      },
    ],
  },
  {
    category: "Open Source Tool",
    title: "my-project-3",
    slug: "#my-project-3",
    imageUrl: "",
    subtitle: "my-project-3",
    period: "March 2021",
    tech: "GitHub",
    description: (
      <>
        <p>
          this is sample project{" "}
          <a href="https://github.com/jodichris17">github</a>.
        </p>
        <p>
          <a
            href="https://github.com/jodichris17"
            title="my-project-3"
          >
            {/* <img src="https://github.com/jodichris17" /> */}
          </a>
        </p>
        <p>
         for testing purpose{" "}
          <a href="">
            my-project-3
          </a>{" "}
          tbd.
        </p>
        {/* <p>
          sample 
        </p> */}
        {/* <p>
          sample{" "}
          <a href="https://githubhackathon.com/">
            sample
          </a>
          .
        </p> */}
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/",
      },
      {
        name: "GitHub",
        link: "https://github.com/",
      },
    ],
  },
];

export default projects;