import { themeConfig } from "./index";

const changeThemes = {
    id: "changeThemes",
    label: "themeChanger",
    defaultTheme: themeConfig.theme,
    options: [
        {
            themeName: "themedefault",
            buttonColor: "#ffffff",
            textColor: "#323332"
        }
    ]
};

const topbarTheme = {
    id: "topbarTheme",
    label: "themeChanger.topbar",
    defaultTheme: themeConfig.topbar,
    options: [
        {
            themeName: "themedefault",
            buttonColor: "#ffffff",
            textColor: "#32a852",
            backgroundColor: "#ffffff"
        }
    ]
};

const sidebarTheme = {
    id: "sidebarTheme",
    label: "themeChanger.sidebar",
    defaultTheme: themeConfig.sidebar,
    options: [
        {
            themeName: "themedefault",
            buttonColor: "#2a2d35",
            backgroundColor: "#32a852",
            textColor: "#ffffff",
            activeRouteTextColor: "#FFF",
            activeRouteBackColor: "#f6a821",
            style4VarientActiveTextColor: "#f6a821"
        }
    ]
};

const layoutTheme = {
    id: "layoutTheme",
    label: "themeChanger.background",
    defaultTheme: themeConfig.layout,
    options: [
        {
            themeName: "themedefault",
            buttonColor: "#fafafa",
            backgroundColor: "#fafafa",
            cardBackground: "#fff",
            headingColor: "#6a727a",
            textColor: "#000"
        }
    ]
};

// const footerTheme = {
//     id: "footerTheme",
//     label: "themeChanger.footer",
//     defaultTheme: themeConfig.footer,
//     options: [
//         {
//             themeName: "themedefault",
//             buttonColor: "#ffffff",
//             textColor: "#323332",
//             backgroundColor: "#ffffff"
//         }
//     ]
// };

const customizedThemes = {
    changeThemes,
    topbarTheme,
    sidebarTheme,
    layoutTheme,
    // footerTheme
};

export function getCurrentTheme(attribute, selectedThemename) {
    let selecetedTheme = {};
    customizedThemes[attribute].options.forEach(theme => {
        if (theme.themeName === selectedThemename) {
            selecetedTheme = theme;
        }
    });
    return selecetedTheme;
}
export default customizedThemes;
