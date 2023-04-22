const imagesIconsApps = (fle: string) => {
  return require(`./static/icons/apps/${fle}`);
};

const imagesProfiles = (fle: string) => {
  return require(`./static/profiles/${fle}`);
};
const imagesWallpapers = (fle: string) => {
  return require(`./static/wallpapers/${fle}`);
};

const ASSETS = {
  images: {
    icons: {
      apps: {
        chrome: imagesIconsApps("chrome.ico"),
        github: imagesIconsApps("github.png"),
        linkedin: imagesIconsApps("linkedin.png"),
        vscode: imagesIconsApps("vscode.png"),
        whatsapp: imagesIconsApps("whatsapp.png"),
        winCMD: imagesIconsApps("win-cmd.png"),
        winDefender: imagesIconsApps("win-defender.png"),
        winFileExplorer: imagesIconsApps("win-file-explorer.ico"),
        winMail: imagesIconsApps("win-mail.png"),
        winSearch: imagesIconsApps("win-search.ico"),
        winSettings: imagesIconsApps("win-settings.ico"),
        winTrashEmpty: imagesIconsApps("win-trash-empty.ico"),
        winTrashFull: imagesIconsApps("win-trash-full.ico"),
        logo: imagesIconsApps("logo.png"),
      },
    },
    profiles: {
      img: imagesProfiles("profile_1.jpg"),
    },
    wallpapers: [
      imagesWallpapers("wallpaper_1.png"),
      imagesWallpapers("wallpaper_2.jpg"),
      imagesWallpapers("wallpaper_3.png"),
      imagesWallpapers("wallpaper_4.jpg"),
      imagesWallpapers("wallpaper_5.jpg"),
      imagesWallpapers("wallpaper_6.jpg"),
    ],
  },
};

export const { icons, profiles, wallpapers } = ASSETS.images;

export default ASSETS;
