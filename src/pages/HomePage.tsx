import React from 'react';

const categories = [
  { name: 'JavaScript', slug: '/questions/js' },
  { name: 'AWS', slug: '/questions/aws' },
  { name: 'React', slug: '/questions/react' },
  { name: 'Angular', slug: '/questions/angular' },
];

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Topics
          </h2>
          <p className="py-5">Please Select a Topic to start reviewing your knowledge on that topic</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => (
              <div
                key={category.slug}
                className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
              >
                <div className="flex-1 flex flex-col p-8">
                  <h3 className="text-gray-900 text-lg font-medium">{category.name}</h3>
                </div>
                <div>
                  <a
                    href={`${category.slug}`}
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-b-lg text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Select Topic
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;