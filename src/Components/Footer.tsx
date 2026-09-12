import logo from '../assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#F1F5F9]">
      <div className="container max-w-7xl mx-auto px-4 md:px-8 pt-14 pb-8">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-8">
          {/* brand */}
          <div className="flex-1 max-w-sm">
            <div className="flex items-center cursor-pointer">
              <img src={logo} alt="" />
            </div>

            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-8 flex items-center gap-5">
              <a
                href="#"
                className="text-sm font-medium text-gray-800 hover:text-pink-600 transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-sm font-medium text-gray-800 hover:text-pink-600 transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-sm font-medium text-gray-800 hover:text-pink-600 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* columns */}
          <div className="flex flex-1 justify-between gap-8">
            {/* product */}
            <div>
              <h4 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">
                Product
              </h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* company */}
            <div>
              <h4 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">
                Company
              </h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* legal */}
            <div>
              <h4 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">
                Legal
              </h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="mt-14 border-t border-[#F1F5F9]" />

        {/* bottom bar */}
        <div className="mt-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
