import type { Resume } from "@/types/resume";

export function getContent(): Resume {
  return {
    name: "Eddie T. Lou",
    street1: "",
    street2: "",
    locality: "Dublin",
    region: "CA",
    postalCode: "94568",
    email: "resume@edlou.com",
    phone: "",
    urlLinkedin: "https://www.linkedin.com/in/edlou/",
    summary: "<p>UX leader with 25+ years of experience building design organizations and shaping strategy, systems, and experiences across consumer and enterprise domains. Recognized for combining design craft, organizational maturity, and innovation to deliver measurable impact.</p><p>Author of <a href=\"/assets/r/InVision_DesignEngineeringHandbook.pdf\" target=\"_blank\">Design Engineering Handbook</a> (InVision’s Design Better).</p>",
    competencies: "<ul><li><strong>Vision &amp; Strategy</strong> - Defining and championing UX strategy that aligns with business goals.</li><li><strong>Design Craft &amp; Systems</strong> - Elevating execution, visual storytelling, and enterprise-scale design systems.</li><li><strong>Innovation &amp; Emerging Tech</strong> - Exploring generative AI, automation, and ML-powered experiences.</li><li><strong>Leadership &amp; Influence</strong> - Scaling diverse teams, aligning cross-functional partners, and driving UX maturity.</li><li><strong>Operational Rigor</strong> - Implementing scalable processes, governance, and budget discipline.</li></ul>",
    experience: [
      {
        company: "Indeed",
        locality: "San Francisco",
        region: "CA",
        time: "April 2017 - April 2024",
        role: "Senior UX Director",
        intro: "Transformed Indeed’s UX organization into a strategic partner to the business, maturing design capabilities and delivering cohesive global experiences.",
        description: "<li><strong>Design & Experience Leadership</strong> - Delivered pixel-perfect, mobile-first designs and scaled Indeed’s design system to 98% adoption in product/email, 75% in marketing, and 80% in internal tools.</li><li><strong>AI & Innovation</strong> - Explored AI/ML-driven personalization, workflow automation, and generative AI in enterprise design workflows.</li><li><strong>Accessibility & Global Reach</strong> - Implemented WCAG 2.1 AA and internationalization standards, ensuring inclusive design worldwide.</li><li><strong>Team & Executive Impact</strong> - Mentored a diverse UX team (top 5% engagement) and presented UX vision to C-suite, securing investment and alignment.</li>"
      }, {
        company: "BigCommerce",
        locality: "San Francisco",
        region: "CA",
        time: "May 2014 - March 2017",
        role: "UX Engineering Manager",
        intro: "Built and led the SF-based frontend team, modernizing BigCommerce’s storefront platform through design-engineering alignment.",
        description: "<li><strong>Team Building</strong> - Recruited and developed UX Engineers, fostering collaboration across SF and Sydney.</li><li><strong>Design Standards</strong> - Established UI patterns and component standards, accelerating development and consistency.</li><li><strong>Platform Modernization</strong> - Led re-architecture of the storefront platform, enabling scalable growth.</li><li><strong>Framework Innovation</strong> - Co-created the next-gen theme engine framework powering all BigCommerce storefronts.</li>"
      }, {
        company: "Visa",
        locality: "Foster City",
        region: "CA",
        time: "November 2012 - May 2014",
        role: "UI Engineering Director",
        intro: "Directed Visa’s UI engineering teams to deliver the next generation of Visa Checkout, ensuring security, accessibility, and global scalability.",
        description: "<li><strong>Accessibility &amp; Compliance</strong> - Achieved full WCAG 2.0 AA compliance, strengthening trust and inclusivity.</li><li><strong>Rapid Execution</strong> - Redesigned Visa Checkout site in 3 months to meet global rebrand deadlines.</li><li><strong>Performance &amp; Mobile</strong> - Introduced responsive design standards, boosting mobile usability and performance by 60%.</li><li><strong>UI Standards</strong> - Defined and scaled UI development processes, ensuring consistent, high-quality interfaces.</li>"
      }, {
        company: "Apollo Group (University of Phoenix)",
        locality: "San Francisco",
        region: "CA",
        time: "December 2011 - November 2012",
        role: "UI Engineering Manager",
        intro: "Built and managed UI team delivering innovative, accessible, and scalable e-learning platforms.",
        description: "<li><strong>Team Growth</strong> - Recruited, trained, and expanded UI engineering team to drive platform innovation.</li><li><strong>Prototyping &amp; Validation</strong> - Partnered with UX research to prototype and validate high-fidelity learning experiences.</li><li><strong>Accessibility</strong> - Delivered WCAG 2.0 AA-compliant solutions, advancing inclusivity in online education.</li>"
      }, {
        company: "Apple",
        locality: "Cupertino",
        region: "CA",
        time: "August 2011 - December 2011",
        role: "Frontend Engineering Manager",
        intro: "Managed the frontend engineering team responsible for apple.com’s homepage and flagship product launches.",
        description: "<li><strong>Launch Excellence</strong> - Directed flawless delivery of Apple.com homepage and major product pages under tight deadlines.</li><li><strong>Collaboration</strong> - Streamlined design-engineering collaboration, enabling efficient global launches.</li><li><strong>Resource Planning</strong> - Coordinated team growth and resource allocation to meet critical launch timelines.</li>"
      }
    ],
    additionalExperience: [
      {
        company: "PayPal",
        locality: "San Jose",
        region: "CA",
        time: "September 2006 - August 2011",
        role: "Frontend Engineering Manager",
        intro: "Led Consumer Experience web teams, driving adoption and engagement.",
        description: ""
      }, {
        company: "Robert Half International",
        locality: "Pleasanton",
        region: "CA",
        time: "June 2005 - Auguest 2006",
        role: "Senior UI Designer / User Researcher",
        intro: "Designed intranet solutions that improved workflow efficiency for thousands of employees across global offices.",
        description: ""
      }, {
        company: "Cisco",
        locality: "San Jose",
        region: "CA",
        time: "January 2000 - June 2005",
        role: "Senior UI Designer / User Researcher",
        intro: "Prototyped, designed, and usability-tested enterprise portals, ensuring consistent user experiences across platforms.",
        description: ""
      }
    ],
    publications: {
      type: "Author",
      title: "Design Engineering Handbook",
      publisher: "InVision’s Design Better library",
      description: "Speaker and thought leader in UX strategy, design systems, and design leadership"
    }
};
}
