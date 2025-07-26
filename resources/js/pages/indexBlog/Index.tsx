import { BlogHeader } from '@/components/BlogHeader';
import { BlogHero } from '@/components/BlogHero';
import { BlogCard } from '@/components/BlogCard';
import { BlogFooter } from '@/components/BlogFooter';
import { Button } from '@/components/-BACKUP-ui/button';
import { ArrowRight, TrendingUp, BookOpen, Users, Award } from 'lucide-react';
import investmentPost from '@/assets/investment-post.jpg';

// import AppLayout from '@/layouts/app-layout';
// import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

// const breadcrumbs: BreadcrumbItem[] = [
//     {
//         title: 'Home',
//         href: '/home',
//     },
// ];

const Index = () => {
    // Mock blog posts data
    const featuredPosts = [
        {
            title: "Como Começar a Investir com Apenas R$ 100: Guia Completo para Iniciantes",
            excerpt: "Descubra estratégias práticas e seguras para dar os primeiros passos no mundo dos investimentos, mesmo com pouco dinheiro. Um guia detalhado que vai transformar sua relação com o dinheiro.",
            author: "Carlos Silva",
            date: "15 Jan 2024",
            readTime: "8 min",
            category: "Iniciantes",
            image: investmentPost,
            featured: true
        },
    ];

    const recentPosts = [
        {
            title: "Ações que Pagam Dividendos: Top 10 para 2024",
            excerpt: "Análise completa das melhores ações pagadoras de dividendos para construir uma renda passiva sustentável.",
            author: "Ana Costa",
            date: "12 Jan 2024",
            readTime: "6 min",
            category: "Dividendos",
            image: investmentPost
        },
        {
            title: "Tesouro Direto vs CDB: Qual Rende Mais?",
            excerpt: "Comparação detalhada entre as duas principais opções de renda fixa do mercado brasileiro.",
            author: "João Santos",
            date: "10 Jan 2024",
            readTime: "5 min",
            category: "Renda Fixa",
            image: investmentPost
        },
        {
            title: "Fundos Imobiliários: Guia de Análise Fundamentalista",
            excerpt: "Aprenda a analisar FIIs como um profissional e construa um portfólio sólido no setor imobiliário.",
            author: "Maria Oliveira",
            date: "08 Jan 2024",
            readTime: "12 min",
            category: "FIIs",
            image: investmentPost
        },
        {
            title: "Criptomoedas: Estratégias para Investimento Seguro",
            excerpt: "Como navegar no mundo das criptomoedas com segurança e estratégia, minimizando riscos.",
            author: "Pedro Lima",
            date: "05 Jan 2024",
            readTime: "9 min",
            category: "Crypto",
            image: investmentPost
        }
    ];

    const stats = [
        {
            icon: Users,
            number: "10.000+",
            label: "Investidores Ativos",
            description: "Comunidade engajada"
        },
        {
            icon: BookOpen,
            number: "500+",
            label: "Artigos Publicados",
            description: "Conteúdo de qualidade"
        },
        {
            icon: TrendingUp,
            number: "95%",
            label: "Taxa de Sucesso",
            description: "Dos nossos leitores"
        },
        {
            icon: Award,
            number: "4.9",
            label: "Avaliação Média",
            description: "Satisfação garantida"
        }
    ];

    return (
        // <AppLayout breadcrumbs={breadcrumbs}>
        // <Head title="Home" />
        <div className="min-h-screen">
            <BlogHeader />
            <BlogHero />

            {/* Featured Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Destaque da Semana
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            O conteúdo mais impactante para transformar sua vida financeira
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {featuredPosts.map((post, index) => (
                            <BlogCard key={index} {...post} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Posts */}
            <section className="py-20 bg-secondary/20">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-12">
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Últimos Artigos
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                Mantenha-se atualizado com as últimas tendências do mercado
                            </p>
                        </div>
                        <Button variant="outline" className="hidden md:flex">
                            Ver Todos
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {recentPosts.map((post, index) => (
                            <BlogCard key={index} {...post} />
                        ))}
                    </div>

                    <div className="text-center mt-12 md:hidden">
                        <Button variant="outline">
                            Ver Todos os Artigos
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Números que Impressionam
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Resultados que comprovam a qualidade do nosso conteúdo e o sucesso da nossa comunidade
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center glass-card p-8 rounded-2xl interactive-scale"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6">
                                    <stat.icon className="w-8 h-8 text-background" />
                                </div>
                                <div className="font-display text-3xl font-bold text-foreground mb-2">
                                    {stat.number}
                                </div>
                                <div className="font-semibold text-foreground mb-1">
                                    {stat.label}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {stat.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-20 bg-secondary/20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Explore por Categoria
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Encontre exatamente o que você precisa para evoluir
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Iniciantes",
                                description: "Primeiros passos no mundo dos investimentos",
                                count: "120 artigos"
                            },
                            {
                                title: "Ações",
                                description: "Análises e estratégias para renda variável",
                                count: "85 artigos"
                            },
                            {
                                title: "Fundos Imobiliários",
                                description: "Tudo sobre FIIs e investimentos imobiliários",
                                count: "67 artigos"
                            },
                            {
                                title: "Renda Fixa",
                                description: "Tesouro, CDB, LCI e outras opções seguras",
                                count: "93 artigos"
                            },
                            {
                                title: "Criptomoedas",
                                description: "O futuro das moedas digitais",
                                count: "45 artigos"
                            },
                            {
                                title: "Educação Financeira",
                                description: "Conceitos fundamentais e mindset",
                                count: "150 artigos"
                            }
                        ].map((category, index) => (
                            <div
                                key={index}
                                className="glass-card p-6 rounded-2xl interactive-scale cursor-pointer"
                            >
                                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                                    {category.title}
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    {category.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-primary font-medium">
                                        {category.count}
                                    </span>
                                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <BlogFooter />
        </div>
        // </AppLayout>
    );
};

export default Index;
