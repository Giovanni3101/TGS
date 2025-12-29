import React from 'react';
import SeoHead from '../../components/SeoHead.jsx';
import BlogLanding from '../../components/tgs/news/Pages/BlogLanding';

export default function News() {
    return (
        <>
            <SeoHead
                title="News & Insights | The Growth Sphere"
                description="Read the latest stories, updates, and insights from The Growth Sphere community."
                ogTitle="News & Insights | The Growth Sphere"
                ogDescription="Read the latest stories, updates, and insights from The Growth Sphere community."
                ogImage="/tgs1.png"
            />
            <div>
                <BlogLanding />
            </div>
        </>
    )
}