const ITEMS = [
  'Server & Storage',
  'Backup & Recovery',
  'Firewall Security',
  'Virtualization & VDI',
  'Structured Cabling',
  'Wireless Networks',
  'IP Telephony',
  'Cloud Computing',
];

export default function Marquee() {
  // Content rendered twice so the -50% translate loops seamlessly.
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee anim-scope" aria-hidden="true">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i} className="marquee-item">
            {t} <i className="marquee-sep" />
          </span>
        ))}
      </div>
    </div>
  );
}
