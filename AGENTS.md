# Architecture rules
- Use one next-themes provider with a dark default and persisted explicit choice so all navigation toggles share theme state.
- Define appearance and motion roles in global CSS tokens so themes and reduced-motion behavior stay consistent across pages.
- Use CSS and IntersectionObserver for lightweight reveals; content must remain available when observation or motion is unavailable.
- Lazy-load secondary routes and serve responsive WebP article covers so homepage visitors avoid unnecessary page code and image transfer.
- Serve Latin variable fonts locally through Fontsource to avoid third-party font requests.
- Suspend automatic content motion for reduced motion, hidden pages and inactive sections, and expose named pause controls.