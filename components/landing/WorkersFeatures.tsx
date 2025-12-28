export function WorkersFeatures() {
  const features = [
    {
      title: "Work from anywhere in the world",
    },
    {
      title: "No prior experience required",
    },
    {
      title: "Work flexible hours from anywhere",
    },
    {
      title: "Get paid weekly via PayPal",
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