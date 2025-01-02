export function Skills() {
    return (
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.954c.07-.07.14-.14.21-.21.31-.31.69-.61 1.07-.87 1.13-1.13 2.9-1.13 4.03 0L18 12m-1.75 6.75l-6.75-6.75M6 18l6-6 6 6" />
              </svg>
              <span>HTML</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5A2.25 2.25 0 008.25 22.5h7A2.25 2.25 0 0018 20.25V3.75A2.25 2.25 0 0015.75 1.5h-5.25z" />
              </svg>
              <span>CSS</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5A2.25 2.25 0 008.25 22.5h7A2.25 2.25 0 0018 20.25V3.75A2.25 2.25 0 0015.75 1.5h-5.25z" />
              </svg>
              <span>JavaScript</span>
            </div>
            {/* Add more skills here */}
          </div>
        </div>
      </section>
    );
  }