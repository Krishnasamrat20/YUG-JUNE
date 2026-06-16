import HeroBanner from '@/components/HeroBanner';

export default function AutonomousVehiclesPage() {
  return (
    <main>
      <HeroBanner title="Autonomous Vehicles" subtitle="Perception and sensing data pipelines" image="/images/img_autonomous.jpg" height={140} />
      <section className="container py-12">
        <div className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Autonomous Vehicles</p>
          <h1 className="text-5xl font-semibold text-white">Edge-ready datasets for self-driving systems.</h1>
          <p className="text-lg leading-8 text-slate-300">
            Labeling video, lidar, and sensor data with consistent taxonomy for perception, tracking, and scene understanding.
          </p>
        </div>
      </section>
    </main>
  );
}
