import Link from 'next/link';

export default function Home() {
  return (
    <main style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #0f2a4f, #123a6f)',
      fontFamily: 'Arial, sans-serif',
      color: '#fff',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'rgba(0,0,0,0.5)',
        padding: '40px 30px',
        borderRadius: '12px',
        boxShadow: '0 0 20px rgba(0,0,0,0.5)',
        maxWidth: '400px',
        width: '100%'
      }}>
        <h1 style={{ fontSize: '2.5em', marginBottom: '20px', textShadow: '2px 2px 5px #000' }}>
          CircleSurvival 3D
        </h1>
        <p style={{ marginBottom: '30px', lineHeight: '1.4' }}>
          Survive endless enemies, defeat bosses, collect power-ups, and become the ultimate survivor! Are you ready?
        </p>
        <Link href="/game" style={{
          display: 'inline-block',
          padding: '15px 30px',
          fontSize: '1.2em',
          color: '#fff',
          background: 'linear-gradient(45deg, #00eaff, #0ff)',
          borderRadius: '8px',
          textDecoration: 'none',
          boxShadow: '0 4px 15px rgba(0,234,255,0.5)',
          transition: 'all 0.3s ease'
        }}>
          ▶ Play Now
        </Link>
      </div>
    </main>
  )
}
