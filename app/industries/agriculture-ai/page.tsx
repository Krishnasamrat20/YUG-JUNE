import HeroBanner from '@/components/HeroBanner';

export default function AgricultureAIPage() {
  return (
    <main>
      <HeroBanner title="Agriculture AI" subtitle="AI solutions for farming and crop analytics" image="/images/img_agriculture.jpg" height={140} />
      <section className="container py-12">
        <div className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Agriculture AI</p>
          <h1 className="text-5xl font-semibold text-white">Data solutions for precision agriculture.</h1>
          <p className="text-lg leading-8 text-slate-300">
            We collect and label imagery, annotations, and sensor time series data to support crop monitoring and automation models.
          </p>
        </div>
      </section>
    </main>
  );
}
