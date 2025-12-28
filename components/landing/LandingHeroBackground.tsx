interface LandingHeroBackgroundProps {
  children: React.ReactNode;
  variant: "workers" | "companies";
}

export function LandingHeroBackground({ children, variant }: LandingHeroBackgroundProps) {
  const gradients = {
    workers: {
      gradient1: "rgba(139,92,246,0.2)", // purple
      gradient2: "rgba(59,130,246,0.2)", // blue
    },
    companies: {
      gradient1: "rgba(16,185,129,0.2)", // emerald/green
      gradient2: "rgba(14,165,233,0.2)", // sky blue
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
            radial-gradient(circle 500px at 20% 100%, ${colors.gradient1}, transparent),
            radial-gradient(circle 500px at 100% 80%, ${colors.gradient2}, transparent)
          `,
          backgroundSize: "72px 72px, 72px 72px, 100% 100%, 100% 100%",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 100%, #000 80%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 100%, #000 80%, transparent 100%)",
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}