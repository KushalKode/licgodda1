// Future JavaScript functionality can go here
console.log("LIC Website Loaded Successfully!");
// Automatically highlight "Zindagi Se Jod Ke" everywhere in the website
document.body.innerHTML = document.body.innerHTML.replace(
  /Zindagi Se Jod Ke/g,
  '<span class="highlight">Zindagi Se Jod Ke</span>'
);
document.addEventListener('mousemove', e=>{
  document.querySelectorAll('.btn-gradient').forEach(btn=>{
    const r = btn.getBoundingClientRect();
    btn.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    btn.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });
});
