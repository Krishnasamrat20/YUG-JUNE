import HeroBanner from '@/components/HeroBanner';

export default function FullStackDevelopmentPage() {
  return (
    <main>
      <HeroBanner title="Full Stack Development" subtitle="Secure web and backend systems for AI workflows" image="/images/img_fullstack.jpg" height={140} />
      <section className="container py-12">
        <div className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Full Stack Development</p>
          <h1 className="text-5xl font-semibold text-white">Web and backend systems for modern AI solutions.</h1>
          <p className="text-lg leading-8 text-slate-300">
            We deliver full stack software layered on top of your AI models, including dashboards, APIs, integrations, and data ops tooling.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-white">Frontend</h2>
            <p className="mt-3 text-slate-300">User experiences for model workflows, review tools, and operations dashboards.</p>
          </div>
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-white">Backend</h2>
            <p className="mt-3 text-slate-300">Secure APIs, data pipelines, and integrations for your AI platform.</p>
          </div>
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-white">Operations</h2>
            <p className="mt-3 text-slate-300">Monitoring, automation, and support for continuous delivery and data management.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
