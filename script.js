const data = window.portfolio;
const profile = data.profile;
const site = document.getElementById('site');
const savedLanguage = (() => { try { return localStorage.getItem('portfolio-language'); } catch { return null; } })();
let language = savedLanguage === 'fr' ? 'fr' : 'en';

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
function add(parent, ...children) { children.forEach(child => parent.append(child)); return parent; }
function link(text, href, className, external = false) {
  const node = el('a', className, text);
  node.href = href;
  if (external) { node.target = '_blank'; node.rel = 'noopener noreferrer'; }
  return node;
}
function section(id, title, intro) {
  const node = el('section', 'section'); node.id = id;
  const wrap = el('div', 'container');
  const head = el('div', 'section-heading');
  add(head, el('span', 'section-index', String(['about','results','experience','projects','skills','education','contact'].indexOf(id) + 1).padStart(2, '0')), el('h2', '', title));
  add(wrap, head);
  if (intro) add(wrap, el('p', 'section-intro', intro));
  node.append(wrap);
  return { node, wrap };
}
function pill(text) { return el('span', 'pill', text); }

function render() {
  const c = data[language];
  document.documentElement.lang = language;
  document.title = language === 'fr' ? 'Mahmoud Magdy — Data Analyst à Paris' : 'Mahmoud Magdy — Data Analyst';
  const description = language === 'fr'
    ? 'Mahmoud Magdy, Data Analyst à Paris. Power BI, SQL, Python et GCP. Recherche une alternance de 12 mois en France.'
    : 'Mahmoud Magdy is a Paris-based data analyst working with Power BI, SQL, Python and GCP. Available for a 12-month work-study contract in France.';
  document.querySelector('meta[name="description"]').content = description;
  document.querySelector('meta[property="og:description"]').content = description;
  document.querySelector('meta[property="og:title"]').content = document.title;
  document.querySelector('.skip-link').textContent = language === 'fr' ? 'Aller au contenu' : 'Skip to content';
  site.replaceChildren();

  const header = el('header', 'site-header');
  const nav = el('nav', 'nav container'); nav.setAttribute('aria-label', language === 'fr' ? 'Navigation principale' : 'Main navigation');
  const brand = link('MM.', '#top', 'brand'); brand.setAttribute('aria-label', 'Mahmoud Magdy — top');
  const navLinks = el('div', 'nav-links');
  ['about','results','experience','projects','skills','education','contact'].forEach(key => navLinks.append(link(c.nav[key], `#${key}`, 'nav-link')));
  const controls = el('div', 'nav-controls');
  const lang = el('button', 'language-toggle', language === 'en' ? 'EN / FR' : 'FR / EN');
  lang.type = 'button'; lang.setAttribute('aria-label', c.switchLabel);
  lang.addEventListener('click', () => { language = language === 'en' ? 'fr' : 'en'; try { localStorage.setItem('portfolio-language', language); } catch {} render(); });
  add(controls, lang, link(c.nav.contact, '#contact', 'nav-cta'));
  add(nav, brand, navLinks, controls); header.append(nav); site.append(header);

  const main = el('main'); main.id = 'main';
  const hero = el('section', 'hero'); hero.id = 'top';
  const heroInner = el('div', 'container hero-grid');
  const heroText = el('div', 'hero-copy');
  add(heroText, el('p', 'eyebrow', c.hero.eyebrow), el('h1', '', profile.name), el('p', 'hero-role', c.hero.role), el('p', 'hero-lead', c.hero.lead), el('p', 'hero-intro', c.hero.intro));
  const heroActions = el('div', 'hero-actions');
  add(heroActions, link(c.hero.viewProjects, '#projects', 'button button-primary'), link(c.hero.contact, '#contact', 'button button-outline'));
  const social = el('div', 'hero-social');
  add(social, link('LinkedIn ↗', profile.linkedin, 'text-link', true), link('GitHub ↗', profile.github, 'text-link', true));
  add(heroText, heroActions, social);
  const heroVisual = el('div', 'hero-visual');
  const portrait = el('div', 'portrait');
  const img = el('img'); img.src = profile.photo; img.alt = c.hero.photoAlt; img.width = 460; img.height = 540;
  portrait.append(img);
  const visualTag = el('div', 'visual-tag');
  add(visualTag, el('span', 'status-dot'), el('span', '', c.hero.availability));
  add(heroVisual, portrait, visualTag);
  add(heroInner, heroText, heroVisual); hero.append(heroInner); main.append(hero);

  const about = section('about', c.section.about);
  const aboutGrid = el('div', 'about-grid');
  const aboutLead = el('div'); add(aboutLead, el('p', 'overline', c.about.kicker), el('p', 'about-text', c.about.text));
  const aboutAside = el('aside', 'about-aside');
  add(aboutAside, el('p', 'aside-line', c.about.location), el('p', 'aside-line', c.about.languages));
  const cv = el('span', 'button button-outline button-disabled', c.about.cvSoon);
  cv.id = 'cv-link'; cv.setAttribute('aria-disabled', 'true');
  aboutAside.append(cv); add(aboutGrid, aboutLead, aboutAside); about.wrap.append(aboutGrid); main.append(about.node);

  const results = section('results', c.section.results, c.results.intro);
  const stats = el('div', 'stats-grid');
  c.results.items.forEach(item => { const tile = el('div', 'stat-tile'); add(tile, el('strong', 'stat-value', item.value), el('span', 'stat-label', item.label)); stats.append(tile); });
  results.wrap.append(stats); main.append(results.node);

  const experience = section('experience', c.section.experience);
  const timeline = el('div', 'timeline');
  c.experience.forEach(item => {
    const entry = el('article', 'timeline-entry');
    const top = el('div', 'entry-top');
    const identity = el('div'); add(identity, el('h3', '', item.role), el('p', 'company', item.company));
    add(top, identity, el('span', 'period', item.period));
    const list = el('ul'); item.points.forEach(point => list.append(el('li', '', point)));
    add(entry, top, list); timeline.append(entry);
  });
  experience.wrap.append(timeline); main.append(experience.node);

  const projects = section('projects', c.section.projects, c.projects.intro);
  const projectGrid = el('div', 'project-grid');
  const projectItems = data.projects.length ? data.projects : Array.from({ length: 3 }, () => null);
  projectItems.forEach((project, index) => {
    const placeholder = !project;
    const card = el('article', `project-card${placeholder ? ' project-placeholder' : ''}`);
    const visual = el('div', 'project-visual');
    if (project?.image) { const image = el('img'); image.src = project.image; image.alt = project.title?.[language] || project.title || c.projects.imageAlt; image.loading = 'lazy'; visual.append(image); }
    else { add(visual, el('span', 'project-number', String(index + 1).padStart(2, '0')), el('span', 'project-chart', '▥')); }
    const body = el('div', 'project-body');
    if (placeholder) body.append(el('span', 'coming-soon', c.projects.soon));
    const title = placeholder ? c.projects.title : (project.title?.[language] || project.title || c.projects.title);
    const description = placeholder ? c.projects.description : (project.description?.[language] || project.description || c.projects.description);
    add(body, el('h3', '', title), el('p', '', description));
    const tags = el('div', 'project-tags');
    (placeholder ? ['—', '—'] : (project.tools || [])).forEach(tool => tags.append(pill(tool)));
    body.append(tags);
    const actions = el('div', 'project-actions');
    if (project?.demoUrl) actions.append(link(`${c.projects.demo} ↗`, project.demoUrl, 'text-link', true));
    else actions.append(el('span', 'project-disabled', c.projects.demo));
    if (project?.repoUrl) actions.append(link(`${c.projects.code} ↗`, project.repoUrl, 'text-link', true));
    else actions.append(el('span', 'project-disabled', c.projects.code));
    body.append(actions); add(card, visual, body); projectGrid.append(card);
  });
  projects.wrap.append(projectGrid); main.append(projects.node);

  const skills = section('skills', c.section.skills, c.skills.intro);
  const skillGrid = el('div', 'skill-grid');
  c.skills.groups.forEach(group => { const block = el('div', 'skill-group'); block.append(el('h3', '', group.title)); const items = el('div', 'skill-tags'); group.items.forEach(item => items.append(pill(item))); block.append(items); skillGrid.append(block); });
  skills.wrap.append(skillGrid); main.append(skills.node);

  const education = section('education', c.section.education);
  const educationGrid = el('div', 'education-grid');
  c.education.forEach(item => { const block = el('article', 'education-card'); add(block, el('span', 'period', item.period), el('h3', '', item.degree), el('p', 'company', item.school), el('span', 'education-level', item.level)); educationGrid.append(block); });
  education.wrap.append(educationGrid); main.append(education.node);

  const contact = section('contact', c.section.contact);
  const contactPanel = el('div', 'contact-panel');
  add(contactPanel, el('p', 'contact-intro', c.contact.intro));
  const contactLinks = el('div', 'contact-links');
  add(contactLinks, link(`${c.contact.email} ↗`, `mailto:${profile.email}`, 'button button-primary'), link(`${c.contact.linkedin} ↗`, profile.linkedin, 'button button-outline', true), link(`${c.contact.github} ↗`, profile.github, 'button button-outline', true));
  contactPanel.append(contactLinks); contact.wrap.append(contactPanel); main.append(contact.node);
  site.append(main);

  const footer = el('footer', 'site-footer'); const footerInner = el('div', 'container footer-inner');
  add(footerInner, el('span', '', `© 2026 ${profile.name}`), el('span', '', c.footer)); footer.append(footerInner); site.append(footer);
  checkCv();
}

async function checkCv() {
  const current = document.getElementById('cv-link');
  try {
    const response = await fetch(profile.cv, { method: 'HEAD' });
    if (!response.ok || !document.getElementById('cv-link')) return;
    const anchor = link(data[language].about.cv, profile.cv, 'button button-outline');
    anchor.id = 'cv-link'; anchor.download = 'Mahmoud_Magdy_CV.pdf';
    current.replaceWith(anchor);
  } catch { /* Keep the unavailable state until the PDF is added. */ }
}
render();
