export default function Logo() {
  return (
    <h1
      className="text-2xl md:text-3xl lg:text-4xl font-bold font-logo"
      style={{
        letterSpacing: '0.04em',
        color: 'var(--logo-text-color)',
      }}
    >
      <span>narr</span>
      <span
        style={{
          color: 'var(--logo-accent-color)',
          fontFamily: "'Fira Sans', sans-serif",
          marginLeft: '-0.1em',
        }}
      >
        A
      </span>
      <span style={{ color: 'var(--logo-accent-color)' }}>I</span>
      <span>ve</span>
    </h1>
  )
}
