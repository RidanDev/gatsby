import typography, { options, rhythm } from "../../utils/typography"
import presets, { colors, space } from "../../utils/presets"

const { curveDefault, speedDefault } = presets.animation

const styles = {
  featuredSitesCard: {
    display: `flex`,
    flexDirection: `column`,
    flexGrow: 0,
    flexShrink: 0,
    width: 320,
    marginBottom: rhythm(options.blockMarginBottom * 2),
    marginRight: rhythm(space[6]),
    [presets.Xl]: {
      width: 360,
      marginRight: rhythm(space[8]),
    },
    [presets.Xxl]: {
      width: 400,
    },
  },
  showcaseList: {
    display: `flex`,
    flexWrap: `wrap`,
    padding: rhythm(space[6]),
    justifyContent: `space-evenly`,
  },
  showcaseItem: {
    display: `flex`,
    flexDirection: `column`,
    margin: rhythm(space[6]),
    minWidth: 259, //shows 3 items/row on windows > 1200px wide
    maxWidth: 350,
    flex: `1 0 0`,
    position: `relative`,
  },
  featuredItem: {
    display: `none`,
    transition: `background .3s cubic-bezier(.4,0,.2,1), transform .3s cubic-bezier(.4,0,.2,1)`,
    [presets.Lg]: {
      alignItems: `center`,
      background: colors.accent,
      border: `none`,
      borderTopRightRadius: presets.radii[1],
      borderBottomLeftRadius: presets.radii[1],
      boxShadow: `none`,
      cursor: `pointer`,
      display: `flex`,
      height: 24,
      margin: 0,
      padding: 0,
      position: `absolute`,
      top: 0,
      right: 0,
      width: 24,
      "&:hover": {
        background: colors.gatsby,
      },
    },
  },
  featuredIcon: {
    margin: `0 auto`,
    display: `block`,
  },
  withTitleHover: {
    "& .title": {
      transition: `box-shadow .3s cubic-bezier(.4,0,.2,1), transform .3s cubic-bezier(.4,0,.2,1)`,
    },
    "&:hover .title": {
      boxShadow: `inset 0 -1px 0px 0px ${colors.ui.bright}`,
    },
  },
  loadMoreButton: {
    alignItems: `center`,
    display: `flex`,
    flexFlow: `row wrap`,
    margin: `0 auto ${rhythm(3)}`,
    [presets.Lg]: {
      margin: `0 auto ${rhythm(2 / 2)}`,
    },
  },
  sticky: {
    position: `sticky`,
    // We need the -1px here to work around a weird issue on Chrome
    // where the sticky element is consistently positioned 1px too far down,
    // leaving a nasty gap that the page content peeks through.
    // FWIW the problem is only present on the "Site Showcase" index page,
    // not the "Starter Showcase" index page; if the "Featured Sites" block
    // is removed, the problem goes away. I tried removing elements in the
    // "Featured Sites" content block, but no success—only removing the entire block
    // resolves the issue.
    top: `calc(${presets.bannerHeight} - 1px)`,
    [presets.Lg]: {
      top: `calc(${presets.headerHeight} + ${presets.bannerHeight} - 1px)`,
    },
  },
  scrollbar: {
    WebkitOverflowScrolling: `touch`,
    "&::-webkit-scrollbar": {
      width: `6px`,
      height: `6px`,
    },
    "&::-webkit-scrollbar-thumb": {
      background: colors.ui.bright,
    },
    "&::-webkit-scrollbar-track": {
      background: colors.ui.whisper,
    },
  },
  screenshot: {
    borderRadius: presets.radii[1],
    boxShadow: presets.shadows.card,
    marginBottom: rhythm(options.blockMarginBottom / 2),
    transition: `all ${presets.animation.speedDefault} ${
      presets.animation.curveDefault
    }`,
  },
  screenshotHover: {
    background: `transparent`,
    color: colors.gatsby,
    "& .gatsby-image-wrapper": {
      transform: `translateY(-3px)`,
      boxShadow: presets.shadows.cardHover,
    },
  },
  shortcutIcon: {
    paddingLeft: rhythm(1 / 8),
    "&&": {
      color: colors.gray.bright,
      fontWeight: `normal`,
      borderBottom: `none`,
      boxShadow: `none`,
      "&:hover": {
        background: `none`,
        color: colors.gatsby,
      },
    },
  },
  meta: {
    fontSize: presets.scale[1],
    alignItems: `baseline`,
    "&&": {
      color: colors.gray.bright,
    },
  },
  searchInput: {
    appearance: `none`,
    backgroundColor: `transparent`,
    border: 0,
    borderRadius: presets.radii[2],
    color: colors.gatsby,
    paddingTop: rhythm(1 / 8),
    paddingRight: rhythm(1 / 4),
    paddingBottom: rhythm(1 / 8),
    paddingLeft: rhythm(space[5]),
    overflow: `hidden`,
    fontFamily: typography.options.headerFontFamily.join(`,`),
    transition: `width ${speedDefault} ${curveDefault}, background-color ${speedDefault} ${curveDefault}`,
    width: `6.8rem`,
    "&::placeholder": {
      color: colors.lilac,
    },
    "&:focus": {
      outline: `none`,
      width: `9rem`,
      background: colors.ui.light,
    },
  },
  filterButton: {
    fontSize: presets.scale[1],
    margin: 0,
    alignItems: `flex-start`,
    background: `none`,
    border: `none`,
    color: colors.gray.text,
    cursor: `pointer`,
    display: `flex`,
    justifyContent: `space-between`,
    outline: `none`,
    padding: 0,
    paddingRight: rhythm(space[5]),
    paddingBottom: rhythm(options.blockMarginBottom / 8),
    paddingTop: rhythm(options.blockMarginBottom / 8),
    width: `100%`,
    textAlign: `left`,
    ":hover": {
      color: colors.gatsby,
    },
  },
  filterCheckbox: {
    marginRight: rhythm(space[2]),
    fontSize: presets.scale[2],
  },
  filterCount: {
    color: colors.gray.bright,
  },
  sidebarHeader: {
    margin: 0,
    [presets.Lg]: {
      fontSize: presets.scale[3],
      display: `none`,
      borderBottom: `1px solid ${colors.ui.light}`,
      color: colors.gray.calm,
      fontWeight: `normal`,
      flexShrink: 0,
      lineHeight: presets.lineHeights.solid,
      height: presets.headerHeight,
      margin: 0,
      paddingLeft: rhythm(space[6]),
      paddingRight: rhythm(space[6]),
      paddingTop: rhythm(options.blockMarginBottom),
      paddingBottom: rhythm(options.blockMarginBottom),
    },
  },
  sidebarBody: {
    paddingLeft: rhythm(space[6]),
    height: `calc(100vh - ((${presets.headerHeight}) + ${
      presets.bannerHeight
    }))`,
    display: `flex`,
    flexDirection: `column`,
  },
  sidebarContainer: {
    display: `none`,
    [presets.Lg]: {
      display: `block`,
      flexBasis: `15rem`,
      minWidth: `15rem`,
      paddingTop: 0,
      borderRight: `1px solid ${colors.ui.light}`,
      height: `calc(100vh - (${presets.headerHeight} + ${
        presets.bannerHeight
      }))`,
    },
  },
  contentHeader: {
    alignItems: `center`,
    background: `rgba(255,255,255,0.98)`,
    borderBottom: `1px solid ${colors.ui.light}`,
    display: `flex`,
    flexDirection: `row`,
    flexWrap: `wrap`,
    height: presets.headerHeight,
    justifyContent: `space-between`,
    paddingLeft: rhythm(space[6]),
    paddingRight: rhythm(space[6]),
    zIndex: 1,
  },
  contentTitle: {
    color: colors.gatsby,
    margin: 0,
    fontSize: presets.scale[3],
    lineHeight: presets.lineHeights.solid,
  },
  resultCount: {
    color: colors.lilac,
    fontWeight: `normal`,
  },
}

export default styles
