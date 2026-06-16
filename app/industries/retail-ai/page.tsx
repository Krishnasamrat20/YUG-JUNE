import HeroBanner from '@/components/HeroBanner';

export default function RetailAIPage() {
  return (
    <main>
      <HeroBanner title="Retail AI" subtitle="Inventory, visual search, and demand forecasting" image="/images/img_retail.jpg" height={140} />
      <section className="container py-12">
        <div className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Retail AI</p>
          <h1 className="text-5xl font-semibold text-white">Computer vision and analytics for retail operations.</h1>
          <p className="text-lg leading-8 text-slate-300">
            We support product recognition, inventory monitoring, and customer experience datasets for retail AI systems.
          </p>
        </div>
      </section>
    </main>
  );
}
