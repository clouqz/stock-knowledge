import { QuartzLayout } from "./quartz/components"
import * as Component from "./quartz/components"

const layout: QuartzLayout = {
  header: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  left: [
    Component.MobileOnly(Component.Home()),
    Component.RecentNotes({ showFolder: true }),
    Component.Explorer({
      folderClickBehavior: "collapse",
      folderDefaultState: "collapsed",
      useSavedState: true,
      mapFn: (node) => {
        const icons: Record<string, string> = {
          inbox: "📥 Inbox",
          projects: "📊 Projects",
          areas: "🎯 Areas",
          resources: "📚 Resources",
          archive: "📦 Archive",
          templates: "📋 Templates",
          assets: "🖼️ Assets",
        }
        if (icons[node.displayName]) {
          node.displayName = icons[node.displayName]
        }
        return node
      },
    }),
  ],
  right: [
    Component.TableOfContents(),
    Component.Backlinks(),
    Component.Graph({
      localGraph: {
        drag: true,
        zoom: true,
        depth: 1,
        scale: 11,
        repelForce: 0.5,
        centerForce: 0.3,
        linkDistance: 30,
        fontSize: 0.6,
        opacityScale: -1,
      },
      globalGraph: {
        drag: true,
        zoom: true,
        depth: -1,
        scale: 11,
        repelForce: 0.5,
        centerForce: 0.3,
        linkDistance: 30,
        fontSize: 0.6,
        opacityScale: -1,
      },
    }),
    Component.Tags(),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/your-username/stock-knowledge",
    },
  }),
}

export default layout