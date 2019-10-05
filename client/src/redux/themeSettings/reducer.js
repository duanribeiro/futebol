
import actions from './actions';
const sidebar1  =  require('assets/images/sidebar1.jpg');

//  you can import sidebar1, sidebar2, .... up to sidebar8 

const initState = {
    toolbarAlignValue: 'below', // below or above
    footerAlignValue: 'below', // below or above
    toolbarDisplayValue: 'show',  // show or hide
    footerDisplayValue: 'show', // show or hide
    sidebarTransParentValue: 'off', // off or on
    transparentImage: sidebar1, 
    activeLinkStyle: 'style1', // style1, style2, style3, style4, style5
    sidebarMiniValue: 'off', // off or on
    sidebarTransParentActiveBack: 'hsla(0,0%,100%,.23)', // when you use transparentImage at that time you can put any back color for active link
    sidebarTransParentActiveColor: '#E91E63' // when you use transparentImage at that time you can put any text color for active link
}

export default function rootReducer(state = initState, action) {

    switch (action.type) {
        case actions.TOOLBAR_ALIGNMENT:
            return {
                ...state,
                toolbarAlignValue: action.toolbarAlign,
            }
        case actions.FOOTER_ALIGNMENT:
            return {
                ...state,
                footerAlignValue: action.footerAlign
            }
        case actions.SIDEBAR_DISPLAY:
            return {
                ...state,
                sidebarDisplayValue: action.sidebarDisplay,
            }
        case actions.TOOLBAR_DISPLAY:
            return {
                ...state,
                toolbarDisplayValue: action.toolbarDisplay
            }
        case actions.FOOTER_DISPLAY:
            return {
                ...state,
                footerDisplayValue: action.footerDisplay
            }
        case actions.SIDEBAR_TRANSPARENT:
            return {
                ...state,
                sidebarTransParentValue: action.sidebarTransParent
            }
        case actions.TRIGGER_TRANSPARENT_IMAGE:
            return {
                ...state,
                transparentImage: action.transparentImage
            }
        case actions.ACTIVE_LINK_STYLE:
            return {
                ...state,
                activeLinkStyle: action.activeLinkStyle
            }
        case actions.SIDEBAR_MINI_VALUE:
            return {
                ...state,
                sidebarMiniValue: action.sidebarMiniValue
            }
        default:
            return state
    }
}