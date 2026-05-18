'use client';

export type WaechterMood = 'idle' | 'happy' | 'celebrate' | 'sad' | 'thinking' | 'wave';

type Props = {
  mood?: WaechterMood;
  size?: number;
  className?: string;
};

export default function Waechter({ mood = 'idle', size = 80, className }: Props) {
  const s = size;
  const cx = s / 2;

  // Expression params per mood
  const expressions: Record<WaechterMood, {
    eyebrowL: string; eyebrowR: string;
    eyeL: string; eyeR: string;
    mouth: string;
    extra?: React.ReactNode;
  }> = {
    idle: {
      eyebrowL: `M${cx-18},${s*0.32} Q${cx-12},${s*0.29} ${cx-6},${s*0.32}`,
      eyebrowR: `M${cx+6},${s*0.32} Q${cx+12},${s*0.29} ${cx+18},${s*0.32}`,
      eyeL: `${cx-12},${s*0.41}`,
      eyeR: `${cx+12},${s*0.41}`,
      mouth: `M${cx-10},${s*0.55} Q${cx},${s*0.61} ${cx+10},${s*0.55}`,
    },
    happy: {
      eyebrowL: `M${cx-18},${s*0.30} Q${cx-12},${s*0.26} ${cx-6},${s*0.30}`,
      eyebrowR: `M${cx+6},${s*0.30} Q${cx+12},${s*0.26} ${cx+18},${s*0.30}`,
      eyeL: `${cx-12},${s*0.40}`,
      eyeR: `${cx+12},${s*0.40}`,
      mouth: `M${cx-12},${s*0.53} Q${cx},${s*0.62} ${cx+12},${s*0.53}`,
    },
    celebrate: {
      eyebrowL: `M${cx-18},${s*0.28} Q${cx-12},${s*0.24} ${cx-6},${s*0.28}`,
      eyebrowR: `M${cx+6},${s*0.28} Q${cx+12},${s*0.24} ${cx+18},${s*0.28}`,
      eyeL: `${cx-12},${s*0.38}`,
      eyeR: `${cx+12},${s*0.38}`,
      mouth: `M${cx-14},${s*0.52} Q${cx},${s*0.64} ${cx+14},${s*0.52}`,
      extra: (
        <>
          <text x={cx-22} y={s*0.18} fontSize={s*0.14} textAnchor="middle">⭐</text>
          <text x={cx+22} y={s*0.18} fontSize={s*0.14} textAnchor="middle">⭐</text>
        </>
      ),
    },
    sad: {
      eyebrowL: `M${cx-18},${s*0.34} Q${cx-12},${s*0.38} ${cx-6},${s*0.34}`,
      eyebrowR: `M${cx+6},${s*0.34} Q${cx+12},${s*0.38} ${cx+18},${s*0.34}`,
      eyeL: `${cx-12},${s*0.43}`,
      eyeR: `${cx+12},${s*0.43}`,
      mouth: `M${cx-10},${s*0.58} Q${cx},${s*0.52} ${cx+10},${s*0.58}`,
    },
    thinking: {
      eyebrowL: `M${cx-18},${s*0.31} Q${cx-12},${s*0.28} ${cx-6},${s*0.32}`,
      eyebrowR: `M${cx+6},${s*0.28} Q${cx+12},${s*0.25} ${cx+18},${s*0.30}`,
      eyeL: `${cx-12},${s*0.41}`,
      eyeR: `${cx+12},${s*0.40}`,
      mouth: `M${cx-8},${s*0.56} Q${cx+2},${s*0.54} ${cx+10},${s*0.57}`,
      extra: (
        <text x={cx+16} y={s*0.22} fontSize={s*0.18} textAnchor="middle">💭</text>
      ),
    },
    wave: {
      eyebrowL: `M${cx-18},${s*0.30} Q${cx-12},${s*0.26} ${cx-6},${s*0.30}`,
      eyebrowR: `M${cx+6},${s*0.30} Q${cx+12},${s*0.26} ${cx+18},${s*0.30}`,
      eyeL: `${cx-12},${s*0.40}`,
      eyeR: `${cx+12},${s*0.40}`,
      mouth: `M${cx-12},${s*0.53} Q${cx},${s*0.62} ${cx+12},${s*0.53}`,
      extra: (
        <text x={cx+s*0.3} y={s*0.45} fontSize={s*0.22} textAnchor="middle"
              style={{ animation: 'wBob 1.5s ease-in-out infinite' }}>👋</text>
      ),
    },
  };

  const expr = expressions[mood];
  const eyeR = s * 0.055;

  // Shield path scaled to size
  const shieldPath = `
    M${cx},${s*0.04}
    L${s*0.86},${s*0.18}
    L${s*0.86},${s*0.52}
    Q${s*0.86},${s*0.82} ${cx},${s*0.97}
    Q${s*0.14},${s*0.82} ${s*0.14},${s*0.52}
    L${s*0.14},${s*0.18}
    Z
  `;

  const facePath = `
    M${cx},${s*0.16}
    L${s*0.80},${s*0.26}
    L${s*0.80},${s*0.50}
    Q${s*0.80},${s*0.72} ${cx},${s*0.84}
    Q${s*0.20},${s*0.72} ${s*0.20},${s*0.50}
    L${s*0.20},${s*0.26}
    Z
  `;

  // Bottom emblem (check mark area)
  const emblemCx = cx;
  const emblemCy = s * 0.76;
  const emblemR = s * 0.10;

  return (
    <svg
      width={s}
      height={s}
      viewBox={`0 0 ${s} ${s}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ overflow: 'visible' }}
    >
      {/* Shadow */}
      <ellipse cx={cx} cy={s*0.95} rx={s*0.28} ry={s*0.04}
               fill="rgba(0,0,0,0.12)"/>

      {/* Shield body — MS Direct Red */}
      <path d={shieldPath} fill="#E11D2E"/>
      {/* Shield shine */}
      <path d={shieldPath}
            fill="url(#shieldShine)"
            opacity="0.3"/>

      {/* Face area — warm white */}
      <path d={facePath} fill="#FFF8F0"/>

      {/* Emblem / wappen at bottom */}
      <circle cx={emblemCx} cy={emblemCy} r={emblemR} fill="#E11D2E"/>
      <path
        d={`M${emblemCx-emblemR*0.55},${emblemCy+emblemR*0.05} L${emblemCx-emblemR*0.1},${emblemCy+emblemR*0.55} L${emblemCx+emblemR*0.6},${emblemCy-emblemR*0.5}`}
        stroke="#fff" strokeWidth={s*0.024} strokeLinecap="round" strokeLinejoin="round"
      />

      {/* Eyebrows */}
      <path d={expr.eyebrowL} stroke="#1A0A0C" strokeWidth={s*0.025} strokeLinecap="round" fill="none"/>
      <path d={expr.eyebrowR} stroke="#1A0A0C" strokeWidth={s*0.025} strokeLinecap="round" fill="none"/>

      {/* Eyes */}
      <circle cx={parseFloat(expr.eyeL.split(',')[0])} cy={parseFloat(expr.eyeL.split(',')[1])}
              r={eyeR} fill="#1A0A0C"/>
      <circle cx={parseFloat(expr.eyeR.split(',')[0])} cy={parseFloat(expr.eyeR.split(',')[1])}
              r={eyeR} fill="#1A0A0C"/>
      {/* Eye shine */}
      <circle cx={parseFloat(expr.eyeL.split(',')[0])+eyeR*0.35} cy={parseFloat(expr.eyeL.split(',')[1])-eyeR*0.35}
              r={eyeR*0.35} fill="rgba(255,255,255,0.7)"/>
      <circle cx={parseFloat(expr.eyeR.split(',')[0])+eyeR*0.35} cy={parseFloat(expr.eyeR.split(',')[1])-eyeR*0.35}
              r={eyeR*0.35} fill="rgba(255,255,255,0.7)"/>

      {/* Mouth */}
      <path d={expr.mouth} stroke="#1A0A0C" strokeWidth={s*0.028} strokeLinecap="round" fill="none"/>

      {/* Mood-specific extras */}
      {expr.extra}

      {/* Sad tear */}
      {mood === 'sad' && (
        <ellipse cx={parseFloat(expr.eyeL.split(',')[0])+s*0.01}
                 cy={parseFloat(expr.eyeL.split(',')[1])+s*0.05}
                 rx={s*0.024} ry={s*0.034}
                 fill="#5B8DEF" opacity="0.8"/>
      )}

      <defs>
        <linearGradient id="shieldShine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
