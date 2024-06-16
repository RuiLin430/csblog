import { defineValaxyConfig } from "valaxy";
import type { ThemeConfig } from "valaxy-theme-yun";
// import { addonWaline } from "valaxy-addon-waline";
import { addonComponents } from "valaxy-addon-components";
import { addonLightGallery } from "valaxy-addon-lightgallery";
// import { VitePWA } from "vite-plugin-pwa";
// import { addonMeting } from "valaxy-addon-meting";

/**
 * User Config
 */
export default defineValaxyConfig<ThemeConfig>({
  addons: [
    addonComponents(),
    addonLightGallery(),
    /* addonMeting({
      global: true,
      props: {
        id: "8048058894",
        server: "netease",
        type: "playlist",
        fixed: true, 
      }, 
    }),*/
  ],

  vite: {
    optimizeDeps: {
      include: ["artalk"],
    },
  },

  theme: "yun",

  themeConfig: {
    notice: {
      enable: true,
      content:
        "咕咕咕。",
    },
    banner: {
      enable: true,
      title: "Hoshino",
      cloud: {
        enable: true,
      },
    },

    footer: {
      since: 2021,
    },

    bg_image: {
      enable: true,
      url: "https://upyun.lihaoyu.cn/2024/04/05/660f8e9e2ac7e.png",
      dark: "https://upyun.lihaoyu.cn/2024/04/05/660f93b2ab657.png",
    },

    say: {
      enable: true,
      api: "https://el-bot-api.vercel.app/api/words/young",
      hitokoto: {
        enable: true,
        api: "https://v1.hitokoto.cn",
      },
    },

    colors: {
      primary: "#F2BC57",
    },

    menu: {
      custom: {
        title: "menu.travellings",
        url: "https://www.travellings.cn/go.html",
        icon: "i-fluent-vehicle-subway-24-regular",
      },
    },

    fireworks: {
      enable: true,
      colors: ["#F2BC57", "#F2CD5E", "#F2F2F2"],
    },
  },

  features: {
    katex: false,
  },

  markdown: {
    theme: {
      light: "material-theme-lighter",
      dark: "material-theme-darker",
    },
  },
});
