# motion-suite

motion-suite is a lightweight animation toolkit for React + Framer Motion.

It provides 20+ production-ready animations including fade, slide, scale, blur, scroll-triggered, stagger sequences, and interaction effects.  
Ideal for landing pages, dashboards, UI libraries, and modern frontend apps.

---

## Features

- 20+ reusable animation components  
- Fade, slide, scale, blur, pop, stagger, scroll animations  
- Global animation config (`duration`, `distance`, `delay`, `easing`)  
- Works instantly with zero setup  
- Fully typed for TypeScript  
- Built on top of Framer Motion  
- Lightweight & production-ready  

---

## Installation

```bash
npm install motion-suite framer-motion
```

Or:

```bash
yarn add motion-suite framer-motion
```

---

## Quick Start

```tsx
import { FadeUp } from "motion-suite";

<FadeUp>
  <div>Hello World</div>
</FadeUp>
```

All animations support:

- `delay`
- `duration`
- global config fallback

---

## Global Animation Config

Customize all animations from one place.

```tsx
import { setMotionConfig } from "motion-suite";

setMotionConfig({
  duration: 0.45,
  distance: 30,
  delay: 0.1,
  easing: [0.4, 0, 0.2, 1]
});
```

Now every animation updates instantly across your app.

---

## Available Animations

### Fade Animations
- `FadeIn`
- `FadeUp`
- `FadeDown`
- `FadeLeft`
- `FadeRight`

### Scale & Pop
- `ScaleIn`
- `PopIn`

### Blur
- `BlurIn`

### Slide
- `SlideLeft`
- `SlideRight`

### Scroll-triggered animations
- `ScrollFadeUp`
- `ScrollBlurIn`
- `ScrollStaggerList`

### Stagger Animations
- `StaggerList`
- `StaggerFade`

### Interaction Animations
- `HoverPop`
- `TapPress`

---

## Examples

### Fade + Slide Combo

```tsx
import { FadeUp, SlideLeft } from "motion-suite";

<SlideLeft delay={0.1}>
  <FadeUp>
    <h1>Welcome to motion-suite</h1>
  </FadeUp>
</SlideLeft>
```

### Scroll-triggered animation

```tsx
import { ScrollFadeUp } from "motion-suite";

<ScrollFadeUp>
  <section>Your content appears on scroll</section>
</ScrollFadeUp>
```

### PopIn (for cards, buttons, modals)

```tsx
import { PopIn } from "motion-suite";

<PopIn>
  <button>Click me</button>
</PopIn>
```

### Stagger List

```tsx
import { StaggerList } from "motion-suite";

<StaggerList delay={0.2}>
  {["One", "Two", "Three"].map(item => (
    <div key={item}>{item}</div>
  ))}
</StaggerList>
```

---

## API

All animations share:

```tsx
delay?: number
duration?: number
children: ReactNode
```

Global config:

```tsx
setMotionConfig({
  duration?: number,
  delay?: number,
  distance?: number,
  easing?: [number, number, number, number]
})
```

---

## Roadmap

- Variants API  
- Layout transitions  
- Exit animations  
- Carousel + reveal components  
- Next.js demo website  

---

## Why motion-suite?

- Zero-setup  
- Developer-friendly  
- Predictable, consistent animations  
- Great defaults + high flexibility  
- Works in every React environment (Next.js, Vite, CRA, Remix)  

---

## License

MIT © Motion Kit
