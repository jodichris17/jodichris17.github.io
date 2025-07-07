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
    description: `In this project, the detection and mitigation system of DDoS attacks was built to minimize DDoS attacks on SDN architecture using an SVM Classifier.

SVM is applied to the machine learning model to classify normal traffic and DDoS attack traffic based on features taken from flow entries.

From the test results, the system has been able to detect DDoS attacks with an average accuracy of 96.83% and an average detection time of 67.80 ms.`,
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
    subtitle: "A Simple E-Commerce Web built with Django",
    period: "April 2021",
    tech: "Python, Docker",
    description: `A simple Django e-commerce website built and deployed using Docker and Docker Compose.`,
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/jodichris17/django-ecommerce-dockerized",
      },
    ],
  },
  {
    category: "Project",
    title: "Lambda CI/CD",
    slug: "#lambdaci-cd",
    imageUrl: "img/projects/cicd_pipeline_diagram.png",
    subtitle: "Lambda CI/CD Automation Deployment",
    period: "July 2024",
    tech: "AWS, Lambda, GitHub Actions",
    description: `This project demonstrates a CI/CD pipeline to deploy multiple AWS Lambda functions using GitHub Actions and LocalStack.`,
    links: [
      {
        name: "GitHub repository",
        link: "https://github.com/jodichris17/lambda-cicd",
      },
    ],
  },
];

export default projects;
