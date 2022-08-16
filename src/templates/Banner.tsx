import { Section } from '../layout/Section';

const Banner = () => (
  <Section yPadding="py-4" key="banner">
    <div className="h-40 text-4xl text-center flex flex-col sm:items-center sm:justify-center sm:p-12 md:p-12.4 bg-mainPurple-300 rounded-[40px]">
      <div className="font-semibold text-white">Blog</div>
    </div>
  </Section>
);

export { Banner };
