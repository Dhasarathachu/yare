export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Website Name. All Rights Reserved.
          </p>
          <div className="mt-4">
            <a href="/privacy-policy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
            <a href="/terms-of-service" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
            <a href="/contact" className="text-gray-400 hover:text-white mx-2">Contact</a>
          </div>
        </div>
      </footer>
    );
  }
  