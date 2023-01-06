module.exports = {
  docs: [
    {
      type: "doc",
      id: "contents",
    },
    {
      type: "doc",
      id: "reading-list",
    },
    {
      type: "category",
      label: "Article Summaries",
      items: ["scaling-memcached"],
    },
    {
      type: "category",
      label: "Network",
      items: [
        "network-model",
      ],
    },
    {
      type: "category",
      label: "Cloud",
      items: [
        {
          AWS: [],
        },
        {
          GCP: ["gcp-gke-cheatsheet"],
        },
        "docker-cheatsheet",
      ],
    },
    {
      type: "category",
      label: "Programming",
      items: [
        "py-cheatsheet",
        "js-cheatsheet",
      ],
    },
    {
      type: "category",
      label: "Linux",
      items: [
        "linux-cmd",
      ],
    },
    {
      type: "category",
      label: "Git",
      items: [
        "git-cheatsheet",
        "git-ignore-file",
      ],
    },
  ],
};
