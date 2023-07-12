import React from 'react';

export default function Footer() {
  return (
    <footer className="p-1 bg-dark text-center text-lg-start text-light">
      

      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6">
            <div className="lg-4 xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Tecliason
              </h6>
              <div>
                We provide a wide range of equipment and services for power plants, including electrical and mechanical systems, generators, turbines, and more. Trust us for all your power plant needs.
              </div>
            </div>

            <div className="lg-3 xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg><div>&nbsp;</div>
                120 Manwood Road Se41se London UK.
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg><div>&nbsp;</div>
                enquiry@tecliaison.com
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg><div>&nbsp;</div>
                + 00 44 7485 121884 
              </div>
            </div>

            <div className="lg-2 xl-2 mx-auto mb-4 hidden sm:block">
              <h6 className="text-uppercase fw-bold mb-4">Quick links</h6>
              <div>
                <a href="#" className="text-reset">
                  Pricing
                </a>
              </div>
              <div>
                <a href="#" className="text-reset">
                  Settings
                </a>
              </div>
              <div>
                <a href="#" className="text-reset">
                  Orders
                </a>
              </div>
              <div>
                <a href="#" className="text-reset">
                  Help
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {new Date().getFullYear()} Company Name. All rights reserved.
        <a className="text-reset fw-bold" href="https://example.com/">
          Website Link
        </a>
      </div>
    </footer>
  );
}

