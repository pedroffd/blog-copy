const TestComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      <div className="flex items-center px-2 lg:px-5 py-6 bg-red-500">
        <div className="lg:block lg:ml-2">
          <div className="flex">
            <a
              href="#"
              className="ml-4 px-3 py-2 rounded-full text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-mainBlue-100 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-mainPurple-300 "
            >
              {' '}
              Location{' '}
            </a>
            <a
              href="#"
              className="ml-4 px-3 py-2 rounded-full text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-mainBlue-100 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-mainPurple-300 "
            >
              {' '}
              Article{' '}
            </a>
            <a
              href="#"
              className="ml-4 px-3 py-2 rounded-full text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-mainBlue-100 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-mainPurple-300 "
            >
              {' '}
              Recipe{' '}
            </a>
            <a
              href="#"
              className="ml-4 px-3 py-2 rounded-full text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-mainBlue-100 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-mainPurple-300 "
            >
              {' '}
              Promo{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;
