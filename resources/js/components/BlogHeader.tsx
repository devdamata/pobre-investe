import { useState } from 'react';
import { Menu, X, Search, TrendingUp } from 'lucide-react';
import { Button } from '@/components/-BACKUP-ui/button';
import { Input } from '@/components/-BACKUP-ui/input';
import logo from '@/assets/logo.jpg';

export const BlogHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'Início', href: '#' },
        { label: 'Investimentos', href: '#' },
        { label: 'Educação', href: '#' },
        { label: 'Análises', href: '#' },
        { label: 'Sobre', href: '#' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b-0">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <img
                            src={logo}
                            alt="Pobre Investe"
                            className="w-10 h-10 rounded-lg"
                        />
                        <div className="flex items-center space-x-2">
                            <h1 className="font-display font-bold text-xl text-foreground">
                                Pobre Investe
                            </h1>
                            <TrendingUp className="w-5 h-5 text-primary" />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Search & Mobile Menu */}
                    <div className="flex items-center space-x-4">
                        {/* Search Bar */}
                        <div className="hidden md:flex items-center relative">
                            <Search className="absolute left-3 w-4 h-4 text-muted-foreground" />
                            <Input
                                placeholder="Buscar artigos..."
                                className="pl-10 w-64 bg-secondary/50 border-border focus:ring-primary"
                            />
                        </div>

                        {/* Mobile Menu Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden"
                        >
                            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-border animate-fade-in">
                        <nav className="flex flex-col space-y-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-muted-foreground hover:text-primary transition-colors duration-300 py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            {/* Mobile Search */}
                            <div className="flex items-center relative mt-4">
                                <Search className="absolute left-3 w-4 h-4 text-muted-foreground" />
                                <Input
                                    placeholder="Buscar artigos..."
                                    className="pl-10 bg-secondary/50 border-border focus:ring-primary"
                                />
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};
