import HeroBanner from '@/components/HeroBanner';

export default function AIDevelopmentPage() {
  return (
    <main>
      <HeroBanner title="AI Development" subtitle="End-to-end ML products and pipelines" image="/images/img_fullstack.jpg" height={140} />
      <section className="container py-12">
        <div className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">AI Development</p>
          <h1 className="text-5xl font-semibold text-white">Build AI applications with engineering and product focus.</h1>
          <p className="text-lg leading-8 text-slate-300">
            From prototypes to production, we implement models, APIs, and pipelines that support reliable inference and iteration.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-white">Model integration</h2>
            <p className="mt-3 text-slate-300">Connect your models to applications, dashboards, and inference infrastructure.</p>
          </div>
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-white">Deployment</h2>
            <p className="mt-3 text-slate-300">Production-ready deployment with monitoring, security, and versioning.</p>
          </div>
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-white">Iteration support</h2>
            <p className="mt-3 text-slate-300">Fine-tuning, retraining, and continuous improvement based on real data.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
