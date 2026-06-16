import HeroBanner from '@/components/HeroBanner';

export default function SurveillanceAIPage() {
  return (
    <main>
      <HeroBanner title="Surveillance AI" subtitle="Video analytics and event detection" image="/images/img_surveillance.jpg" height={140} />
      <section className="container py-12">
        <div className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Surveillance AI</p>
          <h1 className="text-5xl font-semibold text-white">Accurate annotations for security and monitoring systems.</h1>
          <p className="text-lg leading-8 text-slate-300">
            We enable reliable object detection, behavior analysis, and incident review through audited annotation pipelines.
          </p>
        </div>
      </section>
    </main>
  );
}
