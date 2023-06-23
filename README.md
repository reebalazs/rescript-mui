# ReScript Bindings for MUI (WIP!)

## Installation

1. Install all necessary packages according to the official MUI-Material installation guide: https://mui.com/material-ui/getting-started/installation/.
2. Install `@rescript-mui/material`

```sh
npm install @rescript-mui/material
```

This library provides [ReScript](https://rescript-lang.org/) bindings for [MUI](https://mui.com/).

These bindings will only work with ReScript 11 (uncurried mode) and JSX version 4, as it enables us to utilize [untagged variants](https://rescript-lang.org/blog/improving-interop#untagged-variants), optional record fields, and record props spread. The latter is especially important, as we are finally able to inherit props from one component to another more easily.

## What happened to the bindings for Material-UI 4?

They are still available, check out the old website: https://rescript-material-ui.cca.io/.

## Why no new website?

1. One of the goals of this rewrite is to make the usage of MUI in ReScript more accessible. In the best case you never need to leave your editor, since now we have doc comments for (almost) every property.
2. It just takes too much time to maintain.
3. In our opinion, it is much more useful (albeit not as pretty) to just have a look at the [examples folder](./examples/).

## What's inside?

| MUI package         | ReScript bindings package    | Namespace        | Progress |
| ------------------- | ---------------------------- | ---------------- | -------: |
| @mui/material       | @rescript-mui/material       | Mui              |     99 % |
| @mui/lab            | @rescript-mui/lab            | MuiLab           |    100 % |
| @mui/x-date-pickers | @rescript-mui/x-date-pickers | MuiXDatePickers  |     10 % |
| @mui/base           | Not implemented!             | MuiBase (?)      |        - |
| @mui/joy            | Not implemented!             | Joy (?)          |        - |
| @mui/system         | Not implemented!             | MuiSystem (?)    |        - |
| @mui/x-data-grid    | Not implemented!             | MuiXDataGrid (?) |        - |

NOTE: `@mui/styles` will never be implemented, as it is the legacy styling solution which is not compatible with `React.StrictMode` or React 18.

## Progress

### MUI-Material

#### Components

- [x] Accordion
- [x] AccordionActions
- [x] AccordionDetails
- [x] AccordionSummary
- [x] Alert
- [x] AlertTitle
- [x] AppBar
- [x] Autocomplete
- [x] Avatar
- [x] AvatarGroup
- [x] Backdrop
- [x] Badge
- [x] BottomNavigation
- [x] BottomNavigationAction
- [x] Box
- [x] Breadcrumbs
- [x] Button
- [x] ButtonBase
- [x] ButtonGroup
- [x] Card
- [x] CardActionArea
- [x] CardActions
- [x] CardContent
- [x] CardHeader
- [x] CardMedia
- [x] Checkbox
- [x] Chip
- [x] CircularProgress
- [x] Collapse
- [x] Container
- [x] CssBaseline
- [x] Dialog
- [x] DialogActions
- [x] DialogContent
- [x] DialogContentText
- [x] DialogTitle
- [x] Divider
- [x] Drawer
- [x] Fab
- [x] Fade
- [x] FilledInput
- [x] FormControl
- [x] FormControlLabel
- [x] FormGroup
- [x] FormHelperText
- [x] FormLabel
- [x] GlobalStyles
- [x] Grid
- [x] Grow
- [x] Hidden
- [x] Icon
- [x] IconButton
- [x] ImageList
- [x] ImageListItem
- [x] ImageListItemBar
- [x] Input
- [x] InputAdornment
- [x] InputBase
- [x] InputLabel
- [x] LinearProgress
- [x] Link
- [x] List
- [x] ListItem
- [x] ListItemAvatar
- [x] ListItemButton
- [x] ListItemIcon
- [x] ListItemSecondaryAction
- [x] ListItemText
- [x] ListSubheader
- [x] Menu
- [x] MenuItem
- [x] MenuList
- [x] MobileStepper
- [x] Modal
- [x] NativeSelect
- [x] OutlinedInput
- [x] Pagination
- [x] PaginationItem
- [x] Paper
- [x] Popover
- [x] Popper
- [x] Radio
- [x] RadioGroup
- [x] Rating
- [x] ScopedCssBaseline
- [x] Select
- [x] Skeleton
- [x] Slide
- [x] Slider
- [x] Snackbar
- [x] SnackbarContent
- [x] SpeedDial
- [x] SpeedDialAction
- [x] SpeedDialIcon
- [x] Stack
- [x] Step
- [x] StepButton
- [x] StepConnector
- [x] StepContent
- [x] StepIcon
- [x] StepLabel
- [x] Stepper
- [x] StyledEngineProvider
- [x] SvgIcon
- [x] Switch
- [x] SwipeableDrawer
- [x] Tab
- [x] Table
- [x] TableBody
- [x] TableCell
- [x] TableContainer
- [x] TableFooter
- [x] TableHead
- [x] TablePagination
- [x] TableRow
- [x] TableSortLabel
- [x] Tabs
- [x] TabScrollButton
- [x] TextField
- [x] ToggleButton
- [x] ToggleButtonGroup
- [x] Toolbar
- [x] Tooltip
- [x] Typography
- [x] Zoom

#### Theming

- [x] Theme
- [x] ThemeHelpers
- [x] ThemeOptions
- [x] ThemeProvider

### MUI-LAB

- [x] LoadingButton
- [x] Masonry
- [x] TabContext
- [x] TabList
- [x] TabPanel
- [x] Timeline
- [x] TimelineConnector
- [x] TimelineContent
- [x] TimelineDot
- [x] TimelineItem
- [x] TimelineOppositeContent
- [x] TimelineSeparator
- [x] TreeItem
- [x] TreeView

### MUI-X Date Pickers

- [x] AdapterDateFns
- [x] AdapterDateFnsJalali
- [x] AdapterDayjs
- [x] AdapterLuxon
- [x] AdapterMoment
- [x] AdapterMomentHijri
- [x] AdapterMomentJalaali
- [ ] DateCalendar
- [ ] DateField
- [ ] DatePicker
- [ ] DateTimeField
- [ ] DateTimePicker
- [ ] DayCalendarSkeleton
- [ ] DesktopDatePicker
- [ ] DesktopDateTimePicker
- [ ] DesktopTimePicker
- [ ] DigitalClock
- [x] LocalizationProvider
- [ ] MobileDatePicker
- [ ] MobileDateTimePicker
- [ ] MobileTimePicker
- [ ] MonthCalendar
- [ ] MultiSectionDigitalClock
- [ ] PickersActionBar
- [ ] PickersDay
- [ ] PickersLayout
- [ ] PickersShortcuts
- [ ] StaticDatePicker
- [ ] StaticDateTimePicker
- [ ] StaticTimePicker
- [ ] TimeClock
- [ ] TimeField
- [ ] TimePicker
- [ ] YearCalendar

## Changelog

See [CHANGELOG](./CHANGELOG.md).

## Contributing

See [CONTRIBUTING](./CONTRIBUTING.md).
