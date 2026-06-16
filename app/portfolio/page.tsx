import HeroBanner from '@/components/HeroBanner';

const portfolioItems = [
  { title: 'Annotated Autonomous Vehicle Data', description: 'High-resolution video labeling for lane detection and object tracking.', label: 'Demo Project' },
  { title: 'Healthcare Imaging Pipeline', description: 'Segmentation and quality control for medical image datasets.', label: 'Internal Project' },
  { title: 'Retail Shelf Analysis', description: 'Product recognition and inventory alerts using vision AI.', label: 'Sample Project' }
];

export default function PortfolioPage() {
  return (
    <main>
      <HeroBanner title="Portfolio" subtitle="Selected projects and case studies" image="/images/img_portfolio.jpg" height={140} />
      <section className="container py-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Portfolio</p>
          <h1 className="text-5xl font-semibold text-white">Demo projects that show how our AI capabilities work.</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            We label these projects clearly as demos, internal work, and sample applications while we build client case studies.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <div key={item.title} className="card p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">{item.label}</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
