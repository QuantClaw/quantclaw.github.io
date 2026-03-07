import { defineConfig } from "vitepress";

// English nav
const enNav = [
  { text: "Guide", link: "/guide/getting-started" },
  { text: "Documentation", link: "/guide/documentation" },
];

// Chinese nav
const zhNav = [
  { text: "指南", link: "/zh/guide/getting-started" },
  { text: "文档", link: "/zh/guide/documentation" },
];

// English sidebar
const enSidebar = [
  {
    text: "Getting Started",
    items: [
      { text: "Quick Start", link: "/guide/getting-started" },
      { text: "Installation", link: "/guide/installation" },
      { text: "Configuration", link: "/guide/configuration" },
    ],
  },
  {
    text: "Core",
    items: [
      { text: "Features", link: "/guide/features" },
      { text: "Architecture", link: "/guide/architecture" },
      { text: "CLI Reference", link: "/guide/cli-reference" },
    ],
  },
  {
    text: "Development",
    items: [
      { text: "Plugin Development", link: "/guide/plugins" },
      { text: "Building from Source", link: "/guide/building" },
      { text: "Contributing", link: "/guide/contributing" },
    ],
  },
  {
    text: "Reference",
    items: [{ text: "All Documentation", link: "/guide/documentation" }],
  },
];

// Chinese sidebar
const zhSidebar = [
  {
    text: "入门",
    items: [
      { text: "快速开始", link: "/zh/guide/getting-started" },
      { text: "安装说明", link: "/zh/guide/installation" },
      { text: "配置参考", link: "/zh/guide/configuration" },
    ],
  },
  {
    text: "核心",
    items: [
      { text: "核心特性", link: "/zh/guide/features" },
      { text: "架构说明", link: "/zh/guide/architecture" },
      { text: "CLI 参考", link: "/zh/guide/cli-reference" },
    ],
  },
  {
    text: "开发",
    items: [
      { text: "插件开发", link: "/zh/guide/plugins" },
      { text: "从源码构建", link: "/zh/guide/building" },
      { text: "参与贡献", link: "/zh/guide/contributing" },
    ],
  },
  {
    text: "参考",
    items: [{ text: "文档概览", link: "/zh/guide/documentation" }],
  },
];

export default defineConfig({
  title: "QuantClaw",
  description:
    "High-Performance C++17 AI Agent Framework with persistent memory, browser control, and plugin ecosystem",

  cleanUrls: true,

  locales: {
    root: {
      label: "English",
      lang: "en-US",
      themeConfig: {
        nav: enNav,
        sidebar: enSidebar,
        footer: {
          message: "Released under the Apache 2.0 License.",
          copyright: "Copyright © 2024-2026 QuantClaw Contributors",
        },
        docFooter: { prev: "Previous", next: "Next" },
      },
    },
    zh: {
      label: "中文",
      lang: "zh-CN",
      link: "/zh/",
      themeConfig: {
        nav: zhNav,
        sidebar: zhSidebar,
        footer: {
          message: "基于 Apache 2.0 协议发布。",
          copyright: "Copyright © 2024-2026 QuantClaw 贡献者",
        },
        docFooter: { prev: "上一页", next: "下一页" },
        outlineTitle: "本页目录",
        returnToTopLabel: "返回顶部",
        sidebarMenuLabel: "菜单",
        darkModeSwitchLabel: "主题",
        langMenuLabel: "切换语言",
      },
    },
  },

  themeConfig: {
    logo: "/logo.png",
    siteTitle: "QuantClaw",

    search: {
      provider: "local",
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/QuantClaw/QuantClaw",
      },
    ],
  },

  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
});
