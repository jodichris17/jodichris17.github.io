import React from "react";

const projects = [
  {
    category: "Project",
    title: "ddos-detection-system",
    slug: "#ddos-detection-system",
    subtitle:
      "An Implemantation of DDoS detection and mitigation system using SVM Classifier.",
    period: "November 2020",
    tech: "Machine Learning",
    description: (
      <>
        <p>
          An example of how you can perform Infrastructure-As-Code (IaC) using
          AWS CloudFormation and Continuous-Integration/Continuous-Deployment
          (CI/CD) using AWS CodePipeline.
        </p>
        <p>
          This example deploys the NodeJS-ExpressJS-MySQL
          Create-Read-Update-Delete (CRUD) application at{" "}
          <a href="https://github.com/">
            DigiPie/nodejs-mysql-aws-beanstalk
          </a>
          , by using the CloudFormation IaC templates in this repository and
          setting up a simple AWS CodePipeline.
        </p>
        <p>
          I worked on this project to learn more about the{" "}
          <a href="https://github.com/">
            Infrastructure-as-Code
          </a>{" "}
          concept and{" "}
          <a href="https://github.com/">
            AWS CloudFormation
          </a>
          .
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
    title: "mocha-chai-mongoose",
    slug: "#mocha-chai-mongoose",
    imageUrl: "img/projects/mochai.png",
    subtitle: "An example for testing a NodeJS-MongoDB app with Mocha-Chai.",
    period: "April 2020",
    tech: "Mocha, Chai, NodeJS, ExpressJS, MongoDB",
    description: (
      <>
        <p>
          An up-to-date 2020 example of how you can use Mocha and Chai to
          perform API testing for a Node-ExpressJS-Mongoose app. You will be
          able to test your code locally and also automatically using Github
          Action.
        </p>
        <p>
          <a
            href="https://github.com/DigiPie/mocha-chai-mongoose/workflows/Node.js%20CI/badge.svg"
            title="Node.js CI"
          >
            <img src="https://github.com/DigiPie/mocha-chai-mongoose/workflows/Node.js%20CI/badge.svg" />
          </a>
        </p>
        <p>
          I worked on this project to learn more about API testing using{" "}
          <a href="https://mochajs.org/">Mocha</a> and{" "}
          <a href="https://www.chaijs.com/">Chai</a>, and also to practice
          setting up a NodeJS-ExpressJS-Mongoose backend application.
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/DigiPie/mocha-chai-mongoose",
      },
    ],
  },
  {
    category: "Open Source Tool",
    title: "my-project-3",
    slug: "#my-project-3",
    imageUrl: "",
    subtitle: "my-project-3",
    period: "March 2020",
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
            <img src="https://github.com/jodichris17" />
          </a>
        </p>
        <p>
         for testing purpose{" "}
          <a href="">
            my-project-3
          </a>{" "}
          project.
        </p>
        <p>
          sample 
        </p>
        <p>
          sample{" "}
          <a href="https://githubhackathon.com/">
            sample
          </a>
          .
        </p>
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
