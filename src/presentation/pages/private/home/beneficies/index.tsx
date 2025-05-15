interface Benefit {
  title: string;
  description: string;
}

interface BeneficiesProps {
  benefits: Benefit[];
}

export const Beneficies = ({ benefits }: BeneficiesProps) => {
  return (
    <section id="benefits" className="px-10 py-16 ">
      <h2 className="text-2xl font-bold mb-8">Por que escolher a VazCode?</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {benefits.map((benefit, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
            <p className="text-gray-600 text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};