import { memo } from 'react';

const SLICES = 8;

function Rack({ side }) {
  return (
    <div className={`crack crack-${side}`}>
      <span className="crack-frame" />
      <div className="crack-body">
        <span className="rb-head" />
        <span className="rb-vent" />
        <span className="rb-bays" />
        <span className="rb-panel" />
      </div>
      <span className="cled cled-s" />
      <span className="cled cled-g" />
      <span className="cled cled-g2" />
      <span className="cled cled-b" />
      <span className="cled cled-r" />
    </div>
  );
}

// A 3D corridor of server racks rushing toward the viewer.
// Each "slice" = a left + right rack pair flying along Z on a loop.
// Everything animates via transform/opacity only (GPU-composited, no layout or paint per frame).
function ServerCorridor() {
  return (
    <div className="corridor" aria-hidden="true">
      <div className="corridor-light" />
      <div className="scene">
        <div className="world">
          {/* one long floor + ceiling that loop by exactly one slice — far cheaper than a tile per slice */}
          <span className="floor" />
          <span className="ceil" />
          {Array.from({ length: SLICES }, (_, i) => (
            // --i: slot along the corridor; --b: build-up delay (nearest racks build first)
            <div key={i} className="slice" style={{ '--i': i, '--b': `${(SLICES - 1 - i) * 0.12 + 0.2}s` }}>
              <Rack side="l" />
              <Rack side="r" />
            </div>
          ))}
        </div>
      </div>
      <div className="corridor-vignette" />
    </div>
  );
}

export default memo(ServerCorridor);
