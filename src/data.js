// All content sourced from the original site: https://www.ipds.co.in/

// Public URL of the live site — used for canonical links, sitemap, robots and social previews.
export const SITE_URL = 'https://www.ipds.co.in';

export const CONTACT = {
  address: '371, Ayushman Ashapurna Valley, Near New High Court, Jhalamand, Jodhpur',
  phones: ['+91 95495 42771', '+91 99298 42771'],
  email: 'info@ipds.co.in',
};

export const SOCIALS = [
  { name: 'WhatsApp', icon: 'whatsapp', href: 'https://wa.me/919929842771' },
  { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/IPDATASOLUTIONS/' },
  { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/ip_data_solutions/' },
  { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/ip-data-solution-s/' },
];

// Links point at `/#…` so they also work from other pages (e.g. /services).
// The entry with `dropdown` renders the Professional Services menu.
export const NAV = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Professional Services', href: '/services', dropdown: true },
  { label: 'Why Us', href: '/#why' },
  { label: 'Roadmap', href: '/#roadmap' },
  { label: 'FAQs', href: '/#faq' },
];

// The /services page and the header dropdown. `short` is the dropdown label.
export const PRO_SERVICES = [
  {
    slug: 'it-consulting',
    icon: 'hierarchy',
    title: 'IT Consulting & System Integration',
    short: 'IT Consulting & Integration',
    text: 'Plan, connect and tune your IT so every system works together, from the first roadmap to regular health checks.',
    items: ['IT Consultancy', 'System Integration', 'IT Infrastructure Planning', 'Configuration Review & Health Check'],
  },
  {
    slug: 'network-infrastructure',
    icon: 'router',
    title: 'Network Infrastructure & Connectivity',
    short: 'Network Infrastructure',
    text: 'Fast, stable networks that link your offices, branches and people, wired or wireless.',
    items: [
      'Network Setup & Configuration',
      'LAN, WAN, SD-WAN & MPLS',
      'ST-WAN / SD-WAN Solutions',
      'Wi-Fi & Wireless Networking',
      'ZTNA (Zero Trust Network Access)',
    ],
  },
  {
    slug: 'cybersecurity',
    icon: 'shield',
    title: 'Cybersecurity & Access Control',
    short: 'Cybersecurity',
    text: 'Keep threats out and the right people in, across your network, your devices and your doors.',
    items: [
      'Security Solutions',
      'Biometric Security',
      'Access Control Systems',
      'Secure SD-WAN',
      'VPN Replacement Solutions',
    ],
  },
  {
    slug: 'data-protection',
    icon: 'database',
    title: 'Data Protection & Disaster Recovery',
    short: 'Data Protection',
    text: 'Your data, backed up, inspected and recoverable, so one bad day never becomes a lost business.',
    items: ['Data Inspection', 'Cloud-to-Cloud Backup', 'Cloud-to-Offline Backup', 'Disaster Recovery', 'Storage Security'],
  },
  {
    slug: 'hardware-data-center',
    icon: 'server',
    title: 'Hardware, Servers & Data Center Solutions',
    short: 'Hardware & Data Center',
    text: 'The physical backbone of your IT: supplied, rented, installed and kept running.',
    items: ['Hardware Supply & Rental', 'Hardware Support', 'Server Infrastructure', 'Data Center Services'],
  },
  {
    slug: 'managed-it',
    icon: 'headset',
    title: 'Managed IT Services & Support',
    short: 'Managed IT Support',
    text: 'One team watching, fixing and maintaining your IT, remotely and on-site, all year round.',
    items: [
      'Remote & On-site IT Support',
      'Server & Network Monitoring',
      'Annual Maintenance Contracts (AMC)',
      'Ongoing IT Maintenance',
    ],
  },
];

export const ABOUT_POINTS = [
  'Safeguarding your intellectual property and sensitive data from threats.',
  'From concept to execution, we secure what drives your competitive edge.',
  'Ensuring regulatory adherence while minimizing vulnerabilities.',
];

export const SERVICES = [
  {
    icon: 'server',
    title: 'Server & Storage Solutions',
    text: 'Design, deploy, and manage powerful server and storage systems. Optimize performance, reliability, scalability, and data protection for your evolving business demands.',
  },
  {
    icon: 'backup',
    title: 'Backup Solutions',
    text: 'Protect your critical data with secure, automated backups and reliable disaster recovery. Ensure business continuity with solutions tailored to your needs.',
  },
  {
    icon: 'cable',
    title: 'Structured Cabling',
    text: 'Robust, organized cabling systems for maximum network performance. Future-ready infrastructure that supports your growing connectivity needs.',
  },
  {
    icon: 'wifi',
    title: 'Wireless Solutions',
    text: 'High-speed, secure wireless networks that keep your team connected anywhere. Scalable, reliable Wi-Fi built for modern, mobile-first workplaces.',
  },
  {
    icon: 'phone',
    title: 'IP Telephony',
    text: 'Modern, cost-effective communication for your business. Crystal-clear voice, seamless integration, and scalable systems that grow with you.',
  },
  {
    icon: 'briefcase',
    title: 'Professional Services',
    text: 'Leverage expert IT consulting, deployment, and support to keep your business running smoothly. Customized strategies for lasting success.',
  },
];

export const WHY = [
  {
    icon: 'award',
    title: 'Proven Expertise',
    text: 'Our team delivers large-scale ICT projects with precision, ensuring your systems run securely and reliably.',
  },
  {
    icon: 'layers',
    title: 'End-to-End Solutions',
    text: 'From server room design to centralized IT management, we handle everything for seamless operations.',
  },
  {
    icon: 'shield',
    title: 'Advanced Security',
    text: 'Robust firewall solutions, proactive monitoring, and secure backup strategies to protect your business.',
  },
  {
    icon: 'monitor',
    title: 'Virtualization & VDI',
    text: 'Boost flexibility and efficiency with expertly deployed virtualization and virtual desktop infrastructure.',
  },
  {
    icon: 'wallet',
    title: 'Cost-Effective Managed Services',
    text: 'Affordable, tailored IT support that frees your team to focus on what matters most.',
  },
  {
    icon: 'refresh',
    title: 'Reliable Backup & Recovery',
    text: 'Business continuity with secure, automated backups and fast disaster recovery solutions.',
  },
];

export const ROADMAP = [
  { title: 'Choose Service', text: 'Select what you need' },
  { title: 'Schedule Meeting', text: 'Discuss goals and needs' },
  { title: 'Review Custom Plan', text: 'Get a tailored IT strategy' },
  { title: 'IT Audit', text: 'Assess systems and gaps' },
  { title: 'Make It Happen', text: 'We deliver your solution' },
  { title: 'Ongoing Support', text: 'Continuous help and monitoring' },
];

export const INDUSTRIES = ['Retail', 'Healthcare', 'Education', 'Finance', 'Manufacturing', 'And more'];

export const FAQS = [
  {
    q: 'What IT services do you provide?',
    a: 'We offer comprehensive IT solutions including server and storage design, firewall protection, virtualization (VDI), backups, structured cabling, wireless networks, IP telephony, and more — tailored to your business needs.',
  },
  {
    q: 'Why should I choose managed IT services?',
    a: 'Managed IT services let you focus on your core business while we handle your IT infrastructure, security, updates, and support — reducing costs, minimizing downtime, and improving efficiency.',
  },
  {
    q: 'How do your backup solutions protect my business?',
    a: 'We deliver secure, automated backups with robust disaster recovery plans, ensuring your critical data is always safe and quickly restorable in the event of an incident.',
  },
  {
    q: 'What is virtualization and VDI, and why use it?',
    a: 'Virtualization allows multiple virtual servers on one physical machine, cutting costs and simplifying management. VDI (Virtual Desktop Infrastructure) gives your team secure, remote access to their desktops from anywhere.',
  },
  {
    q: 'Do you help with IT infrastructure upgrades?',
    a: 'Yes! We assess your current systems, plan and implement upgrades, migrate applications, and ensure minimal downtime while modernizing your infrastructure.',
  },
  {
    q: 'Can you help secure my network?',
    a: 'Absolutely. We deploy advanced firewalls, network monitoring, and security policies to protect against cyber threats and keep your data safe.',
  },
  {
    q: 'What industries do you serve?',
    a: 'We work with businesses of all sizes across diverse industries — retail, healthcare, education, finance, manufacturing, and more — delivering customized ICT solutions for every need.',
  },
  {
    q: 'How do I get started?',
    a: "It's simple! Choose your service, schedule a meeting with us, review your custom plan, and let us handle the IT audit and implementation — so you can focus on growing your business.",
  },
];
