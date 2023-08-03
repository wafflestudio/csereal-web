import Link from 'next/link';

import { aboutLinks, resourcesLinks, researchLinks, moreLinks, FooterLink } from './footerLinks';

export default function Footer() {
  return (
    <>
      <FooterTop />
      <FooterBottom />
    </>
  );
}

function FooterTop() {
  return (
    <div className="bg-white px-[3.75rem] py-8 flex ">
      <LinkGroup groupName="About" links={aboutLinks} width="w-[7.5rem]" />
      <LinkGroup groupName="Resources" links={resourcesLinks} width="w-[8.25rem]" />
      <LinkGroup groupName="Research" links={researchLinks} width="w-[9rem]" />
      <LinkGroup groupName="More" links={moreLinks} width="w-[6.5rem]" />
    </div>
  );
}

interface LinkGroupProps {
  groupName: string;
  links: FooterLink[];
  width: string;
}

function LinkGroup({ groupName, links, width }: LinkGroupProps) {
  return (
    <section>
      <h3 className={`text-neutral-600 text-xs font-medium mb-2 ${width}`}>{groupName}</h3>
      <ul>
        {links.map((link, i) => (
          <li key={i} className="text-neutral-500 text-[.625rem] font-normal mb-2">
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function FooterBottom() {
  return <div className="bg-neutral-100"></div>;
}
