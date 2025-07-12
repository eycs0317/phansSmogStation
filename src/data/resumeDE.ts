export type Content = {
  name: string;
  street1: string;
  street2: string;
  locality: string;
  region: string;
  postalCode: string;
  email: string;
  urlLinkedin: string;
  phone: string;
  summary: string;
  competencies: string;
};

export function getContent(): Content {
  return {
    name: 'Eddie T. Lou',
    street1: '7688 Saint Patrick Way',
    street2: 'Unit 5026',
    locality: 'Dublin',
    region: 'CA',
    postalCode: '94568',
    email: 'resume@edlou.com',
    urlLinkedin: 'https://www.linkedin.com/in/edlou',
    phone: '+1 (510) 610-2828',
    summary: '<p>Seasoned UX Leader with over 25 years of experience and a proven track record in leading and maturing design organizations to deliver world-class user experiences that align with company goals. Expert in developing and implementing design systems, fostering cross-functional collaboration, and defining UX strategy.</p><p>Author of <a href="/resources/InVision_DesignEngineeringHandbook.pdf">Design Engineering Handbook</a> published by Design Better, InVision.</p>',
    competencies: '<dl><dt>UX Thought Leadership</dt><dd>Demonstrated deep understanding of UX design, research, and strategy.</dd><dt>Vision and Strategy</dt><dd>Defined, communicated, and championed a compelling UX vision and strategy.</dd><dt>Brand and Design Systems</dt><dd>Directed the creation, implementation, and adoption of cohesive brand and design systems.</dd><dt>UX Maturity</dt><dd>Advanced and expanded UX capabilities, leading to significant growth and maturity.</dd><dt>Cross-Functional Collaboration</dt><dd>Collaborated with cross-functional leaders to shape product, creative, and technical decisions.</dd><dt>UX Operations</dt><dd>Enhanced and streamlined UX programs and processes for optimal autonomy and efficiency.</dd><dt>Innovation</dt><dd>Drove innovation by integrating creative and technical solutions.</dd><dt>Team Management</dt><dd>Led multidisciplinary UX teams to deliver exceptional, world-class user experiences.</dd><dt>Diversity and Growth</dt><dd>Fostered the growth of a diverse UX organization through strategic staffing and resource prioritization.</dd><dt>Financial Planning and Management</dt><dd>Expertly forecasted, planned, and managed budgets to support UX initiatives.</dd></dl>',
  };
}
