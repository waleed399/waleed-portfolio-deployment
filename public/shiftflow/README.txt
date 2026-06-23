ShiftFlow / Shift Right portfolio assets
========================================

App Store / marketing screenshots: 1.jpeg ... 18.jpeg (demo data — no real users).

All 18 are shown. Which order they appear in is controlled by the `images`
arrays in:
  - components/home/FeaturedProjects.tsx  (home featured card — auto-rotating
    carousel; uses the first 6 of the array)
  - app/projects/page.tsx                 (Projects page — swipeable strip of
    all screenshots)

To reorder, add, or remove a screenshot, edit those `images` arrays.
