import { Section } from '../layout/Section';

const Banner = () => (
  <Section yPadding="py-4">
    <div className="text-4xl text-center flex flex-col p-4 sm:items-center sm:justify-between sm:p-12 bg-mainPurple-300 rounded-[40px]">
      <div className="font-semibold text-white">Blog</div>
    </div>
  </Section>
);

export { Banner };
