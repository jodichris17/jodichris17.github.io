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
          <a href="https://github.com/DigiPie/nodejs-mysql-aws-beanstalk">
            DigiPie/nodejs-mysql-aws-beanstalk
          </a>
          , by using the CloudFormation IaC templates in this repository and
          setting up a simple AWS CodePipeline.
        </p>
        <p>
          I worked on this project to learn more about the{" "}
          <a href="https://www.hashicorp.com/resources/getting-started-with-infrastructure-as-code-iac">
            Infrastructure-as-Code
          </a>{" "}
          concept and{" "}
          <a href="https://aws.amazon.com/cloudformation/">
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
    title: "Mongo-Action",
    slug: "#mongo-action",
    imageUrl: "img/projects/mongo-action.png",
    subtitle: "A  Github action which creates a mongo Docker container.",
    period: "March 2020",
    tech: "GitHub Action, NodeJS, Docker",
    description: (
      <>
        <p>
          mongo-action is a Github Action which creates a mongo Docker container
          using the official{" "}
          <a href="https://hub.docker.com/_/mongo">Dockerhub image</a>. The
          MongoDB instance's port will be exposed to other containers and also
          to the host running the Github Workflow.
        </p>
        <p>
          <a
            href="https://github.com/DigiPie/mongo-action/workflows/mongo-action%20CI/badge.svg"
            title="mongo-action CI"
          >
            <img src="https://github.com/DigiPie/mongo-action/workflows/mongo-action%20CI/badge.svg" />
          </a>
        </p>
        <p>
          I created this Github Action to learn more about Continuous
          Integration tooling, and to simplify automated testing for my own{" "}
          <a href="https://github.com/DigiPie/mocha-chai-mongoose">
            Node-ExpressJS-Mongoose
          </a>{" "}
          project.
        </p>
        <p>
          By using this Github Action, there is no longer a need to provision a
          test database on MongoDB Atlas or elsewhere. Furthermore, each test
          will run on a fresh, isolated copy of a MongoDB instance.
        </p>
        <p>
          I submitted this to the{" "}
          <a href="https://githubhackathon.com/">
            Github Hackathon for Github Actions
          </a>
          .
        </p>
      </>
    ),
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/DigiPie/mongo-action",
      },
      {
        name: "GitHub Marketplace",
        link: "https://github.com/marketplace/actions/mongo-action",
      },
    ],
  },
];

export default projects;
