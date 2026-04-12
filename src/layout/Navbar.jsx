import { useState, useEffect } from "react";

const navItems = [
    { id: 'about', label: 'About' },
    { id: 'news', label: 'News' },
    { id: 'projects', label: 'Projects' },
    { id: 'cv', label: 'CV' },
];

export const Navbar = () => {
    const [activeTab, setActiveTab] = useState('about');
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-strong border-b border-border/40' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-3">
                {/* Desktop Navigation */}
                <div className="hidden lg:grid grid-cols-3 items-center gap-8">
                    {/* Name on the left */}
                    <div className="text-xl font-bold tracking-tight" style={{
                        color: 'var(--color-foreground)',
                    }}>
                        Mukhlisabonu Nematova
                    </div>

                    {/* Navigation items in the middle */}
                    {/* #to fix: nav buttons aren't real links — use <a href="#id"> anchors instead of <button> so screen readers and keyboard users can navigate */}
                    <div className="flex items-center justify-center gap-1">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className="px-4 py-2 transition-all duration-300 relative"
                                style={{
                                    color: activeTab === item.id ? 'var(--color-primary)' : 'var(--color-foreground)',
                                    letterSpacing: '0.02em',
                                }}
                                onMouseEnter={(e) => {
                                    if (activeTab !== item.id) {
                                        e.currentTarget.style.color = 'var(--color-secondary-foreground)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeTab !== item.id) {
                                        e.currentTarget.style.color = 'var(--color-foreground)';
                                    }
                                }}
                            >
                                {item.label}
                                {activeTab === item.id && (
                                    <div
                                        className="absolute left-0 right-0 h-0.5 rounded-full"
                                        style={{
                                            backgroundColor: 'var(--color-primary)',
                                            bottom: '6px'
                                        }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Log in button on the right */}
                    <div className="flex justify-end">
                        <button
                            onClick={() => setActiveTab('login')}
                            className="px-4 py-2 transition-all duration-300 relative"
                            style={{
                                color: activeTab === 'login' ? 'var(--color-primary)' : 'var(--color-foreground)',
                                letterSpacing: '0.02em',
                            }}
                            onMouseEnter={(e) => {
                                if (activeTab !== 'login') {
                                    e.currentTarget.style.color = 'var(--color-secondary-foreground)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (activeTab !== 'login') {
                                    e.currentTarget.style.color = 'var(--color-foreground)';
                                }
                            }}
                        >
                            Log in
                            {activeTab === 'login' && (
                                <div
                                    className="absolute left-0 right-0 h-0.5 rounded-full"
                                    style={{
                                        backgroundColor: 'var(--color-primary)',
                                        bottom: '6px'
                                    }}
                                />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="lg:hidden flex items-center justify-between">
                    <div className="text-xl font-bold tracking-tight" style={{
                        color: 'var(--color-foreground)',
                    }}>
                        Mukhlisabonu Nematova
                    </div>

                    {/* #to fix: hamburger button missing aria-label and aria-expanded — screen readers can't tell users what it does or whether the menu is open */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="p-2"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style={{ color: 'var(--color-foreground)' }}
                        >
                            {menuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="lg:hidden mt-4 flex flex-col gap-1 pb-2 rounded-xl backdrop-blur-md border overflow-hidden" style={{ backgroundColor: 'rgba(244, 239, 234, 0.92)', borderColor: 'rgba(222, 214, 206, 0.4)', animation: 'dropdown 0.2s ease-out both' }}>
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActiveTab(item.id);
                                    setMenuOpen(false);
                                }}
                                className="px-4 py-3 transition-all duration-300 text-left relative"
                                style={{
                                    color: activeTab === item.id ? 'var(--color-primary)' : 'var(--color-foreground)',
                                    letterSpacing: '0.02em'
                                }}
                            >
                                {item.label}
                                {activeTab === item.id && (
                                    <div
                                        className="absolute left-4 right-4 h-0.5 rounded-full"
                                        style={{
                                            backgroundColor: 'var(--color-primary)',
                                            bottom: '10px'
                                        }}
                                    />
                                )}
                            </button>
                        ))}
                        <button
                            onClick={() => {
                                setActiveTab('login');
                                setMenuOpen(false);
                            }}
                            className="px-4 py-3 transition-all duration-300 text-left relative"
                            style={{
                                color: activeTab === 'login' ? 'var(--color-primary)' : 'var(--color-foreground)',
                                letterSpacing: '0.02em'
                            }}
                        >
                            Log in
                            {activeTab === 'login' && (
                                <div
                                    className="absolute left-4 right-4 h-0.5 rounded-full"
                                    style={{
                                        backgroundColor: 'var(--color-primary)',
                                        bottom: '10px'
                                    }}
                                />
                            )}
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}