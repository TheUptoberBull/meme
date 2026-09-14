const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const progress=document.querySelector('.progress');
window.addEventListener('scroll',()=>{
  const max=document.documentElement.scrollHeight-innerHeight;
  progress.style.width=(scrollY/max*100)+'%';
});
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('seen')});
},{threshold:.12});
document.querySelectorAll('.section,.energy-card,.wheel-step').forEach(el=>observer.observe(el));

// Subtle 3D hero movement on desktop; disabled on touch devices.
const heroVisual = document.querySelector('.hero-visual');
const heroImage = document.querySelector('.hero-visual img');
if (heroVisual && heroImage && window.matchMedia('(pointer:fine)').matches) {
  heroVisual.addEventListener('pointermove', (e) => {
    const r = heroVisual.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    heroImage.style.transform = `translateZ(45px) rotateY(${-x * 10 - 5}deg) rotateX(${y * -7 + 2}deg) translate(${x * 8}px, ${y * 8}px)`;
  });
  heroVisual.addEventListener('pointerleave', () => {
    heroImage.style.transform = 'translateZ(35px) rotateY(-5deg) rotateX(2deg)';
  });
}
