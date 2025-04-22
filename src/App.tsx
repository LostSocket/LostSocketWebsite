import './App.css';
import Particles from 'react-particles';
import { useCallback } from 'react';
import { loadFull } from 'tsparticles'; // Use loadFull for v2.x
import type { Engine } from 'tsparticles-engine';

function App() {
    // Initialize particles
    const particlesInit = useCallback(async (engine: Engine) => {
        try {
            await loadFull(engine); // Load full tsParticles bundle
        } catch (error) {
            console.error('Failed to initialize tsParticles:', error);
        }
    }, []);

    // Handle particles loaded event
    const particlesLoaded = useCallback(async () => {
        console.log('Particles loaded');
    }, []);

    return (
        <div className="app-container">
            {/* Particle Background */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: '#0d1a26', // Dark, game-like background
                        },
                    },
                    fpsLimit: 60,
                    particles: {
                        number: {
                            value: 80,
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                        },
                        color: {
                            value: ['#ff4d4d', '#4dff4d', '#4d4dff'], // Neon game colors
                        },
                        shape: {
                            type: 'square', // Pixelated, game-like shapes
                        },
                        opacity: {
                            value: 0.5,
                            random: true,
                        },
                        size: {
                            value: 5,
                            random: true,
                        },
                        move: {
                            enable: true,
                            speed: 2,
                            direction: 'none',
                            random: true,
                            outModes: {
                                default: 'out', // Updated for v2.x
                            },
                        },
                    },
                    detectRetina: true,
                }}
            />

            {/* Main Content */}
            <div className="content">
                <h1>Lost Socket Games</h1>
                <p className="construction">Site under construction 🚧. Stay tuned for more!</p>
                <nav className="links">
                    <a href="https://lostsocket.itch.io/" target="_blank" rel="noopener noreferrer">
                        Game Jams
                    </a>
                    <a href="https://www.youtube.com/@lostsocket?themeRefresh=1" target="_blank" rel="noopener noreferrer">
                        YouTube
                    </a>
                    <a href="https://x.com/L05t50ck3t" target="_blank" rel="noopener noreferrer">
                        X (@L05t50ck3t)
                    </a>
                    <a href="mailto:cristian@lostsocket.net">Contact</a>
                    <a href="https://publish.obsidian.md/lostsocket" target="_blank" rel="noopener noreferrer">
                        Blog
                    </a>
                </nav>
            </div>
        </div>
    );
}

export default App;