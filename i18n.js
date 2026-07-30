// ========== QAgent 官网国际化（默认简体中文，可切换英文） ==========
(function () {
  const en = {
    'meta.title': "QAgent — Make AI Agents Every Employee's Digital Colleague",
    'meta.desc': "QAgent Enterprise Agent Solution: a personal AI assistant for every employee, enterprise-grade understanding, and full control. Turn every employee into an AI-era super individual.",

    'brand.tag': 'Enterprise Agents',
    'nav.values': 'Value',
    'nav.product': 'Product',
    'nav.deploy': 'Deployment',
    'nav.pricing': 'Pricing',
    'nav.cases': 'Use Cases',
    'nav.consult': 'Consult',
    'nav.trial': 'Free Trial',

    'hero.kicker': '<span class="kicker-dot"></span>ENTERPRISE AGENT SOLUTION',
    'hero.title1': 'Make AI Agents',
    'hero.title2': "Every Employee's",
    'hero.title3': '<em>“Digital Colleague”</em>',
    'hero.sub': 'Turn every employee into an AI-era “super individual”,<br>and turn AI capabilities into enterprise-owned digital assets — <strong>secure, visible, and under control</strong>.',
    'hero.action1': 'Apply for 15-Day Free Trial',
    'hero.action2': 'Explore Core Value <span class="arrow">→</span>',
    'hero.imgAlt': 'QAgent Digital Colleague',
    'hero.caption': '<span class="mono">FIG.01</span> Your next colleague may already be online',

    'values.title': 'Three Core Values<br><span class="sec-sub">From employees to the enterprise, unleashing AI productivity across the board</span>',
    'v1.h3': 'Personal AI Assistant',
    'v1.desc': 'For every employee, with an extremely low barrier. As natural as chatting with a colleague — ready the moment you open your laptop.',
    'v1.li1': 'Draft emails, contracts, reports, and PPT outlines',
    'v1.li2': 'Turn meeting notes into action lists',
    'v1.li3': 'Explain code, check formulas, translate documents',
    'v1.li4': 'Handle repetitive data queries and format conversion',
    'v1.foot': 'Zero learning curve — no prompt engineering needed; skills are triggered through conversation',
    'v2.h3': 'Enterprise-Grade Understanding',
    'v2.desc': 'Let AI truly understand your enterprise. Employees create AI skills themselves, turning personal experience into enterprise capability.',
    'v2.li1': 'Define a skill once, reuse it company-wide',
    'v2.li2': 'Standardized skills — newcomers deliver expert-level output',
    'v2.li3': 'Skills belong to the enterprise; capability stays when people leave',
    'v2.li4': 'Ready-to-use scenarios for finance, HR, and sales',
    'v2.foot': 'Turn “veteran know-how” into “enterprise assets”',
    'v3.h3': 'Full Control',
    'v3.desc': 'Full control from data to skill assets — secure, compliant, and auditable. Complete peace of mind for IT.',
    'v3.li1': 'Private deployment; data never leaves your intranet',
    'v3.li2': 'Permission management: who can use what, at a glance',
    'v3.li3': 'Full audit trail for key operations, exportable',
    'v3.li4': 'Per-seat subscription with transparent, controllable costs',
    'v3.foot': 'AI usage goes from “invisible” to “fully governed”',

    'compare.title': 'Let AI Truly Understand Your Enterprise<br><span class="sec-sub">Generic AI Tools vs QAgent Agent Skills</span>',
    'cmp.h1': 'Dimension',
    'cmp.h2': 'Generic AI Tools',
    'cmp.h3': 'QAgent Agent Skills',
    'cmp.r1a': 'Repetition',
    'cmp.r1b': 'Re-describe the context every single time',
    'cmp.r1c': 'Define once, reuse company-wide',
    'cmp.r2a': 'Inconsistency',
    'cmp.r2b': 'Prompt quality varies by employee',
    'cmp.r2c': 'Standardized skills — newcomers perform like experts',
    'cmp.r3a': 'Knowledge Loss',
    'cmp.r3b': 'When employees leave, their methods disappear',
    'cmp.r3c': 'Skills belong to the enterprise — capability stays',
    'chip.1': '<b>Finance</b>“Travel Expense Review” skill — new hires audit to veteran-accountant standards',
    'chip.2': '<b>HR</b>“JD Generator” skill — publish a position with just a few keywords',
    'chip.3': '<b>Sales</b>“Customer Email Reply” skill — unified, standardized messaging',

    'product.title': 'Product Architecture: Client + Console<br><span class="sec-sub">QAgent Desktop for Employees / QAgent SaaS for Enterprise IT</span>',
    'p1.h3': 'For Employees · Desktop App',
    'p1.p': "A desktop app on every employee's computer — ready at startup, a truly personal work assistant.",
    'p1.f1': '<b>Natural Language Chat</b>Ask questions as if chatting with a colleague',
    'p1.f2': '<b>Long-Term Memory</b>The longer you use it, the better it knows your preferences',
    'p1.f3': '<b>Workspace File Access</b>AI output is written straight to your work directory — no copy-paste',
    'p1.f4': '<b>Multi-Model Switching</b>Cheap models for simple questions, stronger ones for complex tasks',
    'p1.f5': '<b>Skill Studio</b>Help everyone turn knowledge and experience into enterprise skill assets',
    'p1.f6': '<b>Multi-Session Management</b>Separate chats per task — searchable, archivable, taggable',
    'p1.f7': '<b>Skill Store</b>Install published enterprise skills with one click, just like mobile apps',
    'p1.foot': 'The experience: from an “AI tool” to an “AI colleague”',
    'p2.h3': 'For IT · Web Console',
    'p2.p': 'One web console to manage AI usage across the entire company.',
    'p2.f1': '<b>Enterprise Management</b>Create a tenant in 5 minutes; employees join with a company code',
    'p2.f2': '<b>Member Management</b>Invite, suspend, or remove members in one click; over-limit alerts',
    'p2.f3': '<b>Subscription & Seats</b>Annual subscription with flexible seats and expiry reminders',
    'p2.f4': '<b>Skill Management</b>Review employee-submitted skills; enable or disable official skills',
    'p2.f5': '<b>Usage Insights</b>Activity and top skills by department and employee at a glance',
    'p2.f6': '<b>Data Security</b>Physical tenant isolation; the platform cannot access your data',
    'p2.f7': '<b>Audit Logs</b>Full trace of key operations, exportable for compliance review',
    'p2.foot': 'The feeling: employees stay productive while security holds the line',

    'deploy.title': 'Two Deployment Options<br><span class="sec-sub">Choose flexibly based on company size, security requirements, and budget</span>',
    'd1.tag': 'OPTION 1 · SAAS',
    'd1.h3': 'Public SaaS',
    'd1.fit': 'Best for: SMBs, startups, and departments running quick pilots',
    'd1.li1': 'Platform ready to go — activate your account and start',
    'd1.li2': 'Accounts, permissions, skills, and audit — all out of the box',
    'd1.li3': 'Per-seat annual billing; no infrastructure to build',
    'd1.li4': 'Models are procured by you and configured in QAgent Desktop',
    'd1.btn': 'Apply for 15-Day Free Trial',
    'd2.tag': 'OPTION 2 · PRIVATE',
    'd2.h3': 'Private Custom Edition',
    'd2.fit': 'Best for: SOEs, government, finance, and data-sensitive mid-to-large enterprises',
    'd2.li1': 'The entire system deployed in your intranet or private cloud',
    'd2.li2': 'Data never leaves your domain, meeting compliance requirements',
    'd2.li3': 'Integrates with your existing LLMs, knowledge bases, and data sources',
    'd2.li4': 'Includes dedicated implementation, training, and operations services',
    'd2.btn': 'Apply for 1-Month POC',
    'deploy.note': '<span class="mono">NOTE</span> QAgent does not provide model services — you may choose public cloud models (Alibaba Cloud Bailian / Volcano Engine / Zhipu / DeepSeek) or deploy private models, avoiding vendor lock-in.',

    'pricing.title': 'SaaS Annual Budget Reference<br><span class="sec-sub">Per-seat annual billing with transparent costs; platform subscription only, model usage not included</span>',
    'pr1.h3': 'Starter',
    'pr1.fit': 'Teams of 12',
    'pr.hot': 'MOST POPULAR',
    'pr2.h3': 'Growth',
    'pr2.fit': 'Teams of 30 – 50',
    'pr3.h3': 'Professional',
    'pr3.fit': 'Companies of 80 – 150',
    'pr4.h3': 'Private Custom',
    'pr4.fit': 'Mid-to-large enterprises / Gov & SOEs',
    'pr.btn': 'Start Trial',
    'pr4.btn': 'Contact Us',
    'extras.label': 'ADD-ON SERVICES · OPTIONAL',
    'extras.1': '<b>Custom Skill Development</b>Engineers build AI skills tailored to your business scenarios',
    'extras.2': '<b>Training</b>For admins, skill creators, and general employees',
    'extras.3': '<b>Data Integration</b>Connect internal ERP, CRM, and knowledge base systems',

    'cases.title': 'Typical Use Cases<br><span class="sec-sub">From “a few users” to “everyone on board”</span>',
    'c1.h3': 'Sales',
    'c1.pain': 'Pain: slow product ramp-up for newcomers; inconsistent customer messaging',
    'c1.do': 'How: veteran salespeople write their winning methods into a “Customer Communication” skill',
    'c1.rs': 'Newcomer ramp-up time reduced',
    'c2.h3': 'Customer Support',
    'c2.pain': 'Pain: inconsistent service quality; newcomers struggle with complex issues',
    'c2.do': 'How: build common questions and standard answers into a “Support Assistant” skill',
    'c2.rs': 'First-contact resolution rate up',
    'c3.h3': 'Finance',
    'c3.pain': 'Pain: slow, inconsistent expense and contract reviews',
    'c3.do': 'How: the finance lead turns review criteria into a “Smart Review” skill',
    'c3.rs': 'Initial review workload reduced',
    'c4.h3': 'R&D Team',
    'c4.pain': "Pain: core knowledge lives in veterans' heads; newcomers keep asking",
    'c4.do': 'How: turn architecture, coding standards, and debugging know-how into a skill library',
    'c4.rb': '0 Loss',
    'c4.rs': 'Knowledge stays as team assets',
    'c5.h3': 'HR',
    'c5.pain': 'Pain: rewriting JDs for every hire; interview questions improvised',
    'c5.do': 'How: turn role templates and interview question banks into a skill library',
    'c5.rb': '10 min',
    'c5.rs': 'JD writing, down from 2 hours',
    'adopt.label': '3 STEPS TO EVERYONE ON BOARD',
    'adopt.s1': '<i class="mono">①</i>Zero-barrier desktop app',
    'adopt.s2': '<i class="mono">②</i>Skill reuse lowers the bar',
    'adopt.s3': '<i class="mono">③</i>Training & workflow templates',

    'why.title': 'Why QAgent',
    'w1.h4': 'Proven Product',
    'w1.p': 'Built on the Hermes Agent framework refined over years; enterprise-grade enhancements passed v1.0 review',
    'w2.h4': 'Flexible Path',
    'w2.p': 'Both SaaS and private deployment, with smooth evolution and step-by-step upgrades',
    'w3.h4': 'Rich Scenarios',
    'w3.p': 'Proven cases across education, government, and enterprise — referenceable and replicable',
    'w4.h4': 'Open Models',
    'w4.p': 'You choose and procure the models yourself — no vendor lock-in',
    'w5.h4': 'Open Ecosystem',
    'w5.p': 'Supports mainstream LLMs: public cloud, open-source, and privately deployed models',
    'w6.h4': 'Professional Service',
    'w6.p': 'End-to-end support: consulting, pilots, training, and ongoing operations',

    'contact.title': "Make AI Your Company's<br><em>Digital Asset</em>",
    'contact.sub': 'We recommend starting with a requirements call, where our solution consultants will provide deployment recommendations and pricing based on your actual situation.',
    'contact.l1': '<b>Product Consultation</b>Get diagnosis and recommendations tailored to your enterprise',
    'contact.l2': '<b>Trial Application</b>15-day free SaaS trial / 1-month private deployment POC',
    'contact.l3': '<b>Custom Quote</b>Pricing tailored to your company size and scenarios',
    'ch1.label': 'WECHAT · CONSULTING',
    'ch1.desc': "Search to add, and mention “QAgent”",
    'ch2.label': 'EMAIL · CONTACT',
    'ch2.desc': 'Send us your needs and scenarios — reply within 1 business day',
    'ch.btn': 'Copy',
    'ch.tip': 'Product consultation / 15-day SaaS trial / private POC — reach us via either channel above',

    'footer.slogan': "Make AI agents every employee's “digital colleague”"
  };

  // 复制按钮提示语
  const tips = {
    wechat: {
      zh: '微信号 yhc-startup 已复制，去微信添加好友吧',
      en: 'WeChat ID yhc-startup copied — add us on WeChat!'
    },
    email: {
      zh: '邮箱 ceo@quseit.com 已复制，快发邮件给我吧',
      en: 'Email ceo@quseit.com copied — drop us a message!'
    }
  };

  const copiedLabel = { zh: '已复制 ✓', en: 'Copied ✓' };

  // ===== 引擎 =====
  const els = document.querySelectorAll('[data-i18n]');
  const zh = {};
  els.forEach(el => { zh[el.dataset.i18n] = el.innerHTML; });
  const altEls = document.querySelectorAll('[data-i18n-alt]');
  const zhAlt = {};
  altEls.forEach(el => { zhAlt[el.dataset.i18nAlt] = el.alt; });
  const metaDesc = document.querySelector('meta[name="description"]');
  const zhTitle = document.title;
  const zhDesc = metaDesc.content;
  const btn = document.getElementById('langSwitch');

  let lang = localStorage.getItem('qagent-lang') || 'zh';

  function apply(l) {
    lang = l;
    document.documentElement.lang = l === 'en' ? 'en' : 'zh-CN';
    els.forEach(el => {
      const k = el.dataset.i18n;
      el.innerHTML = l === 'en' ? (en[k] ?? zh[k]) : zh[k];
    });
    altEls.forEach(el => {
      const k = el.dataset.i18nAlt;
      el.alt = l === 'en' ? (en[k] ?? zhAlt[k]) : zhAlt[k];
    });
    document.title = l === 'en' ? en['meta.title'] : zhTitle;
    metaDesc.content = l === 'en' ? en['meta.desc'] : zhDesc;
    btn.textContent = l === 'en' ? '中文' : 'EN';
    localStorage.setItem('qagent-lang', l);
  }

  btn.addEventListener('click', () => apply(lang === 'en' ? 'zh' : 'en'));

  // 供 main.js 使用的接口
  window.QI18N = {
    tip: key => tips[key][lang],
    copied: () => copiedLabel[lang],
    copyLabel: () => (lang === 'en' ? 'Copy' : '复制')
  };

  if (lang === 'en') apply('en');
})();
