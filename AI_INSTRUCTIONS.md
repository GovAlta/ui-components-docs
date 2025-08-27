# AI Instructions for GoA Design System Website Updates

This document provides comprehensive instructions for AI assistants working on the GoA Design System documentation website (`ui-components-docs`). Understanding this architecture is critical for making safe, effective changes.

## Table of Contents
1. [Project Overview](#project-overview)
2. [GoabText Spacing System](#goabtext-spacing-system)
3. [Website Architecture](#website-architecture)
4. [Version & Framework System](#version--framework-system)
5. [Component Property Documentation](#component-property-documentation)
6. [Spacing Patterns by Page Type](#spacing-patterns-by-page-type)
7. [Development Workflow](#development-workflow)
8. [Areas Requiring Special Care](#areas-requiring-special-care)
9. [Common Tasks & Guidelines](#common-tasks--guidelines)
10. [Quality Assurance](#quality-assurance)

## Project Overview

### Technology Stack
- **Framework**: React 18.2.0 + TypeScript + Vite
- **Design System**: `@abgov/react-components` v6.6.1, `@abgov/web-components` v1.36.1
- **Routing**: React Router v6.13.0
- **Styling**: CSS Modules + Design System components

### Key Architecture Principles
- **Dynamic Content**: Much content is GitHub-sourced and version-dependent
- **Multi-Version Support**: 4 versions (LTS/Latest × React/Angular) 
- **Component Reuse**: Examples shared between individual pages and component documentation
- **Semantic HTML**: Always use proper heading hierarchy with `tag` prop
- **Default-First Design**: GoabText has intelligent defaults, override only when needed

## GoabText Spacing System (CURRENT)

### Understanding the Philosophy
GoabText now has **built-in default margins** that provide good starting values for most scenarios. The defaults ensure text never gets cramped and creates proper visual hierarchy automatically.

### Default Spacing Values

**Default Top Margins by Size:**
- `heading-xl`: `2XL`
- `heading-l`: `2XL`
- `heading-m`: `2XL`
- `heading-s`: `XL`
- `heading-xs`: `XL`
- `body-l`: `2XL`
- `body-m`: `L`
- `body-s`: `L`
- `body-xs`: `S`

**Default Bottom Margins by Size:**
- `heading-xl`: `L`
- `heading-l`: `L`
- `heading-m`: `M`
- `heading-s`: `S`
- `heading-xs`: `XS`
- `body-l`: `L`
- `body-m`: `L`
- `body-s`: `L`
- `body-xs`: `L`

### When to Override Defaults
- **Connected Content**: Use `mt="none"` when content should flow directly from previous element
- **Container Boundaries**: Use `mt="none"` or `mb="none"` at container edges for alignment
- **Custom Relationships**: Override with specific values when design requires different spacing
- **Legacy Cleanup**: Remove explicit margins that now duplicate the new defaults

### Semantic HTML Requirements
**Always use proper semantic tags with the `tag` prop:**
```tsx
// ✅ CORRECT: Semantic h1 with visual flexibility
<GoabText tag="h1" size="heading-xl">Page Title</GoabText>

// ❌ WRONG: Missing semantic meaning
<GoabText size="heading-xl">Page Title</GoabText>

// ❌ WRONG: Raw HTML instead of GoabText
<h1>Page Title</h1>
```

## Website Architecture

### Main Route Structure
```
src/routes/
├── home.tsx                    # Landing page
├── get-started/               # Onboarding content
│   ├── GetStartedOverview.tsx
│   ├── developers/           # Developer guides
│   ├── designers/           # Designer resources  
│   └── qa-testing/          # QA testing guides
├── foundations/              # Design principles (safe for systematic changes)
│   ├── Accessibility.tsx
│   ├── Color.tsx
│   ├── Typography.tsx
│   └── [other foundation pages]
├── components/              # Component documentation (REQUIRES MANUAL REVIEW)
├── examples/               # Usage patterns (REQUIRES MANUAL REVIEW)
└── design-tokens/         # Design token documentation (safe for systematic changes)
    ├── color/
    ├── spacing/
    └── [other token pages]
```

### Key Shared Components
- **ComponentContent**: Wrapper for consistent page structure with table of contents
- **CardLite**: Reusable navigation cards used throughout the site
- **AccessibilityEmpty**: Shared accessibility guidance component
- **Sandbox**: Interactive component playground (components section only)
- **ExamplePageTemplate**: Dynamic template for individual example pages

### Content Sources
- **Static Content**: Foundations, Get Started, Design Tokens (manually maintained)
- **GitHub-Sourced Metadata**: Component and example descriptions, status, links
- **Dynamic Templates**: Examples and component pages use template systems
- **Shared Examples**: Individual example components reused across contexts

## Version & Framework System

### Four-Version Architecture
The website supports **4 distinct versions** of code examples:
1. **LTS/React** (`version === "old"`, `tags="react"`)
2. **Latest/React** (`version === "new"`, `tags="react"`)
3. **LTS/Angular** (`version === "old"`, `tags="angular"`)
4. **Latest/Angular** (`version === "new"`, `tags="angular"`)

### Version Context Usage
```tsx
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

const {version, language} = useContext(LanguageVersionContext);

// Conditional rendering based on version
{version === "new" && <CodeSnippet ... />}
{version === "old" && <CodeSnippet ... />}

// Framework-specific content
tags="react"
tags="angular"
tags={["angular", "reactive"]}      // Angular reactive forms
tags={["angular", "template-driven"]} // Angular template-driven forms
```

### Component Naming Differences
- **LTS**: `GoA` prefix, `goa-` HTML tags, `(_click)` events
- **Latest**: `Goab` prefix, `goab-` HTML tags, `(onClick)` events

### Example Structure Requirements
Examples must support all 4 versions:
```tsx
export const ExampleComponent = () => {
  const {version} = useContext(LanguageVersionContext);
  
  return (
    <Sandbox flags={["reactive"]}>
      {/* Visual demo that works across all versions */}
      <GoabButton onClick={noop}>Demo Button</GoabButton>
      
      {/* Version-specific React code */}
      {version === "old" && <CodeSnippet tags="react" code={`<GoAButton ...>`} />}
      {version === "new" && <CodeSnippet tags="react" code={`<GoabButton ...>`} />}
      
      {/* Version-specific Angular code */}
      {version === "old" && <CodeSnippet tags="angular" code={`<goa-button ...>`} />}
      {version === "new" && <CodeSnippet tags="angular" code={`<goab-button ...>`} />}
    </Sandbox>
  );
};
```

## Component Property Documentation

### Documentation Flow
1. **Type Definitions** → `ui-components/libs/common/src/lib/common.ts`
2. **React Interface** → `ui-components/libs/react-components/src/lib/[component]/[component].tsx`
3. **Documentation Props** → `ui-components-docs/src/routes/components/[Component].tsx`

### ComponentProperty Structure
```tsx
export type ComponentProperty = {
  name: string;                    // Property name
  type?: string | string[];        // TypeScript type + inline union values
  lang?: "react" | "angular";      // Framework-specific props
  required?: boolean;              // Required property flag
  description?: string;            // Human-readable description
  defaultValue?: string;           // Default value if any
  badge?: { content: string; type: GoabBadgeType }; // Special badges
};
```

### Property Documentation Patterns
```tsx
// Component-specific properties
const componentProperties: ComponentProperty[] = [
  {
    name: "type",
    type: "GoabButtonType (primary | submit | secondary | tertiary | start)",
    description: "Sets the type of button.",
    defaultValue: "primary",
  },
  // Framework-specific variations
  {
    name: "leadingIcon",
    type: "GoabIconType",
    lang: "react",
    description: "Shows an icon to the left of the text.",
  },
  {
    name: "leadingicon",  // lowercase for Angular
    type: "GoabIconType",
    lang: "angular", 
    description: "Shows an icon to the left of the text.",
  },
  // Shared properties (reuse these)
  TestIdProperty,    // From common-properties.ts
  MarginProperty,    // From common-properties.ts
];

// Legacy version properties
const oldComponentProperties: ComponentProperty[] = [
  // Properties for LTS version
];
```

### Version & Framework Filtering
The `ComponentProperties` component automatically:
- Filters properties by framework (React vs Angular)
- Filters properties by version (LTS vs Latest)
- Displays context-appropriate properties

### Updating Component Properties
When updating component documentation:
1. **Check type definitions** in `common.ts` first
2. **Update React interface** if needed
3. **Update documentation arrays** to match
4. **Use shared properties** from `common-properties.ts` when possible
5. **Maintain version differences** between old/new property arrays

## Spacing Patterns by Page Type

### Standard Page Pattern (Foundations, Get Started, Design Tokens)
```tsx
<GoabText tag="h1" size="heading-xl">Page Title</GoabText>
<GoabText size="body-l" mt="none">Introduction paragraph explaining the page content.</GoabText>
```
- **Title**: Uses default `2XL` top + `L` bottom margins
- **Introduction**: Uses `mt="none"` to connect to title, default bottom margin

### Subsection Pages with Category Labels
**Get Started Developer/Designer/QA pages:**
```tsx
<GoabText size="heading-m">Developers</GoabText>
<GoabText tag="h1" size="heading-xl" mt="none">Specific Page Title</GoabText>
<GoabText size="body-l" mt="none">Introduction paragraph</GoabText>
```

**Foundation Pages with Content Guidelines/Style Guide:**
```tsx
<GoabText size="heading-m">Content guidelines</GoabText>  {/* or "Style guide" */}
<GoabText tag="h1" size="heading-xl" mt="none">Page Title</GoabText>
<GoabText size="body-l" mt="none">Introduction paragraph</GoabText>
```

**Foundation Category Assignment:**
- **Content Guidelines**: ErrorMessages, HelperText, DateFormat, Capitalization
- **Style Guide**: Color, Iconography, Photography, Logo, Typography, Layout

### Design Token Pages
```tsx
<GoabText tag="h1" size="heading-xl">Token Name</GoabText>
```
- **Critical**: Never use `<h1>` tags - always use `GoabText` with `tag="h1"`
- Let defaults handle all spacing

### Container Spacing Rules
When GoabText is inside GoabContainer:
- **First element**: Consider `mt="none"` for edge alignment
- **Last element**: Consider `mb="none"` for edge alignment  
- **Important**: Only override when visual alignment requires it

## Development Workflow

### Before Making Changes
1. **Always read files first** before editing to understand current structure
2. **Check for double spacing** caused by explicit margins + new defaults
3. **Test with defaults first** - only override when content relationships require it
4. **Understand page context** - different sections have different patterns

### Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
npm run prettier     # Format code
npm run make:route   # Create new route (script available)
```

### File Reading Requirements
- **Always read existing files** before making changes
- **Check imports and dependencies** to understand component usage
- **Verify spacing patterns** match established hierarchy
- **Look for `<h1>` tags** that should be converted to `GoabText` with `tag="h1"`

## Areas Requiring Special Care

### Safe for Systematic Changes
- **Foundations section** (`src/routes/foundations/`) - Static content pages
- **Get Started section** (`src/routes/get-started/`) - Onboarding content
- **Design Tokens section** (`src/routes/design-tokens/`) - Token documentation
- **Home page** (`src/routes/home.tsx`) - Landing page content

### Requires Manual Review (DO NOT APPLY SYSTEMATIC CHANGES)
- **Examples section** (`src/routes/examples/`, `src/examples/`) 
  - Dynamic template system
  - GitHub integration
  - 4-version code snippet requirements
  - Shared components with specific layout needs
- **Components section** (`src/routes/components/`)
  - Interactive sandboxes
  - Property documentation tables
  - Version-specific functionality
  - Technical content with different hierarchy needs

### Example Section Complexity
- **ExamplePageTemplate** dynamically imports examples based on URL slug
- **Individual examples** reused across multiple component documentation pages
- **Sandbox components** have specific spacing needs for interactive functionality
- **Version switching** affects code snippet display throughout examples
- **GitHub metadata** drives descriptions, tags, and status - don't edit manually

## Common Tasks & Guidelines

### Converting HTML Tags to GoabText
```tsx
// ❌ BEFORE: Raw HTML
<h1>Page Title</h1>

// ✅ AFTER: Semantic GoabText
<GoabText tag="h1" size="heading-xl">Page Title</GoabText>
```

### Fixing Double Spacing Issues
```tsx
// ❌ BEFORE: Double spacing (explicit + defaults)
<GoabText size="heading-xl" mt="xl" mb="m">Title</GoabText>

// ✅ AFTER: Trust defaults, override relationships
<GoabText tag="h1" size="heading-xl">Title</GoabText>
<GoabText size="body-l" mt="none">Connected introduction</GoabText>
```

### Adding New Component Properties
1. **Define types** in `ui-components/libs/common/src/lib/common.ts`
2. **Add to React interface** in component file
3. **Update documentation** in component page:
```tsx
const componentProperties: ComponentProperty[] = [
  {
    name: "newProp",
    type: "NewPropType (value1 | value2)",
    description: "Description of the new property.",
    defaultValue: "value1",
  },
  // ... existing props
];
```

### Creating New Examples
Examples must support 4 versions and be reusable:
```tsx
import { LanguageVersionContext } from "@contexts/LanguageVersionContext.tsx";

export const NewExample = () => {
  const {version} = useContext(LanguageVersionContext);
  
  return (
    <Sandbox flags={["reactive"]}>
      {/* Interactive demo */}
      <GoabComponent />
      
      {/* 4 version-specific code snippets */}
      {version === "old" && <CodeSnippet tags="react" ... />}
      {version === "new" && <CodeSnippet tags="react" ... />}
      {version === "old" && <CodeSnippet tags="angular" ... />} 
      {version === "new" && <CodeSnippet tags="angular" ... />}
    </Sandbox>
  );
};
```

### Updating Foundation Pages
Most foundation pages need subtitle categorization:
```tsx
// Add appropriate subtitle
<GoabText size="heading-m">Content guidelines</GoabText> // or "Style guide"
<GoabText tag="h1" size="heading-xl" mt="none">Page Title</GoabText>
<GoabText size="body-l" mt="none">Introduction paragraph</GoabText>
```

### Working with Shared Components
- **CardLite**: Used for navigation cards throughout site
- **AccessibilityEmpty**: Common accessibility guidance (has specific spacing requirements)
- **ComponentContent**: Page wrapper with TOC support
- Changes to shared components affect multiple pages

## Quality Assurance

### Visual Hierarchy Checklist
- [ ] Page titles use `tag="h1"` with `size="heading-xl"`
- [ ] Introduction text uses `size="body-l"` with `mt="none"` when following titles
- [ ] Section headings follow proper hierarchy (h2, h3, etc.)
- [ ] Spacing creates clear content flow without excessive gaps
- [ ] Container boundaries align properly

### Technical Checklist
- [ ] No raw `<h1>` tags (use `GoabText` with `tag="h1"`)
- [ ] Proper subtitle patterns on Foundation and Get Started pages
- [ ] Container spacing rules applied correctly when needed
- [ ] Component imports are correct
- [ ] No double spacing from explicit margins + defaults

### Content Relationship Checklist
- [ ] Connected content uses `mt="none"` appropriately
- [ ] Section breaks have adequate separation (defaults usually sufficient)
- [ ] Related content appears visually connected
- [ ] Unrelated content has clear separation

### Version System Checklist (Examples/Components)
- [ ] 4 code versions supported (LTS/Latest × React/Angular)
- [ ] Proper version context usage (`version === "new"` vs `version === "old"`)
- [ ] Correct component prefixes (`GoA` vs `Goab`)
- [ ] Appropriate framework tags on code snippets
- [ ] Interactive demos work across all versions

### Component Property Checklist
- [ ] Type definitions exist in `common.ts`
- [ ] React interface matches documentation
- [ ] Property arrays include all interface properties
- [ ] Shared properties reused from `common-properties.ts`
- [ ] Version differences properly documented
- [ ] Framework-specific properties handled correctly

## Error Prevention

### Common Mistakes to Avoid
1. **Don't add explicit margins** unless overriding defaults for content relationships
2. **Don't ignore semantic HTML** - always use `tag` prop for proper heading hierarchy
3. **Don't edit GitHub-sourced metadata** manually
4. **Don't apply systematic changes** to examples/components sections without understanding their complexity
5. **Don't batch update** spacing without testing visual results
6. **Don't assume examples are simple** - they support 4 versions and are reused across contexts

### Validation Steps
1. **Read and understand existing file structure** before making changes
2. **Test with default spacing first** before adding overrides  
3. **Override only for content relationships** that require tighter spacing
4. **Verify semantic heading hierarchy** is maintained
5. **Check spacing on both desktop and mobile** if possible
6. **Ensure changes align with design system principles**

### When to Stop and Ask
- **Examples section changes** beyond simple content updates
- **Component property changes** that affect TypeScript interfaces
- **New component creation** or major architectural changes
- **Version system modifications** 
- **Uncertain about spacing patterns** for specific page types

## Migration from Legacy Patterns

### Identifying Legacy Issues
Look for these patterns that may now create excessive spacing:
```tsx
// LEGACY: May create double spacing
<GoabText size="heading-xl" mt="xl" mb="m">Title</GoabText>

// CURRENT: Trust defaults, override relationships
<GoabText tag="h1" size="heading-xl">Title</GoabText>
<GoabText size="body-l" mt="none">Connected content</GoabText>
```

### Systematic Review Priorities
1. **Page titles and introductions** - Most likely to have excessive spacing
2. **Foundation pages** - Need subtitle categorization and spacing cleanup
3. **Design token pages** - Convert `<h1>` tags to `GoabText`
4. **Container boundaries** - Check for proper edge alignment
5. **Content hierarchies** - Verify proper flow relationships

## Support & Resources

### Key Reference Files
- **Current instructions**: `/CLAUDE.md` - Historical context and spacing evolution
- **GoabText implementation**: `ui-components/libs/web-components/src/components/text/Text.svelte`
- **Common properties**: `src/components/component-properties/common-properties.ts`
- **Version constants**: `src/components/version-language-switcher/version-language-constants.ts`

### Testing Your Changes
1. **Start development server**: `npm run dev`
2. **Navigate to affected pages** and verify spacing
3. **Test version switching** if working with examples/components
4. **Check both desktop and mobile** views when possible
5. **Compare with similar pages** for consistency
6. **Verify semantic HTML** in browser dev tools

### Getting Help
- **Review existing similar pages** for established patterns
- **Check design system component documentation** for proper usage
- **Test changes in development environment** before assuming they're correct
- **Refer to this document** for spacing standards and architectural understanding

---

**Remember**: This website is a sophisticated, multi-version, GitHub-integrated documentation platform. The GoabText defaults provide excellent starting points - your job is to override intelligently for content relationships and maintain the semantic HTML structure that makes the site accessible and SEO-friendly. Always prioritize user experience and design system principles in your updates.