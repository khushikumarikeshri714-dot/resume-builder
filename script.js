const home = document.getElementById('home');
const builder = document.getElementById('builder');

function showBuilder(){
  home.classList.add('hidden');
  builder.classList.remove('hidden');
  window.scrollTo({top:0,behavior:'smooth'});
}
function showHome(){
  builder.classList.add('hidden');
  home.classList.remove('hidden');
  window.scrollTo({top:0,behavior:'smooth'});
}
function esc(value){
  return String(value || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}
document.getElementById('resumeForm').addEventListener('submit', function(e){
  e.preventDefault();
  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    location: document.getElementById('location').value,
    summary: document.getElementById('summary').value,
    education: document.getElementById('education').value,
    skills: document.getElementById('skills').value,
    experience: document.getElementById('experience').value
  };
  localStorage.setItem('resumeData', JSON.stringify(data));
  const skillText = data.skills.split(',').map(s=>s.trim()).filter(Boolean).join(' • ');
  document.getElementById('resumePreview').innerHTML = `
    <h1>${esc(data.name) || 'Your Name'}</h1>
    <p class="contact">${esc(data.email)} ${data.phone ? ' • '+esc(data.phone):''} ${data.location ? ' • '+esc(data.location):''}</p>
    <hr>
    <h4>PROFILE</h4><p>${esc(data.summary) || 'Motivated candidate seeking opportunities to apply technical and problem-solving skills.'}</p>
    <h4>EDUCATION</h4><p>${esc(data.education) || '—'}</p>
    <h4>SKILLS</h4><p>${esc(skillText) || '—'}</p>
    <h4>EXPERIENCE / PROJECTS</h4><p>${esc(data.experience) || '—'}</p>
  `;
});
