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
          AWS: ["scaling-memcached"],
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
