const actions = {

    TOOLBAR_ALIGNMENT: 'TOOLBAR_ALIGNMENT',
    FOOTER_ALIGNMENT: 'FOOTER_ALIGNMENT',
    SIDEBAR_DISPLAY: 'SIDEBAR_DISPLAY',
    TOOLBAR_DISPLAY: 'TOOLBAR_DISPLAY',
    FOOTER_DISPLAY: 'FOOTER_DISPLAY',
    SIDEBAR_TRANSPARENT: 'SIDEBAR_TRANSPARENT',
    TRIGGER_TRANSPARENT_IMAGE: 'TRIGGER_TRANSPARENT_IMAGE',
    ACTIVE_LINK_STYLE: 'ACTIVE_LINK_STYLE',
    SIDEBAR_MINI_VALUE: 'SIDEBAR_MINI_VALUE',
    
    toolbarAlignment: (data) => {
        return {
            type: actions.TOOLBAR_ALIGNMENT,
            toolbarAlign: data
        };
    },

    footerAlignment: (data) => {
        return {
            type: actions.FOOTER_ALIGNMENT,
            footerAlign: data
        };
    },
    
    sidebarDisplay: (data) => {
        return {
            type: actions.SIDEBAR_DISPLAY,
            sidebarDisplay: data
        };
    },

    toolbarDisplay: (data) => {
        return {
            type: actions.TOOLBAR_DISPLAY,
            toolbarDisplay: data
        };
    },

    footerDisplay: (data) => {
        return {
            type: actions.FOOTER_DISPLAY,
            footerDisplay: data
        };
    },

    sidebarTransParent: (data) => {
        return {
            type: actions.SIDEBAR_TRANSPARENT,
            sidebarTransParent: data
        };
    },
    
    triggerTransparetImage: (data) => {
        return {
            type: actions.TRIGGER_TRANSPARENT_IMAGE,
            transparentImage: data
        };
    },

    triggerActiveLinkStyle: (data) => {
        return {
            type: actions.ACTIVE_LINK_STYLE,
            activeLinkStyle: data
        };
    },

    sidebarMini: (data) => {
        return {
            type: actions.SIDEBAR_MINI_VALUE,
            sidebarMiniValue: data
        };
    },
}

export default actions