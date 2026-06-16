import HeroBanner from '@/components/HeroBanner';

export default function HealthcareAIPage() {
  return (
    <main>
      <HeroBanner title="Healthcare AI" subtitle="Clinical data labeling and evaluation" image="/images/img_healthcare.jpg" height={140} />
      <section className="container py-12">
        <div className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Healthcare AI</p>
          <h1 className="text-5xl font-semibold text-white">AI pipelines for sensitive healthcare data.</h1>
          <p className="text-lg leading-8 text-slate-300">
            We annotate medical images, transcribe clinical audio, and evaluate models with privacy and accuracy built in.
          </p>
        </div>
      </section>
    </main>
  );
}
