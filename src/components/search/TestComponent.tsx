import BeLogo from '@/images/logos/behance.svg';

import Image from 'next/image';

const TestComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      {/* <div
        style="background-image: url(https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
        className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
      ></div> */}
      <Image src={BeLogo} alt="Behance Logo" height={180} width={180} />
      <div className="w-56 md:w-64 bg-white -mt-10">
        <div className="uppercase">Nike Revoltadsfadsfadsfasd</div>
      </div>
    </div>
  );
};

export default TestComponent;
