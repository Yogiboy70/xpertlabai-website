/* ============================================================
   SHREYAS — Xpert Lab AI website assistant (Oct 2026)
   One self-contained file, loaded on every page:
     <script src="/js/shreyas.js" defer></script>
   It injects its own styles and markup, so it looks the same on
   pages built with page-styles.css, styles.css or inline styles.
   Edit answers in TOPICS below. Pricing always goes to the form.
   ============================================================ */
(function () {
  'use strict';
  if (window.__shreyasLoaded) return;
  window.__shreyasLoaded = true;

  var EMAIL = 'yogesh@xpertlabai.com';
  var A = function (href, text) {
    var ext = /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : '';
    return '<a href="' + href + '"' + ext + '>' + text + '</a>';
  };
  var MAIL = A('mailto:' + EMAIL, EMAIL);
  var FORM = A('/contact.html', 'Use the contact form →');

  // Each topic: words that point to it (more matches = better), the answer, and follow-up chips.
  var TOPICS = [
    { id: 'ats', words: ['xpert ats', 'ats', 'applicant tracking', 'hiring', 'hire', 'talent', 'recruit', 'requisition', 'candidate', 'hiring manager', 'hr team', 'screening', 'shortlist'],
      answer: '<b>Xpert ATS</b> is our AI-native applicant tracking system for in-house hiring teams in MSMEs and large enterprises.<br><br>It reads and ranks every CV against the role, lets you search in plain English, sends hiring managers one-click review links, and remembers every decision. A client in the Middle East told us it automates their Excel work and saves around <b>40% of recruiters\' time</b>.<br><br>' + A('/products/xpert-ats.html', 'Explore Xpert ATS →') + ' · ' + A('https://xpert-ats.com', 'xpert-ats.com ↗'),
      next: ['How does Xpert Lens work with it?', 'Show me the Middle East case study', 'How do I get pricing?'] },
    { id: 'lens', words: ['xpert lens', 'lens', 'interview', 'assessment', 'assess', 'avatar', 'psychometric', 'hinglish', 'evaluate', 'competenc', 'first round'],
      answer: '<b>Xpert Lens</b> runs a live, spoken interview with a lifelike AI interviewer — in English, Hinglish or Indian languages — followed by a short proctored assessment.<br><br>Every finding in the report is backed by what the candidate actually said. In our 50-person pilot, participants rated its findings <b>4.88 out of 5</b>, and 98% gave four or five stars.<br><br>' + A('/products/xpert-lens.html', 'Explore Xpert Lens →') + ' · ' + A('/case-studies/xpert-lens-pilot.html', 'Pilot results'),
      next: ['Can I try a Lens interview?', 'Does it work with Xpert ATS?', 'How do I get pricing?'] },
    { id: 'iq', words: ['xpert iq', ' iq', 'finance', 'financial', 'invoice', 'excel', 'spreadsheet', 'cfo', 'gst', 'reconcil', 'accounts', 'accounting', 'mis', 'tally', 'receivable', 'payable', 'ledger'],
      answer: '<b>Xpert IQ</b> is finance intelligence for MSMEs. It takes the Excel sheets and manual accounting work off your team — reading invoices, reconciling bank and GST data, tracking receivables and building the monthly MIS — and answers your CFO\'s questions in plain English.<br><br>' + A('/products/xpert-iq.html', 'Explore Xpert IQ →'),
      next: ['Can I see it with my own data?', 'Does it work with Tally?', 'How do I get pricing?'] },
    { id: 'closr', words: ['xpert closr', 'closr', 'crm', 'pipeline', 'sales', 'deal', 'b2b', 'forecast', 'lead', 'prospect', 'win/loss'],
      answer: '<b>Xpert Closr</b> is a B2B CRM with sales discipline built in — live email inside every deal, an AI deal assistant, approval workflows and mandatory win/loss capture.<br><br>It deploys on <i>your own</i> cloud, so your client data stays yours.<br><br>' + A('/products/xpert-closr.html', 'Explore Xpert Closr →'),
      next: ['Where is my data stored?', 'How do I get pricing?'] },
    { id: 'automation', words: ['automat', 'custom', 'agent', 'workflow', 'process', 'manual work', 'paperwork', 'whatsapp', 'inbox', 'purchase order', 'report', 'productivity', 'transformation', 'accelx', 'accelerate'],
      answer: 'For work that is unique to your business, we build <b>custom AI agents</b> around your processes, documents and data — purchase orders, invoices, shared inboxes, reports and hand-offs between teams. We map the work, build the agent and stay until it is running.<br><br>' + A('/products/custom-ai-automation.html', 'Custom AI Automation →'),
      next: ['What would you automate first?', 'How do I get pricing?'] },
    { id: 'careers', words: ['xpertcareers', 'job seeker', 'job', 'resume', ' cv', 'my cv', 'career', 'student', 'fresher', 'campus', 'placement'],
      answer: 'Looking for a job? <b>xpertcareers.com</b> gives you a free, recruiter\'s-eye examination of your CV, benchmarked against 10,000+ CVs — plus AI coaching in English or Hinglish and a CV rebuild.<br><br>' + A('https://xpertcareers.com', 'Check your CV free at xpertcareers.com ↗'),
      next: ['Is it really free?', 'Do you work with colleges?'] },
    { id: 'reels', words: ['xpert reels', 'reels', 'reel', 'video', 'shorts', 'instagram', 'youtube', 'content', 'creator', 'personal brand', 'social media'],
      answer: '<b>Xpert Reels</b> makes AI-generated reels, shorts and brand videos — script, AI scenes, Hinglish voice-over and edit — for professionals, creators and small brands. Ready to post on Instagram and YouTube.<br><br>' + A('/products/xpert-reels.html', 'Explore Xpert Reels →'),
      next: ['How do I get a reel made?', 'How do I get pricing?'] },
    { id: 'pricing', words: ['price', 'pricing', 'cost', 'how much', 'fee', 'afford', 'budget', 'commercial', 'rate', 'quote', 'subscription', 'charges'],
      answer: 'We offer <b>attractive pricing</b>, shaped to the size of your business and the product you need — so the quickest route is a short message.<br><br>' + A('/contact.html', 'Ping us for pricing →') + '<br>📧 ' + MAIL,
      next: ['Book a demo'] },
    { id: 'data', words: ['data', 'security', 'secure', 'cloud', 'server', 'privacy', 'dpdp', 'safe', 'where is my data', 'stored'],
      answer: 'Each client runs on its own isolated cloud environment — and Xpert Closr can deploy inside your own cloud account. No shared databases, role-based access, audit trails and DPDP-aligned data handling by design.',
      next: ['Book a demo'] },
    { id: 'cases', words: ['case', 'client', 'customer', 'proof', 'result', 'example', 'middle east', 'reference', 'testimonial'],
      answer: 'A few of our stories: an <b>AI-native ATS in the Middle East</b> that gave recruiters 40% of their time back, a <b>50-person Xpert Lens pilot</b> rated 4.88 / 5, a pan-India manufacturer that consolidated hiring across plants, and a finance team that went from six Excel workbooks to a dashboard in eight seconds.<br><br>' + A('/case-studies/', 'All case studies →'),
      next: ['Tell me about Xpert ATS', 'Tell me about Xpert Lens'] },
    { id: 'company', words: ['who are you', 'founder', 'team', 'yogesh', 'about you', 'about xpert', 'company', 'background', 'experience', 'stealth', 'legacy'],
      answer: 'Xpert Lab AI builds AI-native products for Indian MSMEs and mid-size organisations. <i>They built AI on top of legacy; we built legacy on top of AI.</i><br><br>We combine 25 years of domain expertise with a lean team that has access to top AI and software professionals across geographies, and spent two years in stealth running real pilots and POCs. Nothing is a wrapper around someone else\'s tool.<br><br>' + A('/about.html', 'About us →'),
      next: ['What products do you have?', 'Show me case studies'] },
    { id: 'products', words: ['product', 'what do you do', 'what do you offer', 'services', 'solutions', 'suite'],
      answer: 'Seven products:<br>• ' + A('/products/xpert-ats.html', 'Xpert ATS') + ' — AI-native hiring<br>• ' + A('/products/xpert-lens.html', 'Xpert Lens') + ' — live AI interviews<br>• ' + A('/products/xpert-iq.html', 'Xpert IQ') + ' — finance intelligence<br>• ' + A('/products/xpert-closr.html', 'Xpert Closr') + ' — B2B CRM<br>• ' + A('/products/custom-ai-automation.html', 'Custom AI Automation') + '<br>• ' + A('/products/xpertcareers.html', 'xpertcareers.com') + ' — for job seekers<br>• ' + A('/products/xpert-reels.html', 'Xpert Reels') + ' — AI video',
      next: ['Tell me about Xpert ATS', 'Tell me about Xpert IQ', 'Tell me about Xpert Lens'] },
    { id: 'demo', words: ['demo', 'try', 'trial', 'see it', 'show me', 'book', 'meeting', 'call', 'talk to', 'contact', 'get started', 'start'],
      answer: 'We do private demos, walked through with your kind of data — usually 30–45 minutes, no commitment.<br><br>' + A('/contact.html', 'Request a demo →') + '<br>📧 ' + MAIL,
      next: ['How do I get pricing?'] },
    { id: 'timeline', words: ['how long', 'timeline', 'deploy', 'implementation', 'go live', 'time to', 'onboard', 'setup', 'set up'],
      answer: 'Most single-product deployments go live in weeks, not months — the domain mapping and engineering is already done. Custom automations are scoped to a clear outcome before we start.',
      next: ['Book a demo'] }
  ];

  var PAGE_TOPIC = (function () {
    var p = location.pathname;
    if (p.indexOf('xpert-ats') > -1 || p.indexOf('ats') > -1 && p.indexOf('case') > -1) return 'ats';
    if (p.indexOf('lens') > -1) return 'lens';
    if (p.indexOf('xpert-iq') > -1 || p.indexOf('finance') > -1) return 'iq';
    if (p.indexOf('closr') > -1 || p.indexOf('consulting') > -1) return 'closr';
    if (p.indexOf('automation') > -1) return 'automation';
    if (p.indexOf('careers') > -1) return 'careers';
    if (p.indexOf('reels') > -1) return 'reels';
    if (p.indexOf('case-studies') > -1) return 'cases';
    return null;
  })();
  var NAMES = { ats: 'Xpert ATS', lens: 'Xpert Lens', iq: 'Xpert IQ', closr: 'Xpert Closr', automation: 'Custom AI Automation', careers: 'xpertcareers.com', reels: 'Xpert Reels' };

  function bestTopic(text) {
    var t = ' ' + text.toLowerCase() + ' ';
    var best = null, bestScore = 0;
    TOPICS.forEach(function (topic) {
      var score = 0;
      topic.words.forEach(function (w) { if (t.indexOf(w) > -1) score += w.length > 4 ? 2 : 1; });
      if (score > bestScore) { bestScore = score; best = topic; }
    });
    return best;
  }

  function reply(text) {
    var t = text.toLowerCase();
    if (/accelx|accelerated company/.test(t)) {
      return { answer: 'AI AccelX is no longer offered as a separate programme. For hands-on AI transformation of your processes, our <b>Custom AI Automation</b> team maps the work, builds AI agents around it and stays until it is running.<br><br>' + A('/products/custom-ai-automation.html', 'Custom AI Automation →'), next: ['How do I get pricing?'] };
    }
    if (/^(hi|hello|hey|namaste|good (morning|afternoon|evening))\b/.test(t.trim())) {
      return { answer: 'Hello! What would you like to know — hiring, AI interviews, finance, sales, automation, careers or video?', next: ['What products do you have?', 'How do I get pricing?'] };
    }
    var topic = bestTopic(text);
    // Any pricing question goes to the pricing answer (never a figure), naming the product if one was asked about.
    if (/\b(price|pricing|cost|costs|how much|fee|fees|rate|quote|charges|budget)\b/.test(t)) {
      var prod = topic && NAMES[topic.id] ? NAMES[topic.id] : null;
      var pr = TOPICS.filter(function (x) { return x.id === 'pricing'; })[0];
      return { answer: (prod ? 'Good question on <b>' + prod + '</b>. ' : '') + pr.answer.replace('/contact.html', prod ? '/contact.html?interest=' + topic.id : '/contact.html'), next: prod ? ['Book a demo', 'Tell me more about ' + prod] : pr.next };
    }
    if (topic) return topic;
    return { answer: 'Good question — it may need a more specific answer than I can give here.<br><br>Xpert Lab AI builds AI-native products for Indian MSMEs and mid-size organisations: hiring (Xpert ATS, Xpert Lens), finance (Xpert IQ), sales (Xpert Closr) and custom AI automation — plus xpertcareers.com for job seekers and Xpert Reels for video.<br><br>' + FORM + '<br>📧 ' + MAIL, next: ['What products do you have?', 'Book a demo'] };
  }

  var CSS = '' +
    '.sh-trigger{position:fixed;bottom:24px;right:24px;z-index:2000;display:flex;align-items:center;gap:12px;cursor:pointer;font-family:Inter,system-ui,sans-serif;border:0;background:none;padding:0}' +
    '.sh-label{background:#fff;padding:10px 16px;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,.12);font-size:13px;font-weight:600;color:#1A1A1A;white-space:nowrap;animation:shPop .5s ease 2s both}' +
    '@keyframes shPop{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}' +
    '.sh-btn{position:relative;width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#C4622D,#A04E22);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(196,98,45,.45);border:3px solid rgba(255,255,255,.25);transition:transform .2s}' +
    '.sh-trigger:hover .sh-btn{transform:scale(1.07)}' +
    '.sh-btn svg{width:26px;height:26px}' +
    '.sh-dot{position:absolute;bottom:1px;right:1px;width:12px;height:12px;border-radius:50%;background:#22C55E;border:2px solid #fff}' +
    '.sh-win{position:fixed;bottom:92px;right:24px;z-index:2001;width:380px;max-width:calc(100vw - 32px);height:540px;max-height:calc(100vh - 120px);background:#fff;border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,.2),0 0 0 1px rgba(0,0,0,.06);display:none;flex-direction:column;overflow:hidden;font-family:Inter,system-ui,sans-serif;animation:shOpen .28s cubic-bezier(.16,1,.3,1)}' +
    '.sh-win.open{display:flex}' +
    '@keyframes shOpen{from{opacity:0;transform:translateY(16px) scale(.97)}to{opacity:1;transform:none}}' +
    '.sh-head{background:#0F1923;padding:14px 18px;display:flex;align-items:center;gap:12px}' +
    '.sh-av{width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,#C9A96E,#A07A2C);display:flex;align-items:center;justify-content:center;color:#0F1923;font-weight:800;font-family:Georgia,serif;font-size:17px;position:relative;flex-shrink:0}' +
    '.sh-av .sh-dot{border-color:#0F1923;width:10px;height:10px}' +
    '.sh-name{font-size:15px;font-weight:700;color:#fff}.sh-role{font-size:11px;color:rgba(255,255,255,.5);margin-top:1px}' +
    '.sh-close{margin-left:auto;background:none;border:0;color:rgba(255,255,255,.5);font-size:20px;cursor:pointer;padding:4px;line-height:1}.sh-close:hover{color:#fff}' +
    '.sh-msgs{flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:12px;background:#FAF7F2}' +
    '.sh-msg{max-width:86%;padding:11px 15px;border-radius:14px;font-size:13.5px;line-height:1.55;word-wrap:break-word}' +
    '.sh-msg.bot{background:#fff;color:#1A1A1A;border:1px solid rgba(196,98,45,.15);border-bottom-left-radius:4px;align-self:flex-start}' +
    '.sh-msg.user{background:#C4622D;color:#fff;border-bottom-right-radius:4px;align-self:flex-end}' +
    '.sh-msg a{color:#C4622D;font-weight:600;text-decoration:none}.sh-msg a:hover{text-decoration:underline}' +
    '.sh-typing{display:flex;gap:4px;align-self:flex-start;padding:12px 14px;background:#fff;border-radius:14px;border:1px solid rgba(196,98,45,.15)}' +
    '.sh-typing span{width:6px;height:6px;border-radius:50%;background:#8A8A8A;animation:shB 1.2s infinite}.sh-typing span:nth-child(2){animation-delay:.15s}.sh-typing span:nth-child(3){animation-delay:.3s}' +
    '@keyframes shB{0%,80%,100%{opacity:.4;transform:none}40%{opacity:1;transform:translateY(-4px)}}' +
    '.sh-chips{display:flex;flex-wrap:wrap;gap:6px;padding:10px 14px 4px;background:#FAF7F2}' +
    '.sh-chip{padding:6px 12px;border:1px solid rgba(196,98,45,.3);border-radius:100px;font-size:12px;font-weight:500;color:#C4622D;background:#fff;cursor:pointer;font-family:inherit}.sh-chip:hover{background:#C4622D;color:#fff}' +
    '.sh-input{display:flex;gap:8px;padding:12px 14px;border-top:1px solid rgba(0,0,0,.06);background:#fff}' +
    '.sh-input textarea{flex:1;border:1.5px solid rgba(0,0,0,.12);border-radius:10px;padding:10px 12px;font-size:13.5px;font-family:inherit;resize:none;outline:none;max-height:80px}.sh-input textarea:focus{border-color:#C4622D}' +
    '.sh-send{width:40px;height:40px;border:0;border-radius:10px;background:#C4622D;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0}' +
    '.sh-foot{font-size:11px;color:#8A8A8A;text-align:center;padding:0 14px 10px;background:#fff}.sh-foot a{color:#C4622D;text-decoration:none;font-weight:600}' +
    '@media (max-width:600px){.sh-label{display:none}.sh-trigger{bottom:16px;right:16px}.sh-win{right:16px;bottom:82px;width:calc(100vw - 32px);height:calc(100vh - 110px)}}';

  var BOT_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z"/><circle cx="9" cy="10" r=".6" fill="#fff"/><circle cx="12.5" cy="10" r=".6" fill="#fff"/><circle cx="16" cy="10" r=".6" fill="#fff"/></svg>';

  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }

  function build() {
    // Remove any older inline Shreyas the page may still carry.
    ['shreyasTrigger', 'shreyasWindow'].forEach(function (id) { var o = document.getElementById(id); if (o) o.remove(); });

    var style = el('style'); style.textContent = CSS; document.head.appendChild(style);

    var trigger = el('button', 'sh-trigger');
    trigger.type = 'button';
    trigger.setAttribute('aria-label', 'Chat with Shreyas, our AI assistant');
    trigger.innerHTML = '<span class="sh-label">Ask Shreyas ✦</span><span class="sh-btn">' + BOT_ICON + '<span class="sh-dot"></span></span>';

    var win = el('div', 'sh-win');
    win.setAttribute('role', 'dialog'); win.setAttribute('aria-label', 'Shreyas chat');
    win.innerHTML = '<div class="sh-head"><div class="sh-av">S<span class="sh-dot"></span></div><div><div class="sh-name">Shreyas</div><div class="sh-role">AI assistant · Xpert Lab AI</div></div><button class="sh-close" type="button" aria-label="Close chat">✕</button></div>' +
      '<div class="sh-msgs" aria-live="polite"></div><div class="sh-chips"></div>' +
      '<div class="sh-input"><textarea rows="1" placeholder="Ask me anything about Xpert Lab AI…" aria-label="Your message"></textarea><button class="sh-send" type="button" aria-label="Send"><svg width="16" height="16" viewBox="0 0 16 16"><path d="M14 8L2 2l3 6-3 6 12-6z" fill="#fff"/></svg></button></div>' +
      '<div class="sh-foot">Prefer a person? ' + A('/contact.html', 'Contact us') + ' · ' + MAIL + '</div>';

    document.body.appendChild(win);
    document.body.appendChild(trigger);

    var msgs = win.querySelector('.sh-msgs'), chips = win.querySelector('.sh-chips'), input = win.querySelector('textarea');
    var turns = 0;

    function add(role, html) { var m = el('div', 'sh-msg ' + role, html); msgs.appendChild(m); msgs.scrollTop = msgs.scrollHeight; }
    function setChips(list) {
      chips.innerHTML = '';
      (list || []).forEach(function (q) { var c = el('button', 'sh-chip', q); c.type = 'button'; c.onclick = function () { send(q); }; chips.appendChild(c); });
    }
    function send(text) {
      text = (text || input.value).trim();
      if (!text) return;
      input.value = ''; setChips([]);
      add('user', text.replace(/</g, '&lt;'));
      turns++;
      var typing = el('div', 'sh-typing', '<span></span><span></span><span></span>'); msgs.appendChild(typing); msgs.scrollTop = msgs.scrollHeight;
      setTimeout(function () {
        typing.remove();
        var r = reply(text);
        var answer = r.answer;
        if (turns === 4) answer += '<br><br>For anything more specific — pricing, a live demo or your own use case — the best next step is a direct conversation with our team. ' + FORM;
        add('bot', answer);
        setChips(r.next);
      }, 450);
    }
    function open() {
      win.classList.add('open'); trigger.querySelector('.sh-label').style.display = 'none';
      if (!msgs.children.length) {
        var intro = 'Hello! I\'m <b>Shreyas</b>, the AI assistant at Xpert Lab AI.<br><br>We build AI-native products for Indian MSMEs and mid-size organisations — hiring, AI interviews, finance, sales and custom automation — plus tools for job seekers and creators.';
        if (PAGE_TOPIC && NAMES[PAGE_TOPIC]) intro += '<br><br>You\'re looking at <b>' + NAMES[PAGE_TOPIC] + '</b> — want the quick version?';
        add('bot', intro + '<br><br>What can I help you with?');
        var first = PAGE_TOPIC && NAMES[PAGE_TOPIC] ? ['Tell me about ' + NAMES[PAGE_TOPIC]] : [];
        setChips(first.concat(['What products do you have?', 'Show me case studies', 'How do I get pricing?']).slice(0, 4));
      }
      setTimeout(function () { input.focus(); }, 50);
    }
    function close() { win.classList.remove('open'); }

    trigger.addEventListener('click', function () { win.classList.contains('open') ? close() : open(); });
    win.querySelector('.sh-close').addEventListener('click', close);
    win.querySelector('.sh-send').addEventListener('click', function () { send(); });
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

    // Public hooks used by "Ask Shreyas" buttons on the page.
    window.openShreyas = open;
    window.closeShreyas = close;
    window.shreyasReply = function (q) { return reply(q).answer; };
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();
})();
