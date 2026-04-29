import { QuartzConfig } from "./quartz/framework"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "股票投资知识库",
    pageTitleSuffix: " | Stock Knowledge Base",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    baseUrl: "your-username.github.io/stock-knowledge",
    ignorePatterns: ["private", "drafts", "*.draft.md"],
    defaultDateType: "modified",
    theme: {
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        light: "#faf8f5",
        lightgray: "#e5e5e5",
        gray: "#b8b8b8",
        darkgray: "#4e4e4e",
        dark: "#2b2b2b",
        secondary: "#284b63",
        tertiary: "#84a59d",
        highlight: "#fff9939a",
        textHighlight: "#fff9939a",
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.Frontmatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "filesystem"] }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
      Plugin.ObsidianFlavoredMarkdown({ enableInlines: true }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.SyntaxHighlighting(),
      Plugin.TableOfContents(),
    ],
    filters: [Plugin.RemoveDrafts(), Plugin.ExplicitPublish()],
    emitters: [
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
    ],
  },
}

export default config