// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Runbooks',
      collapsed: false,
      items: [
        'runbooks/lockout-diagnosis',
        'runbooks/case-study-lockout-that-wasnt',
        'runbooks/hotp-counter-drift',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: [
        'reference/cli-commands',
        'reference/applet-architecture',
        'reference/provisioning-gaps',
      ],
    },
  ],
};

export default sidebars;
