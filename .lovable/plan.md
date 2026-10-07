# PBSRK: animation and theme enhancement plan

## Goal and scope
Make the homepage, blog, and article pages feel polished and consistent without slowing them down. Preserve PBSRK’s dark identity, electric cyan calls to action, selective purple accents, professional headshot, and attribution: “Technique-learner of Manoj.”

This is a proposed plan, not an implementation. Keep existing content, pricing, article URLs, contact destinations, and functionality unchanged. Do not add new sections, a dashboard, or a full redesign.

## 1. Establish a baseline
**Review:** Capture the homepage, blog, and an article in dark and light themes. Check small screens, keyboard navigation, reduced-motion settings, and slower connections.

**Measure:** Record image transfer sizes, initial JavaScript, layout movement, loading time, and scrolling smoothness before changes. The previously identified image and script optimization work remains unfinished; verify current sizes rather than treating earlier estimates as measurements.

**Outcome:** A comparison checklist and screenshots so improvements can be evaluated objectively.

## 2. Refine the existing visual direction
**Direction:** Dark editorial portfolio with crisp typography, restrained neon, and glass effects only where they improve hierarchy.

- Keep cyan for primary actions, focus indicators, and important results. Use purple sparingly as a secondary accent.
- Make page sections unframed; retain glass treatments for individual cards and navigation rather than adding layered containers.
- Simplify the opening section’s competing glow effects. Remove decorative blurred background blobs; preserve the recognizable portrait ring in a lighter form.
- Use consistent card corners, spacing, border strength, and shadow intensity across Featured Innovations, portfolio items, and blog cards.
- Use Geist Sans for headings, Plus Jakarta Sans for body copy, and JetBrains Mono for metrics, matching your chosen identity. The current heading style uses Inter, so reconcile that mismatch.
- Ensure both themes are deliberately designed. The opening section currently has a fixed dark background; replace that with a theme-aware surface so switching themes does not leave mismatched blocks.

**Design principle:** Contrast, spacing, and typography should establish hierarchy before glow or animation does.

## 3. Make theme switching consistent
- Share one theme state across the homepage, blog, and articles. The current navigation creates separate toggle instances; they should reflect the same selection.
- Remember an explicit preference between visits. Default to dark for new visitors, preserving the requested identity.
- Apply the selected theme before first paint where feasible to prevent a light/dark flash.
- Give the toggle a descriptive accessible name and clear keyboard focus.
- Keep theme transitions brief and disable them for reduced-motion users. Avoid blanket transitions that animate every page element.
- Check text, links, form fields, and cyan buttons against their actual backgrounds; bright cyan may need a darker light-theme variant.

**Outcome:** A predictable switch that looks intentional on every page.

## 4. Establish one motion system
Use shared timing and easing rules rather than unrelated effects:

| Interaction | Proposed timing | Treatment |
|---|---:|---|
| Button and icon feedback | 120–180 ms | Color change; subtle press feedback |
| Card focus or pointer entry | 180–240 ms | Border emphasis; optional 2–4 px lift |
| Section entrance | 350–500 ms | Fade with 12–20 px upward movement |
| Grid stagger | 40–70 ms per item | Cap total delay around 250 ms |
| Theme change | 150–200 ms | Targeted surface and text changes |

- Keep the headline, headshot, and primary contact action visible immediately; never gate the first screen behind an entrance animation.
- Reveal sections once, not repeatedly when visitors scroll back.
- Avoid animating a whole section and its child cards at the same time. The homepage currently nests these reveals in some areas.
- Use shorter travel and fewer effects on small screens.
- Keep text readable and controls usable throughout transitions.

## 5. Simplify the portrait and moving ticker
**Portrait:** Preserve the existing professional photo and cyan/purple identity. Replace simultaneous spinning rings, reverse spins, ping pulses, and floating movement with a static luminous outline plus, at most, one slow subtle effect. Do not animate large blurred layers or shadows continuously.

**Ticker:** Keep the status information, but provide a pause control for ongoing movement. Stop movement for reduced-motion users and when the page is hidden. Avoid exposing duplicated marquee text repeatedly to screen readers.

**User-experience principle:** Motion should draw attention to PBSRK and the contact action, not compete with them.

## 6. Polish cards, navigation, and testimonials
- Give interactive cards matching pointer and keyboard-focus feedback. Keep links visible without requiring a pointer to reveal them.
- Do not make non-working innovation cards appear clickable; preserve existing behavior and flag missing destinations separately instead of inventing links.
- Use a short opacity/position transition for the small-screen menu without introducing a heavy animation library.
- Keep mobile-menu focus and expanded state correct, and ensure users can close it predictably.
- For testimonials, add named previous/next and pause controls. Pause automatic rotation during focus, pointer interaction, reduced motion, and when offscreen or the page is hidden.
- Reserve testimonial space so different quote lengths do not move surrounding content. Prevent inactive slides from confusing keyboard or screen-reader navigation.
- Use quieter motion on the blog and article pages; prioritize reading and let article images and headings establish the visual rhythm.

## 7. Build accessibility into the effects
- Respect `prefers-reduced-motion` in scroll reveals, smooth scrolling, rings, ticker movement, floating effects, and carousel autoplay.
- In reduced-motion mode, show all content immediately and retain nonmoving focus/active feedback.
- Ensure animation failure or unavailable IntersectionObserver cannot leave meaningful content permanently invisible.
- Target WCAG AA contrast: 4.5:1 for normal text, 3:1 for large text, and appropriate 3:1 contrast for control boundaries and focus indicators.
- Aim for comfortable 44 × 44 px touch targets for small icon controls.
- Test keyboard traversal, visible focus, accessible control names, and absence of flashing or rapid pulses.

## 8. Protect performance while enhancing the theme
- Keep the existing tiny WebP headshot, explicit dimensions, eager loading, and high fetch priority.
- Convert blog covers to smaller WebP variants, with responsive sizes where useful. Lazy-load images outside the first viewport and reserve their aspect ratios.
- Choose a single actual largest-content image per page for high priority; do not preload every cover globally.
- Split blog, answer hub, article, and fallback code by route so the homepage does not load every page upfront. Use a stable loading fallback that does not shift the layout.
- Load only needed font weights, preferably self-hosted WOFF2 with `font-display: swap`. Replace the remote CSS font import with a supported loading method; any required document-head changes stay limited to performance and theme initialization.
- Prefer CSS transitions and the existing IntersectionObserver for this scope. No GSAP or Motion dependency is needed for the proposed effects.
- Animate transforms and opacity, not layout properties. Avoid continuous blur, box-shadow, and backdrop-filter animation, and do not apply `will-change` everywhere.
- Limit static backdrop blur on small screens, clean up observers/timers, and suspend ongoing decorative effects when hidden or offscreen.
- Shrinking the social-share image is optional secondary work: it does not speed up ordinary page loading if it is only referenced in metadata.

**Performance principle:** A premium experience is immediate and responsive, not just visually elaborate.

## 9. Verify before publishing
Compare before and after using the same device/network settings:

- Homepage, blog, and one article in both themes.
- Representative small-screen and desktop widths; no clipped text, overlap, or horizontal scrolling.
- Theme preference remains synchronized and survives page navigation/reload without a visible flash.
- All content and contact actions remain available with reduced motion.
- Menu, carousel controls, and card links work with keyboard and touch.
- Headshot and blog covers render correctly, with stable dimensions and no layout jumps.
- No new console/runtime errors; project checks remain healthy.
- Lab targets: LCP at or below 2.5 seconds, CLS at or below 0.1, and smooth scrolling on a representative mid-range device. Target field INP at or below 200 ms when sufficient real-user data exists; a lab run alone cannot verify it.

Report measured changes rather than promising a score or ranking improvement. Publish only when requested.

## Technical implementation notes
- Centralize semantic theme, border, glow, and motion tokens in the global design system; do not scatter raw colors through page code.
- Consolidate theme state with the already available `next-themes` or an equivalent shared provider; use the existing design-system controls.
- Extend the reusable scroll-reveal component and hook with reduced-motion and fallback handling, removing nested reveal wrappers where needed.
- Keep blog and article metadata, canonical links, image URLs, and sitemap references valid after any asset changes.
- Record lasting structural decisions in `AGENTS.md` during implementation, not as new user design preferences.

## Recommended order
1. Baseline, shared theme state, contrast, and reduced-motion safeguards.
2. Typography, surface consistency, and simplified portrait effects.
3. Unified reveals, card feedback, navigation, ticker, and testimonial controls.
4. Image/font optimization and route-level script splitting.
5. Cross-page verification, measured comparison, and approval before publishing.

**Deliverable after approval:** The same PBSRK site with coordinated motion, consistent dark/light themes, accessible controls, and documented performance checks—without changing your content or adding unrelated features.