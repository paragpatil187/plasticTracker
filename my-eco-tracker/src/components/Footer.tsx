export function Footer() {
    return (
      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-4 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1">
          <div>
            <h3 className="text-xl font-bold mb-4">About EcoTracker</h3>
            <p className="text-green-100">
              Helping individuals and communities track and improve their
              environmental impact.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-green-100 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-green-100 hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-green-700 text-white placeholder-green-200"
              />
              <button className="bg-white text-green-800 px-6 py-2 rounded font-semibold hover:bg-green-100">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center text-green-100">
          <p>&copy; 2024 EcoTracker. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  