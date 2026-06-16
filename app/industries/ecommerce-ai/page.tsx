import HeroBanner from '@/components/HeroBanner';

export default function EcommerceAIPage() {
  return (
    <main>
      <HeroBanner title="E-commerce AI" subtitle="Product tagging, search relevance, and personalization" image="/images/img_retail.jpg" height={140} />
      <section className="container py-12">
        <div className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">E-commerce AI</p>
          <h1 className="text-5xl font-semibold text-white">AI-powered experience optimization for commerce.</h1>
          <p className="text-lg leading-8 text-slate-300">
            We support catalog intelligence, search relevance, inventory analysis, and product recognition with curated training data.
          </p>
        </div>
      </section>
    </main>
  );
}
