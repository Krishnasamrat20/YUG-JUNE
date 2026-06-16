import HeroBanner from '@/components/HeroBanner';

export default function AIDataCollectionPage() {
  return (
    <main>
      <HeroBanner title="AI Data Collection" subtitle="Custom capture and dataset creation" image="/images/img_industries.jpg" height={140} />
      <section className="container py-12">
        <div className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">AI Data Collection</p>
          <h1 className="text-5xl font-semibold text-white">Collecting the right data for your AI vision.</h1>
          <p className="text-lg leading-8 text-slate-300">
            We design capture workflows, gather domain-specific examples, and build datasets that are trained for model performance and production viability.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-white">Capture Design</h2>
            <p className="mt-3 text-slate-300">Define the data types, scenarios, and annotation requirements for robust model training.</p>
          </div>
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-white">Dataset Build</h2>
            <p className="mt-3 text-slate-300">Curate balanced, clean data with privacy-safe collection and dataset validation.</p>
          </div>
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-white">Delivery</h2>
            <p className="mt-3 text-slate-300">Structured outputs ready for training, evaluation, and continuous improvement cycles.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
