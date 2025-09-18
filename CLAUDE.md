# GoA Design System Website - Development Notes

This document captures development workflow, historical context, and lessons learned while working on the GoA Design System website. For comprehensive AI guidance, see [AI_INSTRUCTIONS.md](./AI_INSTRUCTIONS.md).

## Website Structure

### Main Sections
- **Home**: Landing page with key resources and navigation
- **Get Started**: Onboarding for designers, developers, QA testers
- **Foundations**: Design principles, accessibility, branding, content guidelines
- **Examples**: Common patterns and implementations (requires manual review for changes)
- **Components**: Interactive component documentation (requires manual review for changes)
- **Design Tokens**: Color, spacing, typography tokens

### Key Architecture Patterns
- Built with React + Vite
- Uses `@abgov/react-components` v6.6.1 and `@abgov/web-components` v1.36.1
- React Router for navigation with nested routes
- ComponentContent wrapper for consistent page structure

## GoabText Spacing System Evolution

### Historical Timeline
1. **Original System**: GoabText had some default margins
2. **v6 Migration Period**: Temporarily changed to `mt="none"` and `mb="none"` defaults, requiring explicit margins
3. **Current System**: GoabText now has intelligent **size-based default margins** that provide good starting values

### Current Philosophy (2024+)
- **Defaults-first approach**: GoabText has built-in margins based on text size
- **Override when needed**: Use `mt="none"` or `mb="none"` to connect related content
- **Semantic HTML required**: Always use `tag` prop for proper heading hierarchy

### Design System v4/v6 Changes
- Component prefixes changed: `GoA` → `Goab` (React), `goa-` → `goab-` (Angular)
- Margin properties changed from `string` type to `Spacing` type
- Evolution from explicit margins to intelligent defaults

## Current Spacing Approach

### Quick Reference Patterns
```tsx
// Standard page pattern - trust defaults, override relationships
<GoabText tag="h1" size="heading-xl">Page Title</GoabText>
<GoabText size="body-l" mt="none">Introduction text</GoabText>

// Pages with category labels
<GoabText size="heading-m">Content guidelines</GoabText>
<GoabText tag="h1" size="heading-xl" mt="none">Page Title</GoabText>
<GoabText size="body-l" mt="none">Introduction text</GoabText>

// Always use semantic tags for accessibility
<GoabText tag="h2" size="heading-m">Section Heading</GoabText>
```

### Key Principles
- **Trust the defaults** - GoabText provides good spacing automatically
- **Override for relationships** - Use `mt="none"` to connect related content
- **Semantic HTML always** - Use `tag="h1"`, `tag="h2"`, etc. for accessibility
- **Container boundaries** - Consider edge alignment with `mt="none"` or `mb="none"`

## Component Usage Insights

### GoabText Sizing Hierarchy
- `heading-xl`: Main page titles
- `body-l`: Page introductions and important paragraphs
- `heading-m`: Section headings
- `body-m`: Regular content

### Common Components
- `ComponentContent`: Wrapper with table of contents support
- `GoabDivider`: Section separators with consistent margins
- `CardLite`: Reusable cards for navigation (Foundations, Examples, Components, Design tokens)
- `AccessibilityEmpty`: Common accessibility guidance component used on component pages
  - Located at: `src/components/empty-states/accessibility-empty/AccessibilityEmpty.tsx`
  - Contains two GoabText elements with specific spacing requirements

## File Organization

### Route Structure
```
src/routes/
├── home.tsx
├── get-started/
│   ├── GetStartedLayout.tsx
│   ├── GetStartedOverview.tsx
│   ├── designers/
│   ├── developers/
│   └── [other pages]
├── foundations/
├── examples/ (excluded from systematic changes)
├── components/ (excluded from systematic changes)
└── design-tokens/
```

### Key Files Modified
- Home page: Fixed "Start by using the design system" spacing
- CardLite component: Consistent card heading patterns
- All Get Started pages: Subtitle/title/introduction spacing
- Foundation pages: Introduction text consistency + added subtitles
- Design token pages: Replaced h1 tags with GoabText for consistent spacing
- AccessibilityEmpty component: Adjusted margins for tighter text spacing

## Development Best Practices

### Human Developer Workflow
1. **Start development server**: `npm run dev`
2. **Read files first** before making changes to understand structure
3. **Test spacing visually** - the defaults should look good, override only for content relationships
4. **Check semantic HTML** in browser dev tools to verify heading hierarchy
5. **Test responsive behavior** when possible

### Common Migration Tasks
- **Convert `<h1>` tags**: Replace with `<GoabText tag="h1" size="heading-xl">`
- **Remove excessive explicit margins**: Trust defaults, add `mt="none"` for content relationships
- **Add semantic tags**: Ensure proper `tag="h1"`, `tag="h2"` hierarchy
- **Foundation page categorization**: Add "Content guidelines" or "Style guide" subtitles

### Legacy Pattern Cleanup
Look for these outdated patterns:
```tsx
// ❌ OLD: Explicit margins that now create double spacing
<GoabText size="heading-xl" mt="xl" mb="m">Title</GoabText>

// ✅ NEW: Trust defaults, override relationships
<GoabText tag="h1" size="heading-xl">Title</GoabText>
<GoabText size="body-l" mt="none">Connected content</GoabText>
```

### Areas Requiring Manual Review
- **Components section**: Interactive sandboxes and version switching
- **Examples section**: 4-version support and GitHub integration

## Key Learnings from Past Migrations

1. **Spacing System Evolution**: The progression from explicit margins → no defaults → intelligent defaults taught us the importance of design system consistency
2. **Manual Review Essential**: Automated changes can miss important context about content relationships
3. **Component Interconnections**: Changes to shared components (CardLite, AccessibilityEmpty) affect multiple pages
4. **Version Complexity**: The 4-version system (LTS/Latest × React/Angular) adds significant complexity to examples and components
5. **GitHub Integration**: Dynamic content sourcing means some information should never be manually edited

## Historical Context

### Major Migration Periods
- **v4 → v6**: Component prefix changes (`GoA` → `Goab`), margin type system updates
- **Spacing System Updates**: Multiple iterations to find the right balance between automatic spacing and manual control
- **Version System Implementation**: Addition of LTS/Latest support with framework switching
- **GitHub Integration**: Move to dynamic metadata sourcing for examples and components

### Lessons for Future Changes
- **Test across all page types** before rolling out systematic changes
- **Understand content relationships** before adjusting spacing
- **Preserve semantic HTML** structure for accessibility
- **Document architectural decisions** to prevent future confusion

## Quick Reference for Developers

### Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
npm run prettier     # Format code
```

### Safe Areas for Changes
- Foundations section (static content)
- Get Started section (static content)
- Design Tokens section (static content)
- Home page content

### Areas Requiring Extra Care
- Examples section (dynamic templates, GitHub integration)
- Components section (interactive sandboxes, property tables)

---

**For comprehensive guidance on making changes, see [AI_INSTRUCTIONS.md](./AI_INSTRUCTIONS.md)**