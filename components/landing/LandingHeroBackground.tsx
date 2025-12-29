interface LandingHeroBackgroundProps {
  children: React.ReactNode;
  variant: "workers" | "companies";
}

export function LandingHeroBackground({ children, variant }: LandingHeroBackgroundProps) {
  const gradients = {
    workers: {
      gradient1: "rgba(255,131,66,0.15)", // purple
      gradient2: "rgba(254,89,17,0.15)", // blue
    },
    companies: {
      gradient1: "rgba(85,58,254,0.15)", // emerald/green
      gradient2: "rgba(64,33,225,0.15)", // sky blue
    },
  };

  const colors = gradients[variant];

  return (
    <div className="w-full bg-white relative">
      {/* Dual Gradient Overlay (Bottom) Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
            radial-gradient(circle 500px at 20% 30%, ${colors.gradient1}, transparent),
            radial-gradient(circle 500px at 75% 70%, ${colors.gradient2}, transparent)
          `,
          backgroundSize: "72px 72px, 72px 72px, 100% 100%, 100% 100%",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}