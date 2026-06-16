function Footer() {
  return (
    <footer className="bg-gray-100 mt-12 border-t">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-3">Jobs by Location</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Jobs in Bangalore</li>
              <li>Jobs in Hyderabad</li>
              <li>Jobs in Mumbai</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Jobs by Skill</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Software Engineer</li>
              <li>Tester Jobs</li>
              <li>Data Analyst</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <p className="text-gray-600">© 2026 apna clone</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;