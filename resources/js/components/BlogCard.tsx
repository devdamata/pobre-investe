import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/-BACKUP-ui/button';

interface BlogCardProps {
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    featured?: boolean;
}

export const BlogCard = ({
    title,
    excerpt,
    author,
    date,
    readTime,
    category,
    image,
    featured = false
}: BlogCardProps) => {
    return (
        <article className={`group glass-card overflow-hidden interactive-scale ${featured ? 'md:col-span-2 lg:col-span-2' : ''
            }`}>
            {/* Image */}
            <div className="relative overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${featured ? 'h-64 md:h-80' : 'h-48'
                        }`}
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center space-x-1 glass-card px-3 py-1 rounded-full text-xs font-medium">
                        <TrendingUp className="w-3 h-3" />
                        <span>{category}</span>
                    </span>
                </div>

                {/* Featured Badge */}
                {featured && (
                    <div className="absolute top-4 right-4">
                        <span className="bg-gradient-gold px-3 py-1 rounded-full text-xs font-bold text-background">
                            Destaque
                        </span>
                    </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className={`p-6 ${featured ? 'md:p-8' : ''}`}>
                {/* Title */}
                <h3 className={`font-display font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300 ${featured ? 'text-2xl md:text-3xl' : 'text-xl'
                    }`}>
                    {title}
                </h3>

                {/* Excerpt */}
                <p className={`text-muted-foreground leading-relaxed mb-4 ${featured ? 'text-base line-clamp-3' : 'text-sm line-clamp-2'
                    }`}>
                    {excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                        <span className="font-medium text-foreground">{author}</span>
                        <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{readTime}</span>
                        </div>
                    </div>
                </div>

                {/* Read More Button */}
                <Button
                    variant="ghost"
                    className="group/btn p-0 h-auto text-primary hover:text-primary/80 font-semibold"
                >
                    Ler mais
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
            </div>
        </article>
    );
};
