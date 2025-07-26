import { TrendingUp, Mail, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/-BACKUP-ui/button';
import { Input } from '@/components/-BACKUP-ui/input';
import logo from '@/assets/logo.jpg';

export const BlogFooter = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        'Conteúdo': [
            'Investimentos',
            'Educação Financeira',
            'Análises de Mercado',
            'Guias para Iniciantes',
            'Calculadoras'
        ],
        'Recursos': [
            'Blog',
            'Newsletter',
            'Podcast',
            'E-books Gratuitos',
            'Webinars'
        ],
        'Sobre': [
            'Nossa História',
            'Equipe',
            'Missão',
            'Contato',
            'Parcerias'
        ],
        'Legal': [
            'Política de Privacidade',
            'Termos de Uso',
            'Disclaimer',
            'Cookies',
            'LGPD'
        ]
    };

    const socialLinks = [
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Youtube, href: '#', label: 'YouTube' },
    ];

    return (
        <footer className="relative mt-20">
            {/* Newsletter Section */}
            <div className="glass-card mx-4 mb-12 rounded-3xl overflow-hidden">
                <div className="bg-gradient-primary p-8 md:p-12">
                    <div className="container mx-auto text-center">
                        <div className="max-w-2xl mx-auto">
                            <h3 className="font-display text-3xl md:text-4xl font-bold text-background mb-4">
                                Receba as melhores estratégias
                            </h3>
                            <p className="text-background/90 text-lg mb-8">
                                Newsletter semanal com análises exclusivas, dicas de investimento e oportunidades que você não pode perder.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <Input
                                    placeholder="Seu melhor e-mail"
                                    className="bg-background/20 border-background/30 text-background placeholder:text-background/70 focus:ring-background"
                                />
                                <Button
                                    variant="secondary"
                                    className="bg-background text-primary hover:bg-background/90 font-semibold px-8"
                                >
                                    <Mail className="w-4 h-4 mr-2" />
                                    Inscrever-se
                                </Button>
                            </div>

                            <p className="text-background/70 text-sm mt-4">
                                Mais de 10.000 investidores já recebem nossa newsletter.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="bg-background border-t border-border">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                        {/* Brand */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center space-x-3 mb-6">
                                <img
                                    src={logo}
                                    alt="Pobre Investe"
                                    className="w-12 h-12 rounded-lg"
                                />
                                <div className="flex items-center space-x-2">
                                    <h2 className="font-display font-bold text-2xl text-foreground">
                                        Pobre Investe
                                    </h2>
                                    <TrendingUp className="w-6 h-6 text-primary" />
                                </div>
                            </div>

                            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
                                Democratizando o acesso aos investimentos através de educação financeira de qualidade e estratégias práticas para todos.
                            </p>

                            {/* Social Links */}
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        className="flex items-center justify-center w-10 h-10
                                        glass-card
                                        rounded-full hover:bg-teste-50 hover:text-background transition-all duration-300 interactive-scale"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Footer Links */}
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category}>
                                <h3 className="font-display font-semibold text-foreground mb-4">
                                    {category}
                                </h3>
                                <ul className="space-y-3">
                                    {links.map((link) => (
                                        <li key={link}>
                                            <a
                                                href="#"
                                                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-muted-foreground text-sm mb-4 md:mb-0">
                            © {currentYear} Pobre Investe. Todos os direitos reservados.
                        </p>

                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                            <span>Feito com ❤️ para investidores brasileiros</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
