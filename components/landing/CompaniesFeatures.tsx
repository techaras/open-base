export function CompaniesFeatures() {
  const features = [
    {
      title: "First-person human demonstration videos",
    },
    {
      title: "Quality-reviewed before delivery",
    },
    {
      title: "Diverse environments and tasks",
    },
    {
      title: "Start with a 50-hour pilot",
    },
  ];

  return (
    <section className="py-16 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-left">
            <h3 className="font-medium">{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}