const sections = [...document.querySelectorAll('.story-section')];
const navLinks = [...document.querySelectorAll('.story-nav a')];
const progressBar = document.querySelector('#progressBar');
const presentButton = document.querySelector('#presentButton');

const speechNotes = {
  cenario: 'Nosso problema não é trazer o cliente até o produto. Ele pesquisa, compara, encontra uma opção adequada e demonstra intenção ao adicionar ao carrinho. A ruptura acontece depois: parte dessa intenção não se transforma em compra. Já investimos para atrair e engajar esse usuário, mas perdemos valor próximo da conversão. O Discovery buscou entender onde essa quebra acontece e qual intervenção devemos testar primeiro.',
  descobertas: 'A jornada mostra que o cliente não chega ao carrinho por acaso. Fernanda já passou por pesquisa, comparação e escolha. O sinal mais consistente é a falta de transparência antecipada sobre frete e prazo. Mas há uma ressalva importante: ainda não podemos afirmar causalidade. Frete é a hipótese mais promissora; checkout, meios de pagamento e outros usos do carrinho exigem novas evidências.',
  solucao: 'Priorizamos as oportunidades por impacto, confiança e facilidade. A primeira aposta é antecipar frete e prazo para a página do produto. O MVP é enxuto: consulta por CEP, valor, prazo e condições de frete grátis. Em vez de redesenhar todo o checkout ou sacrificar margem, vamos remover uma incerteza relevante no momento em que o cliente forma sua decisão.',
  viabilidade: 'A força desta aposta é permitir um experimento controlado antes de um investimento maior. O risco principal é de valor: frete pode não ser a causa dominante. Também podemos antecipar o abandono se nossa entrega for pouco competitiva, ou perder confiança se as estimativas forem imprecisas. Por isso, investimos no menor experimento capaz de transformar hipótese em evidência.',
  metricas: 'Sucesso não é mais gente consultando o frete. Isso é uso, não resultado de negócio. Nossa North Star é a conversão em compra entre usuários que chegam à página de produto. Vamos observar o funil, o abandono, a exposição ao componente, a receita por sessão e o ticket médio. O pedido ao Board é autorização para testar e escalar apenas se o impacto final for comprovado.'
};

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const sectionObserver = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach(link => link.classList.toggle('active', link.dataset.section === visible.target.id));
}, { rootMargin: '-28% 0px -58% 0px', threshold: [0, .2, .5] });
sections.forEach(section => sectionObserver.observe(section));

function updateProgress(){
  const max = document.documentElement.scrollHeight - innerHeight;
  progressBar.style.width = `${max ? (scrollY / max) * 100 : 0}%`;
}
addEventListener('scroll', updateProgress, { passive:true });
updateProgress();

presentButton.addEventListener('click', () => {
  const active = document.body.classList.toggle('presentation-mode');
  presentButton.classList.toggle('active', active);
  presentButton.innerHTML = active ? '<span aria-hidden="true">×</span> Sair' : '<span aria-hidden="true">◫</span> Apresentar';
  presentButton.setAttribute('aria-label', active ? 'Sair do modo apresentação' : 'Ativar modo apresentação');
});

document.addEventListener('keydown', event => {
  if (!document.body.classList.contains('presentation-mode') || !['ArrowDown','ArrowRight','ArrowUp','ArrowLeft'].includes(event.key)) return;
  event.preventDefault();
  const direction = ['ArrowDown','ArrowRight'].includes(event.key) ? 1 : -1;
  const allSlides = [...sections, document.querySelector('.board-ask')];
  const current = allSlides.reduce((best, el, index) => Math.abs(el.getBoundingClientRect().top) < Math.abs(allSlides[best].getBoundingClientRect().top) ? index : best, 0);
  allSlides[Math.max(0, Math.min(allSlides.length - 1, current + direction))].scrollIntoView();
});

const scoreButton = document.querySelector('#toggleScores');
const scoreList = document.querySelector('#scoreList');
scoreButton.addEventListener('click', () => {
  const open = scoreList.hasAttribute('hidden');
  scoreList.toggleAttribute('hidden');
  scoreButton.setAttribute('aria-expanded', String(open));
  scoreButton.textContent = open ? 'Ocultar comparação' : 'Ver comparação';
});

document.querySelectorAll('.risk-row').forEach(row => row.addEventListener('click', () => {
  row.setAttribute('aria-expanded', String(row.getAttribute('aria-expanded') !== 'true'));
}));

const dialog = document.querySelector('#notesDialog');
document.querySelectorAll('[data-open-notes]').forEach(button => button.addEventListener('click', () => {
  const key = button.dataset.openNotes;
  document.querySelector('#noteNumber').textContent = sections.find(s => s.id === key)?.dataset.index || '1';
  document.querySelector('#noteText').textContent = speechNotes[key];
  dialog.showModal();
}));
document.querySelector('#closeNotes').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

const decisionButton = document.querySelector('#decisionButton');
const toast = document.querySelector('#decisionToast');
decisionButton.addEventListener('click', () => {
  toast.classList.add('show');
  decisionButton.textContent = 'Experimento aprovado ✓';
  decisionButton.disabled = true;
  setTimeout(() => toast.classList.remove('show'), 4200);
});
