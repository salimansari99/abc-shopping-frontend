export default function USPStrip() {
  const items = [
    { title: "Premium Quality", desc: "Crafted with finest materials" },
    { title: "Free Shipping", desc: "On orders over $99" },
    { title: "Easy Returns", desc: "14-day hassle-free returns" },
    { title: "Secure Payments", desc: "100% encrypted checkout" },
  ];

  return (
    <section className="border-y bg-gray-50">
      <div className="container mx-auto grid grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="text-center">
            <h4 className="text-sm font-semibold">{item.title}</h4>
            <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
