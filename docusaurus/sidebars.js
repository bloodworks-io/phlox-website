/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    "intro",
    "setup",
    "settings",
    {
      type: "category",
      label: "Features",
      collapsed: false,
      items: [
        "features/patients",
        "features/transcription",
        "features/templates",
        "features/task-manager",
        "features/correspondence",
        "features/knowledge-base",
        "features/pdf-forms",
        "features/ai",
        "features/dashboard",
      ],
    },
    "architecture",
    "security",
    "limitations",
    "credits",
  ],
};

export default sidebars;
