import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  GraduationCap, 
  Phone,
  Download,
  UserPlus,
  Send
} from 'lucide-react';

const MainHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const location = useLocation();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navigation = [
    {
      name: 'About Us',
      href: '/about',
      submenu: [
        { name: 'Vision', href: '/about/vision' },
        { name: 'Mission', href: '/about/mission' },
        { name: 'Our Commitment', href: '/about/commitment' },
        { name: 'Our People', href: '/about/people' },
        { name: 'Council', href: '/about/council' },
        { name: "Director's Message", href: '/about/director-message' },
        { name: 'History', href: '/about/history' },
        { name: 'Placements', href: '/about/placements' },
        { name: 'Events & Conferences', href: '/about/events' },
        { name: 'Contact/Enquiry', href: '/about/contact' }
      ]
    },
    {
      name: 'Courses',
      href: '/courses',
      submenu: [
        { 
          name: 'Vocational Courses',
          submenu: [
            { 
              name: 'Electronics & Hardware',
              submenu: [
                { name: 'Electronics & Hardware', href: '/courses/electronics' },
                { name: 'Multi Skill Technician (Electrical)', href: '/courses/electrical' },
                { name: 'Solar and LED Technician', href: '/courses/solar' },
                { name: 'Mechanical Filter', href: '/courses/mechanical' },
                { name: 'Field Engineer RACW', href: '/courses/racw' },
                { name: 'Field Technician AC', href: '/courses/ac' }
              ]
            },
            {
              name: 'Apparel, Made-ups & Home Furnishing',
              submenu: [
                { name: 'Apparel, Made-ups & Home Furnishing', href: '/courses/apparel' },
                { name: 'Assistant Fashion Designer', href: '/courses/fashion-designer' }
              ]
            },
            {
              name: 'Beauty & Wellness',
              submenu: [
                { name: 'Beauty & Wellness', href: '/courses/beauty' },
                { name: 'Make Up Trainer', href: '/courses/makeup-trainer' },
                { name: 'Yoga Trainer', href: '/courses/yoga-trainer' }
              ]
            },
            {
              name: 'BFSI',
              submenu: [
                { name: 'BFSI', href: '/courses/bfsi' },
                { name: 'Accounts Executive (Statutory Compliance)', href: '/courses/accounts-executive' },
                { name: 'Goods and Services Tax (GST) Accounts Assistant', href: '/courses/gst-assistant' }
              ]
            },
            {
              name: 'Green Jobs',
              submenu: [
                { name: 'Green Jobs', href: '/courses/green' },
                { name: 'Solar PV Business Development Executive', href: '/courses/solar-pv-executive' }
              ]
            },
            {
              name: 'Construction',
              submenu: [
                { name: 'Construction', href: '/courses/construction' },
                { name: 'Supervisor Electrical Works', href: '/courses/electrical-supervisor' }
              ]
            },
            {
              name: 'IT-ITES',
              submenu: [
                { name: 'IT-ITES', href: '/courses/it' },
                { name: 'Hardware Engineer', href: '/courses/hardware-engineer' },
                { name: 'Software Engineer', href: '/courses/software-engineer' },
                { name: 'Web Developer', href: '/courses/web-developer' }
              ]
            },
            {
              name: 'Management & Entrepreneurship',
              submenu: [
                { name: 'Management & Entrepreneurship', href: '/courses/management' },
                { name: 'Office Assistant', href: '/courses/office-assistant' }
              ]
            },
            {
              name: 'Retail',
              submenu: [
                { name: 'Retail', href: '/courses/retail' },
                { name: 'Retail Store Manager', href: '/courses/retail-manager' }
              ]
            },
            {
              name: 'Tourism & Hospitality',
              submenu: [
                { name: 'Tourism & Hospitality', href: '/courses/tourism' },
                { name: 'Front Office Manager', href: '/courses/front-office-manager' }
              ]
            }
          ]
        },
        {
          name: 'Professional Courses',
          submenu: [
            { name: 'BBA with Triple Certification', href: '/courses/bba' },
            { name: 'B.Com with Triple Certification', href: '/courses/bcom' },
            { name: 'BCA with Triple Certification', href: '/courses/bca' },
            { name: 'Financial Modelling', href: '/courses/financial' },
            { name: 'MBA in Banking and Finance', href: '/courses/mba' },
            { name: 'PG Diploma in Banking and Finance', href: '/courses/pgd' },
            { name: 'Advanced Diploma in Banking and Finance', href: '/courses/advanced' }
          ]
        },
        { name: 'Short Term Courses', href: '/courses/short-term' },
        { name: 'Digital Library', href: '/courses/library' }
      ]
    },
    {
      name: 'ATM Campus',
      href: '/campus',
      submenu: [
        { name: 'Admission', href: '/admission' },
        { name: 'Our Campus', href: '/campus' },
        { name: 'Facilities', href: '/campus#facilities' },
        { name: 'ATM Gallery', href: '/campus#gallery' },
        { name: 'Ghaziabad Job Fair Gallery', href: '/campus#ghaziabad' },
        { name: 'Faridabad Job Fair Gallery', href: '/campus#faridabad' },
        { name: 'FAQ', href: '/campus#faq' },
        { name: 'Why ATM', href: '/why-atm' }
      ]
    },
    { name: 'Why ATM-GBS', href: '/why-atm' },
    {
      name: 'PRIVATE ITI',
      href: '/iti',
      submenu: [
        { name: 'ITI Courses', href: '/iti#courses' },
        { name: 'NSDC Courses', href: '/iti#nsdc' }
      ]
    },
    { name: 'Placement', href: '/placement' },
    { name: 'SKILLS', href: '/skills' },
    { name: 'Blog', href: '/blog' }
  ] as any[];

  const actionButtons = [
    { name: 'Download Brochure', icon: Download, href: '/brochure', variant: 'outline' },
    { name: 'Download Application', icon: Download, href: '/application', variant: 'outline' },
    { name: 'Apply Online', icon: UserPlus, href: '/admission', variant: 'primary' },
    { name: 'Refer a Friend', icon: Send, href: '/refer', variant: 'outline' }
  ];

  // Keyboard navigation for desktop dropdowns
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenDropdown(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span>ATM Global Business School (ATM-GBS) - Excellence in Education Since 1999</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <span>+91 97 116 12832</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center py-0.5 lg:py-1">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-1 rounded-lg">
              <GraduationCap className="h-4 w-4 text-white" />
            </div>
            <div>
              <h1 className="text-xs lg:text-sm font-bold text-gray-900">ATM Global</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-2 lg:space-x-3"
            ref={navRef}
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
                tabIndex={0}
                aria-haspopup={!!item.submenu}
                aria-expanded={openDropdown === item.name}
                onFocus={() => handleMouseEnter(item.name)}
                onBlur={handleMouseLeave}
              >
                <Link
                  to={item.href}
                  className={`flex items-center px-2 py-1 text-xs font-medium transition-colors duration-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    isActive(item.href)
                      ? 'text-blue-600 border-b border-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown
                      className={`ml-0.5 h-3 w-3 transition-transform duration-200 ${
                        openDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </Link>
                {/* Dropdown Menu */}
                {item.submenu && (
                  <div
                    className={`absolute top-full left-0 mt-1 w-56 lg:w-64 bg-white rounded-lg shadow-2xl border border-gray-200 py-1 z-50 transition-all duration-200 origin-top opacity-0 scale-95 pointer-events-none ${
                      openDropdown === item.name ? 'opacity-100 scale-100 pointer-events-auto' : ''
                    }`}
                    role="menu"
                    aria-label={item.name}
                  >
                    {item.submenu.map((subitem) => (
                      <div key={subitem.name} className="relative group">
                        {subitem.submenu ? (
                          <>
                            <div className="flex items-center justify-between px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer group-focus-within:bg-blue-50 group-focus-within:text-blue-600">
                              {subitem.name}
                              <ChevronDown className="ml-1 h-3 w-3 rotate-270" />
                            </div>
                            <div className="absolute left-full top-0 ml-1 w-56 lg:w-64 bg-white rounded-lg shadow-2xl border border-gray-200 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50">
                              {subitem.submenu.map((subsubitem) => (
                                <div key={subsubitem.name} className="relative group/sub">
                                  {subsubitem.submenu ? (
                                    <>
                                      <div className="flex items-center justify-between px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer group-focus-within:bg-blue-50 group-focus-within:text-blue-600">
                                        {subsubitem.name}
                                        <ChevronDown className="ml-1 h-3 w-3 rotate-270" />
                                      </div>
                                      <div className="absolute left-full top-0 ml-1 w-56 lg:w-64 bg-white rounded-lg shadow-2xl border border-gray-200 py-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50">
                                        {subsubitem.submenu.map((subsubsubitem) => (
                                          <Link
                                            key={subsubsubitem.name}
                                            to={subsubsubitem.href}
                                            className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded"
                                            tabIndex={0}
                                          >
                                            {subsubsubitem.name}
                                          </Link>
                                        ))}
                                      </div>
                                    </>
                                  ) : (
                                    <Link
                                      to={subsubitem.href}
                                      className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded"
                                      tabIndex={0}
                                    >
                                      {subsubitem.name}
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </div>
                          </>
                        ) : (
                          <Link
                            to={subitem.href}
                            className="block px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded"
                            tabIndex={0}
                          >
                            {subitem.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons (hide Download buttons on desktop) */}
          <div className="hidden lg:flex items-center space-x-2">
            {actionButtons.filter((button) => button.name !== 'Download Brochure' && button.name !== 'Download Application').map((button) => {
              const Icon = button.icon;
              return (
                <Link
                  key={button.name}
                  to={button.href}
                  className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    button.variant === 'primary'
                      ? 'bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:from-blue-700 hover:to-orange-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                  }`}
                >
                  <Icon className="h-3 w-3 mr-1" />
                  {button.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-30">
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-2xl absolute top-0 left-0 w-4/5 max-w-xs h-full overflow-y-auto animate-slideIn">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors w-full text-left"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <button
                        className="p-1 focus:outline-none"
                        onClick={() => setOpenMobileDropdown(openMobileDropdown === item.name ? null : item.name)}
                        aria-label={openMobileDropdown === item.name ? 'Collapse submenu' : 'Expand submenu'}
                      >
                        <ChevronDown
                          className={`h-4 w-4 ml-1 transition-transform duration-200 ${openMobileDropdown === item.name ? 'rotate-180' : ''}`}
                        />
                      </button>
                    )}
                  </div>
                  {/* Mobile Dropdown */}
                  {item.submenu && openMobileDropdown === item.name && (
                    <div className="ml-4 border-l border-blue-100 pl-2 py-1 animate-fadeIn">
                      {item.submenu.map((subitem) => (
                        <div key={subitem.name}>
                          {subitem.submenu ? (
                            <>
                              <div className="flex items-center justify-between px-2 py-1 text-sm font-medium text-gray-600">
                                {subitem.name}
                                <ChevronDown className="h-3 w-3 ml-1" />
                              </div>
                              <div className="ml-4 border-l border-blue-50 pl-2">
                                {subitem.submenu.map((subsubitem) => (
                                  <div key={subsubitem.name}>
                                    {subsubitem.submenu ? (
                                      <>
                                        <div className="flex items-center justify-between px-2 py-1 text-sm font-medium text-gray-600">
                                          {subsubitem.name}
                                          <ChevronDown className="h-3 w-3 ml-1" />
                                        </div>
                                        <div className="ml-4 border-l border-blue-50 pl-2">
                                          {subsubitem.submenu.map((subsubsubitem) => (
                                            <Link
                                              key={subsubsubitem.name}
                                              to={subsubsubitem.href}
                                              className="block px-2 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                                              onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                              {subsubsubitem.name}
                                            </Link>
                                          ))}
                                        </div>
                                      </>
                                    ) : (
                                      <Link
                                        to={subsubitem.href}
                                        className="block px-2 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        {subsubitem.name}
                                      </Link>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </>
                          ) : (
                            <Link
                              to={subitem.href}
                              className="block px-2 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subitem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Mobile Action Buttons (show all, including Download) */}
              <div className="pt-2 space-y-1">
                {actionButtons.map((button) => {
                  const Icon = button.icon;
                  return (
                    <Link
                      key={button.name}
                      to={button.href}
                      className={`flex items-center px-2 py-1 text-xs font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                        button.variant === 'primary'
                          ? 'bg-gradient-to-r from-blue-600 to-orange-500 text-white'
                          : 'bg-gray-100 text-gray-700 border border-gray-300'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Icon className="h-3 w-3 mr-1" />
                      {button.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slideIn {
          animation: slideIn 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </header>
  );
};

export default MainHeader;