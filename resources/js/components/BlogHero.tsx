import { ArrowRight, TrendingUp, DollarSign, Target } from 'lucide-react';
import { Button } from '@/components/-BACKUP-ui/button';
import heroBg from '@/assets/hero-bg.jpg';

export const BlogHero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 animate-float">
                    <div className="glass-card p-4 rounded-full">
                        <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                </div>
                <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '2s' }}>
                    <div className="glass-card p-4 rounded-full">
                        <DollarSign className="w-8 h-8 text-accent" />
                    </div>
                </div>
                <div className="absolute bottom-1/3 left-1/3 animate-float" style={{ animationDelay: '4s' }}>
                    <div className="glass-card p-4 rounded-full">
                        <Target className="w-8 h-8 text-success" />
                    </div>
                </div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto animate-fade-in">
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-8">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        <span className="text-sm font-medium text-muted-foreground">
                            Transformando pobres em investidores
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
                        <span className="bg-gradient-primary bg-clip-text text-transparent">
                            Pobre
                        </span>{' '}
                        <span className="text-foreground">
                            Investe
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                        Democratizando o acesso aos investimentos com educação financeira de qualidade,
                        estratégias práticas e análises que realmente funcionam.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            size="lg"
                            className="bg-gradient-primary hover:glow-primary interactive-scale px-8 py-6 text-lg font-semibold"
                        >
                            Começar a Investir
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="border-border hover:bg-secondary/50 interactive-scale px-8 py-6 text-lg"
                        >
                            Explorar Conteúdo
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: '10K+', label: 'Leitores' },
                            { number: '500+', label: 'Artigos' },
                            { number: '95%', label: 'Satisfação' },
                            { number: '2M+', label: 'Visualizações' },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="text-center animate-slide-up"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    );
};
