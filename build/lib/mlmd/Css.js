"use strict";
/*
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createMuiTheme_1 = __importDefault(require("@material-ui/core/styles/createMuiTheme"));
var typestyle_1 = require("typestyle");
typestyle_1.cssRaw("\n  .LineageExplorer {\n    --blue-50: #e8f0fe;\n    --blue-100: #d2e3fc;\n    --blue-200: #aecbfa;\n    --blue-300: #8ab4f8;\n    --blue-400: #669df6;\n    --blue-500: #1098f7;\n    --blue-600: #1098f7;\n    --blue-700: #1967d2;\n    --blue-800: #185abc;\n    --blue-900: #174ea6;\n    --red-50: #fce8e6;\n    --red-700: #c5221f;\n    --yellow-600: #f9ab00;\n    --green-500: #34a853;\n    --green-600: #1e8e3e;\n    --grey-50: #f8f9fa;\n    --grey-100: #f1f3f4;\n    --grey-200: #e8eaed;\n    --grey-300: #dadce0;\n    --grey-400: #bdc1c6;\n    --grey-500: #9aa0a6;\n    --grey-600: #80868b;\n    --grey-700: #5f6368;\n    --grey-800: #3c4043;\n    --grey-900: #202124;\n    --orange-500: #fa7b17;\n    --orange-700: #d56e0c;\n    --orange-900: #b06000;\n    --pink-500: #f538a0;\n    --pink-700: #c92786;\n    --purple-500: #a142f4;\n    --card-radius: 6px;\n  }\n  ::-webkit-scrollbar {\n    -webkit-appearance: none;\n    width: 7px;\n    height: 7px;\n  }\n  ::-webkit-scrollbar-thumb {\n      border-radius: 4px;\n      background-color: rgba(0,0,0,.5);\n      box-shadow: 0 0 1px rgba(255,255,255,.5);\n  }\n");
typestyle_1.cssRaw("\n\n@font-face {\n    font-family: 'PublicSans-Regular';\n    src: local('PublicSans-Regular'), local('PublicSans-Regular'), url(https://cdn.jsdelivr.net/npm/public-sans@0.1.6-0/fonts/webfonts/PublicSans-Regular.woff) format('woff');\n}\n\n@font-face {\n    font-family: 'PublicSans-Medium';\n    src: local('PublicSans-Medium'), local('PublicSans-Medium'), url(https://cdn.jsdelivr.net/npm/public-sans@0.1.6-0/fonts/webfonts/PublicSans-Medium.woff) format('woff');\n}\n\n@font-face {\n    font-family: 'PublicSans-SemiBold';\n    src: local('PublicSans-SemiBold'), local('PublicSans-SemiBold'), url(https://cdn.jsdelivr.net/npm/public-sans@0.1.6-0/fonts/webfonts/PublicSans-SemiBold.woff) format('woff');\n}\n\n@font-face {\n    font-family: 'PublicSans-Bold';\n    src: local('PublicSans-Bold'), local('PublicSans-Bold'), url(https://cdn.jsdelivr.net/npm/public-sans@0.1.6-0/fonts/webfonts/PublicSans-Bold.woff) format('woff');\n}\n\n");
exports.color = {
    activeBg: '#eaf1fd',
    alert: '#f9ab00',
    background: '#fff',
    blue: '#4285f4',
    disabledBg: '#ddd',
    divider: '#e0e0e0',
    errorBg: '#fbe9e7',
    errorText: '#d50000',
    foreground: '#000',
    graphBg: '#f2f2f2',
    grey: '#5f6368',
    inactive: '#5f6368',
    lightGrey: '#eee',
    lowContrast: '#80868b',
    secondaryText: 'rgba(0, 0, 0, .88)',
    separator: '#e8e8e8',
    strong: '#202124',
    success: '#34a853',
    successWeak: '#e6f4ea',
    terminated: '#80868b',
    theme: '#1a73e8',
    themeDarker: '#0b59dc',
    warningBg: '#f9f9e1',
    warningText: '#ee8100',
    weak: '#9aa0a6',
};
exports.dimension = {
    auto: 'auto',
    base: 40,
    jumbo: 64,
    large: 48,
    small: 36,
    tiny: 24,
    xlarge: 56,
    xsmall: 32,
};
// tslint:disable:object-literal-sort-keys
exports.zIndex = {
    DROP_ZONE_OVERLAY: 1,
    GRAPH_NODE: 1,
    BUSY_OVERLAY: 2,
    PIPELINE_SUMMARY_CARD: 2,
    SIDE_PANEL: 2,
};
exports.fontsize = {
    small: 12,
    base: 14,
    medium: 16,
    large: 18,
    title: 18,
};
// tslint:enable:object-literal-sort-keys
var baseSpacing = 24;
exports.spacing = {
    base: baseSpacing,
    units: function (unit) { return baseSpacing + unit * 4; },
};
exports.fonts = {
    code: '"Source Code Pro", monospace',
    main: '"Google Sans", "Helvetica Neue", sans-serif',
    secondary: '"Roboto", "Helvetica Neue", sans-serif',
};
var palette = {
    primary: {
        dark: exports.color.themeDarker,
        main: exports.color.theme,
    },
    secondary: {
        main: 'rgba(0, 0, 0, .38)',
    },
};
exports.theme = createMuiTheme_1.default({
    overrides: {
        MuiButton: {
            flat: {
                fontSize: exports.fontsize.base,
                fontWeight: 'bold',
                minHeight: exports.dimension.tiny,
                textTransform: 'none',
            },
            flatPrimary: {
                border: '1px solid #ddd',
                cursor: 'pointer',
                fontSize: exports.fontsize.base,
                marginRight: 10,
                textTransform: 'none',
            },
            flatSecondary: {
                color: exports.color.theme,
            },
            root: {
                '&$disabled': {
                    backgroundColor: 'initial',
                },
                color: exports.color.theme,
                marginRight: 10,
                padding: '0 8px'
            },
        },
        MuiDialogActions: {
            root: {
                margin: 15,
            },
        },
        MuiDialogTitle: {
            root: {
                fontSize: exports.fontsize.large,
            },
        },
        MuiFormControlLabel: {
            root: {
                marginLeft: 0,
            },
        },
        MuiFormLabel: {
            filled: {
                marginLeft: 0,
                marginTop: 0,
            },
            root: {
                '&$focused': {
                    marginLeft: 0,
                    marginTop: 0,
                },
                fontSize: exports.fontsize.base,
                marginLeft: 5,
                marginTop: -8,
            },
        },
        MuiIconButton: {
            root: {
                padding: 9,
            },
        },
        MuiInput: {
            input: { padding: 0 },
            root: { padding: 0 }
        },
        MuiInputAdornment: {
            positionEnd: {
                paddingRight: 0,
            },
            root: { padding: 0 },
        },
        MuiTooltip: {
            tooltip: {
                backgroundColor: '#666',
                color: '#f1f1f1',
                fontSize: 12,
            }
        },
    },
    palette: palette,
    typography: {
        fontFamily: exports.fonts.main,
        fontSize: exports.fontsize.base + ' !important',
        useNextVariants: true,
    },
});
exports.commonCss = typestyle_1.stylesheet({
    absoluteCenter: {
        left: 'calc(50% - 24px)',
        position: 'absolute',
        top: 'calc(50% - 24px)',
    },
    busyOverlay: {
        backgroundColor: '#ffffffaa',
        bottom: 0,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: exports.zIndex.BUSY_OVERLAY,
    },
    buttonAction: {
        $nest: {
            '&:disabled': {
                backgroundColor: exports.color.background,
            },
            '&:hover': {
                backgroundColor: exports.theme.palette.primary.dark,
            },
        },
        backgroundColor: palette.primary.main,
        color: 'white',
    },
    ellipsis: {
        display: 'block',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    fit: {
        bottom: 0,
        height: '100%',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        width: '100%',
    },
    flex: {
        alignItems: 'center !important',
        display: 'flex !important',
        flexShrink: 0,
    },
    flexColumn: {
        display: 'flex !important',
        flexDirection: 'column',
    },
    flexGrow: {
        display: 'flex !important',
        flexGrow: 1,
    },
    header: {
        fontSize: exports.fontsize.large,
        fontWeight: 'bold',
        paddingBottom: 16,
        paddingTop: 20,
    },
    header2: {
        fontSize: exports.fontsize.medium,
        fontWeight: 'bold',
        paddingBottom: 16,
        paddingTop: 20,
    },
    infoIcon: {
        color: exports.color.lowContrast,
        height: 16,
        width: 16
    },
    link: {
        $nest: {
            '&:hover': {
                color: exports.color.theme,
                textDecoration: 'underline',
            },
        },
        color: exports.color.strong,
        cursor: 'pointer',
        textDecoration: 'none',
    },
    noShrink: {
        flexShrink: 0,
    },
    page: {
        display: 'flex',
        flexFlow: 'column',
        flexGrow: 1,
        overflow: 'auto',
    },
    pageOverflowHidden: {
        display: 'flex',
        flexFlow: 'column',
        flexGrow: 1,
        overflowX: 'auto',
        overflowY: 'hidden',
    },
    prewrap: {
        whiteSpace: 'pre-wrap',
    },
    scrollContainer: {
        background: "linear-gradient(white 30%, rgba(255,255,255,0)),\n       linear-gradient(rgba(255,255,255,0), white 70%) 0 100%,\n       radial-gradient(farthest-corner at 50% 0, rgba(0,0,0,.2), rgba(0,0,0,0)),\n       radial-gradient(farthest-corner at 50% 100%, rgba(0,0,0,.2), rgba(0,0,0,0)) 0 100%",
        backgroundAttachment: 'local, local, scroll, scroll',
        backgroundColor: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 40px, 100% 40px, 100% 2px, 100% 2px',
        overflow: 'auto',
        position: 'relative',
    },
    textField: {
        display: 'flex',
        height: 40,
        marginBottom: 20,
        marginTop: 15,
    },
    unstyled: {
        color: 'inherit',
        outline: 'none',
        textDecoration: 'none',
    },
});
function _paddingInternal(units, directions) {
    units = units || baseSpacing;
    directions = directions || 'blrt';
    var rules = {};
    if (directions.indexOf('b') > -1) {
        rules.paddingBottom = units;
    }
    if (directions.indexOf('l') > -1) {
        rules.paddingLeft = units;
    }
    if (directions.indexOf('r') > -1) {
        rules.paddingRight = units;
    }
    if (directions.indexOf('t') > -1) {
        rules.paddingTop = units;
    }
    return rules;
}
exports._paddingInternal = _paddingInternal;
function padding(units, directions) {
    return typestyle_1.style(_paddingInternal(units, directions));
}
exports.padding = padding;
//# sourceMappingURL=Css.js.map