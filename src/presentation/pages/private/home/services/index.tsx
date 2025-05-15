interface Service {
  title: string;
  description: string;
}

interface ServicesProps {
  services: Service[];
}

export const Services = ({ services }: ServicesProps) => {
  return (
    <section id="services" className="px-10 py-16 ">
      <h2 className="text-2xl font-bold mb-8">Nossos Serviços</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div key={idx} className={"p-6 rounded-xl shadow" + (idx === 0 ? " border-l-4 border-primary" : "") }>
            <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
            <p className="text-gray-500 text-sm">{service.description}</p>
            <a href="#contact" className="text-primary mt-4 inline-block">Saiba mais</a>
          </div>
        ))}
      </div>
    </section>
  );
};