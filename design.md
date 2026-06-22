# Design Notes

## Reference

Source: https://www.frontend.fyi/tutorials

The theme borrows the reference site's dark tutorial-directory feel: compact top navigation, pill filters, blackened surfaces, subtle borders, small metadata chips, large direct page titles, video-forward cards, and a centered newsletter footer.

## Implementation

- Tailwind CSS remains the styling system through `assets/css/styles.css` and Vite.
- The theme defaults to dark mode so the shadcn dark variables drive the primary look.
- `assets/css/shadcn-variables.css` only changes the `.dark` shadcn token set, leaving `:root` light tokens intact.
- Header, navigation, tutorial cards, index filters, and footer were reshaped with Tailwind utility classes.
- Cards keep Ghost dynamic content: feature image, tags, reading time, title, and post URL.

## Visual Tokens

- Background: near-black neutral with a slight cool tint.
- Cards: raised dark panels with quiet borders and small hover movement.
- Primary: mint/teal accent for active filters, calls to action, and hover states.
- Radius: rounded pills for navigation and controls; rounded cards for tutorial entries.
- Typography: Geist Sans for body/headings and Geist Mono for mono/brand-style text, matching the reference site font stack.

## Template Surfaces

- `default.hbs`: selection styling added.
- `partials/style-script.hbs`: dark mode is default unless the user selects light.
- `partials/header.hbs`: sticky translucent header with compact brand, nav, and actions.
- `partials/navigation.hbs`: pill navigation for primary links and quiet footer links.
- `index.hbs`: tutorial hero, category filters, and responsive card grid.
- `partials/card.hbs`: video-style post card treatment.
- `partials/footer.hbs`: newsletter section and compact footer links.
