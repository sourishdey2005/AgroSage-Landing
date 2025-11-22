import { IndianRupee } from "lucide-react";

const impactData = [
  { value: "1.2M+", label: "Farmers Empowered", description: "Lives touched across 15 states." },
  { value: "18%", label: "Average Yield Increase", description: "Boosting productivity with AI." },
  { value: "₹5B+", label: "Loans Disbursed", description: "Facilitating credit through data." },
];

export default function ImpactNumbers() {
  return (
    <section id="impact" className="bg-muted">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our Impact in Numbers
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            Quantifying our contribution to India's agricultural revolution.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          {impactData.map((item, index) => (
            <div key={index} className="rounded-lg bg-card p-8 shadow-lg shadow-black/10">
              <p className="font-headline text-5xl font-bold text-primary">{item.value}</p>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{item.label}</h3>
              <p className="mt-2 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
