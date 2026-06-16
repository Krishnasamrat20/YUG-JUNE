import React from 'react';

export default function HeroBanner({
  title,
  subtitle,
  image = '/images/hero.jpg',
  height = 160
}: {
  title?: string;
  subtitle?: string;
  image?: string;
  height?: number;
}) {
  return (
    <div className="relative rounded-lg overflow-hidden mb-6">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(7,16,36,0.55), rgba(7,16,36,0.55)), url('${image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: height
        }}
        className="w-full image-transition"
      />
      {(title || subtitle) && (
        <div className="absolute left-6 bottom-6 text-white">
          {title && <h2 className="text-2xl font-semibold">{title}</h2>}
          {subtitle && <p className="mt-1 text-sm text-slate-200">{subtitle}</p>}
        </div>
      )}
    </div>
  );
}
