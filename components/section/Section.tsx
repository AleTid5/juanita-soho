import { PropsWithChildren } from 'react';

type SectionProps = PropsWithChildren & {
  title: string;
  className?: string;
};

const Section = ({ title, className, children }: SectionProps) => (
  <section className="my-10">
    <div className="container">
      <h2 className="mb-4 text-2xl font-bold md:mb-4 lg:mb-8 md:text-3xl lg:text-4xl">
        {title}
      </h2>
      <div className={className}>{children}</div>
    </div>
  </section>
);

export default Section;
