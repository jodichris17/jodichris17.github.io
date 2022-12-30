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
      label: "Cloud and Networking",
      items: [
        "docker-cheatsheet",
        "gcp-gke-cheatsheet",
        "network-model",
      ],
    },
    {
      type: "category",
      label: "Programming",
      items: [
        {
          Ruby: ["ruby-dependency-management"],
        },
        "c-cheatsheet",
        "js-cheatsheet",
      ],
    },
    {
      type: "category",
      label: "Tooling and OS",
      items: [
        {
          Git: ["git-cheatsheet", "git-ignore-file"],
        },
        {
          iTerm2: ["iterm2-zsh-setup", "iterm2-cheatsheet"],
        },
        "os-ubuntu-cheatsheet",
      ],
    },
  ],
};
