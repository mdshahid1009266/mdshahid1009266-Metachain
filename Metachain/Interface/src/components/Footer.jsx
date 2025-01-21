import { Link } from 'react-router-dom'; // Import Link

const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { to: "/about", text: "About Us" },
        { to: "/careers", text: "Careers" },
        { to: "/contact", text: "Contact" },
        { to: "/blog", text: "Blog" },
      ],
    },
    {
      title: "Products",
      links: [
        { to: "/exchange", text: "Exchange" },
        { to: "/wallet", text: "Wallet" },
        { to: "/api", text: "API" },
        { to: "/institutional", text: "Institutional" },
      ],
    },
    {
      title: "Support",
      links: [
        { to: "/help", text: "Help Center" },
        { to: "/faq", text: "FAQ" },
        { to: "/security", text: "Security" },
        { to: "/fees", text: "Fees" },
      ],
    },
    {
      title: "Legal",
      links: [
        { to: "/terms", text: "Terms of Service" },
        { to: "/privacy", text: "Privacy Policy" },
        { to: "/risk", text: "Risk Disclosure" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between md:flex-row">
          {footerLinks.map((section, index) => (
            <div key={index} className="mb-4 min-w-[200px] flex-1 w-full md:w-auto">
              <h4 className="text-white text-lg mb-2">{section.title}</h4>
              <ul className="list-none p-0 m-0">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-1">
                    <Link to={link.to} className="hover:text-gray-100 transition">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 w-full border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} Metachain. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;