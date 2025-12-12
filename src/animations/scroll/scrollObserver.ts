export function handleScrollAnimation(
    ref: React.RefObject<HTMLDivElement | null>,
    setVisible: (v: boolean) => void
  ) {
    if (!ref.current) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
  
    observer.observe(ref.current);
  
    return () => {
      observer.disconnect();
    };
  }
  