import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
}
declare function FadeIn({ children, delay, duration }: FadeInProps): react_jsx_runtime.JSX.Element;

interface FadeUpProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
}
declare function FadeUp({ children, delay, duration }: FadeUpProps): react_jsx_runtime.JSX.Element;

interface FadeDownProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
}
declare function FadeDown({ children, delay, duration }: FadeDownProps): react_jsx_runtime.JSX.Element;

interface FadeLeftProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
}
declare function FadeLeft({ children, delay, duration }: FadeLeftProps): react_jsx_runtime.JSX.Element;

interface FadeRightProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
}
declare function FadeRight({ children, delay, duration }: FadeRightProps): react_jsx_runtime.JSX.Element;

interface ScaleInProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
}
declare function ScaleIn({ children, delay, duration }: ScaleInProps): react_jsx_runtime.JSX.Element;

interface PopInProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
}
declare function PopIn({ children, delay, duration }: PopInProps): react_jsx_runtime.JSX.Element;

interface BlurInProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
}
declare function BlurIn({ children, delay, duration }: BlurInProps): react_jsx_runtime.JSX.Element;

interface SlideLeftProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
}
declare function SlideLeft({ children, delay, duration }: SlideLeftProps): react_jsx_runtime.JSX.Element;

interface SlideRightProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
}
declare function SlideRight({ children, delay, duration }: SlideRightProps): react_jsx_runtime.JSX.Element;

interface ScrollFadeUpProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
}
declare function ScrollFadeUp({ children, delay, duration }: ScrollFadeUpProps): react_jsx_runtime.JSX.Element;

interface ScrollBlurInProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
}
declare function ScrollBlurIn({ children, delay, duration }: ScrollBlurInProps): react_jsx_runtime.JSX.Element;

interface ScrollStaggerListProps {
    children: React.ReactNode[];
    delay?: number;
}
declare function ScrollStaggerList({ children, delay }: ScrollStaggerListProps): react_jsx_runtime.JSX.Element;

interface StaggerListProps {
    children: ReactNode[];
    delay?: number;
}
declare function StaggerList({ children, delay }: StaggerListProps): react_jsx_runtime.JSX.Element;

interface StaggerFadeProps {
    children: ReactNode[];
    delay?: number;
}
declare function StaggerFade({ children, delay }: StaggerFadeProps): react_jsx_runtime.JSX.Element;

interface HoverPopProps {
    children: ReactNode;
    scale?: number;
}
declare function HoverPop({ children, scale }: HoverPopProps): react_jsx_runtime.JSX.Element;

interface TapPressProps {
    children: ReactNode;
    scale?: number;
}
declare function TapPress({ children, scale }: TapPressProps): react_jsx_runtime.JSX.Element;

export { BlurIn, FadeDown, FadeIn, FadeLeft, FadeRight, FadeUp, HoverPop, PopIn, ScaleIn, ScrollBlurIn, ScrollFadeUp, ScrollStaggerList, SlideLeft, SlideRight, StaggerFade, StaggerList, TapPress };
