let index = 0,
    interval = 1000;

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const animate = particle => {
    particle.style.setProperty('--particle_left', `${rand(-10, 100)}%`);
    particle.style.setProperty('--particle_top', `${rand(-40, 80)}%`);
    
    particle.style.animation = 'none';
    particle.offsetHeight;
    particle.style.animation = '';
}

for (const particle of document.getElementsByClassName('particle')) {
    setTimeout(() => {
        animate(particle);

        setInterval(() => animate(particle), interval);
    }, index++ * (interval / 3))
}
