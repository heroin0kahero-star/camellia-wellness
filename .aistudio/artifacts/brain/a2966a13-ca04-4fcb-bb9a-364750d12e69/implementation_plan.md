# Camellia Magnetic CTA Buttons Plan

Upgrade all primary and secondary CTA buttons across the Camellia Cosmetics & Wellness Centre website with a refined, Codrops Demo 2-inspired magnetic pull, inner text parallax, and rising burgundy/champagne fill sweep.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The specifications below reflect your confirmed Phase 1 choices so the interaction feels native to Camellia's Modern Heritage Aesthetics identity.

- **Confirmed Decision 1 — Global CTA Scope**: Apply the magnetic interaction to every primary, secondary, outline, ivory, and dark-surface CTA across the site, including the desktop Header `Book Appointment` action and all page/form buttons.
- **Confirmed Decision 2 — Shape & Palette Alignment**: Preserve Camellia's existing crisp rectangular luxury silhouette while using Deep Burgundy (`#3B252B`) and Antique Champagne (`#B69A70`) for the rising Demo 2 fill sweep and high-contrast text transitions.
- **Confirmed Decision 3 — Magnetic Intensity**: Use a subtle, restrained magnetic displacement with gentle inner-label parallax so controls feel responsive and composed rather than bouncy or distracting.

---

## 1. Overview & Core Concept

- **What It Does**: Transforms static CTA buttons and navigation actions into tactile magnetic controls that gently gravitate toward the cursor within their hover bounds while sweeping an internal color fill upward from the bottom edge and sliding the label cleanly on entry and exit.
- **Target Audience / Persona**: Desktop visitors interacting with primary and secondary calls-to-action across editorial pages, treatment directories, and the appointment enquiry form.
- **Key Value**: Brings bespoke, high-craft studio micro-interactions to Camellia's CTAs while maintaining strict WCAG AA contrast, single-line label discipline, and zero-layout-shift accessibility.

---

## 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Hover Enter**: As a desktop pointer enters a CTA button, an internal filler layer sweeps smoothly upward from bottom to top (`100% -> 0%`), the label shifts smoothly to maintain contrast, and the button + inner label track the cursor with subtle lerped magnetic parallax.
  2. **Hover Leave**: Moving the pointer away releases the magnetic spring back to center (`0, 0`) while the internal filler continues sweeping out upward (`0% -> -100%`), mirroring Codrops Demo 2's directional continuity.
  3. **Keyboard & Touch Use**: Keyboard focus triggers a crisp focus ring and accessible contrast state without unexpected position shifting; touch devices and `prefers-reduced-motion: reduce` users receive standard instant transitions.
- **Visual Identity & Theme**:
  - *Primary Variant (`#3B252B` Burgundy base, `#F6F1E9` text)*: Sweeps **Antique Champagne (`#B69A70`)** upward with **Dark Ink (`#25221F`)** label transition.
  - *Secondary Variant (`#E9DCD5` Soft Blush base, `#3B252B` text)*: Sweeps **Deep Burgundy (`#3B252B`)** upward with **Warm Ivory (`#F6F1E9`)** label transition.
  - *Outline Variant (Transparent base, `#3B252B` text/border)*: Sweeps **Deep Burgundy (`#3B252B`)** upward with **Warm Ivory (`#F6F1E9`)** label transition.
  - *Ivory & Ghost-Light Variants (on dark `#3B252B` Appointment CTA bands)*: Sweeps **Antique Champagne (`#B69A70`)** upward with **Dark Ink (`#25221F`)** label transition so dark-band CTAs showcase the same sweep without class overrides masking the effect.
- **Interactive Feedback & Motion**:
  - Runs a lightweight, per-button `requestAnimationFrame` lerp loop (`lerpFactor = 0.14`) only while hovered or settling back to rest—consuming zero background CPU when idle.
  - Bounds magnetic offset to subtle limits (`~9px` horizontal, `~5px` vertical for outer frame; `~5px` / `~3px` for inner label) to keep adjacent layouts visually calm.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1 — Lightweight Lerp Hook + CSS Transform Sweep vs. External GSAP Dependency**:
  - *Chosen Approach*: Implement magnetic pointer tracking via a dedicated React `requestAnimationFrame` lerp utility and animate the rising fill sweep + label shift via GPU-composited `transform` transitions.
  - *Why*: Avoids adding external tweening runtime overhead, integrates natively with `react-router-dom` `<Link>`, `<a>`, and `<button>` elements, and cleanly handles React 19 lifecycle teardown and `disabled` states.
  - *Alternatives Considered*: Importing GSAP solely for button hover tweens (unnecessary bundle weight for a localized interaction).
- **Decision 2 — Explicit `ivory` Variant for Dark-Section CTAs**:
  - *Chosen Approach*: Add a dedicated `ivory` button variant rather than overriding background utilities with `!bg-[#F6F1E9]`.
  - *Why*: Utility overrides on the outer button background mask internal filler layers; an explicit variant lets the rising champagne sweep layer cleanly above the ivory surface.

---

## 4. Technical Architecture & Data Strategy *(Technical Reference)*

- **Architecture & Component Diagram**:

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                    Shared Magnetic Button Engine                        │
│  • Tracks fine-pointer coordinates relative to button center            │
│  • Runs bounded rAF lerp loop on hover/settle only                      │
│  • Drives directional fill sweep (bottom -> center -> top exit)         │
└───────────────────────────────┬─────────────────────────────────────────┘
                                │
         ┌──────────────────────┼──────────────────────┐
         ▼                      ▼                      ▼
┌─────────────────┐   ┌───────────────────┐   ┌──────────────────┐
│ Header Desktop  │   │ Page & Category   │   │ Appointment CTA  │
│ Book Action     │   │ Primary / Outline │   │ & Contact Submit │
│ (primary)       │   │ CTAs              │   │ (ivory / ghost)  │
└─────────────────┘   └───────────────────┘   └──────────────────┘
```

- **Interactive Component & State Mapping**:
  - **Outer Interactive Surface**: Measures `getBoundingClientRect()` on pointer enter/move, applies subtle `translate3d(tx, ty, 0)` on the container, and resets smoothly to `(0, 0)` on pointer leave or button `disabled` state.
  - **Filler Layer**: Positioned beneath the text layer (`z-0`) inside an `overflow-hidden` container; tracks hover state (`idle -> entering -> leaving`) so exiting sweeps upward (`-100%`) before resetting invisibly to `+100%` at rest.
  - **Inner Content Layer**: Positioned at `z-10` with subtle differential parallax (`0.55x` of outer offset) and smooth color transition matching the active fill layer.
