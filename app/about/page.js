// app/about/page.js
import styles from './about.module.css';

export default function AboutPage() {
    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <h1 className={styles.heroTitle}>
                    About JS Shop
                </h1>
                <p className={styles.heroDescription}>
                    Your trusted partner in online shopping since 2020. We bring quality products and exceptional service to customers worldwide.
                </p>
            </section>

            {/* Mission Section */}
            <section className={styles.missionSection}>
                <div className={styles.missionGrid}>
                    <div>
                        <h2 className={styles.missionTitle}>
                            Our Mission
                        </h2>
                        <p className={styles.missionText}>
                            At JS Shop, we believe that shopping should be easy, enjoyable, and accessible to everyone. Our mission is to provide high-quality products at competitive prices while delivering an exceptional customer experience.
                        </p>
                        <p className={styles.missionText}>
                            We carefully curate our product selection to ensure that every item meets our strict standards for quality, value, and customer satisfaction. From electronics to fashion, home goods to accessories, we've got everything you need.
                        </p>
                    </div>
                    <div className={styles.statsCard}>
                        <div className={styles.statsContainer}>
                            <div>
                                <div className={styles.statNumber}>10K+</div>
                                <div className={styles.statLabel}>Happy Customers</div>
                            </div>
                            <div>
                                <div className={styles.statNumber}>5K+</div>
                                <div className={styles.statLabel}>Products</div>
                            </div>
                            <div>
                                <div className={styles.statNumber}>50+</div>
                                <div className={styles.statLabel}>Countries Served</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className={styles.valuesSection}>
                <h2 className={styles.sectionTitle}>
                    Our Core Values
                </h2>
                <div className={styles.valuesGrid}>
                    <div className={styles.valueCard}>
                        <div className={styles.valueEmoji}>💎</div>
                        <h3 className={styles.valueTitle}>
                            Quality First
                        </h3>
                        <p className={styles.valueDescription}>
                            We never compromise on quality. Every product is carefully selected and inspected to meet our high standards.
                        </p>
                    </div>

                    <div className={styles.valueCard}>
                        <div className={styles.valueEmoji}>🤝</div>
                        <h3 className={styles.valueTitle}>
                            Customer Trust
                        </h3>
                        <p className={styles.valueDescription}>
                            Building lasting relationships with our customers through transparency, honesty, and exceptional service.
                        </p>
                    </div>

                    <div className={styles.valueCard}>
                        <div className={styles.valueEmoji}>🚀</div>
                        <h3 className={styles.valueTitle}>
                            Innovation
                        </h3>
                        <p className={styles.valueDescription}>
                            Constantly improving our platform and services to provide you with the best shopping experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className={styles.storySection}>
                <div className={styles.storyContainer}>
                    <h2 className={styles.sectionTitle}>
                        Our Story
                    </h2>
                    <div className={styles.storyContent}>
                        <p>
                            JS Shop was founded in 2020 with a simple idea: make online shopping better for everyone. What started as a small team with a big vision has grown into a thriving e-commerce platform serving customers around the globe.
                        </p>
                        <p>
                            Our founders recognized that customers wanted more than just products—they wanted an experience. They wanted trust, reliability, and a company that truly cared about their satisfaction. That's exactly what we set out to build.
                        </p>
                        <p>
                            Today, we're proud to offer thousands of products across multiple categories, backed by a dedicated team that works tirelessly to ensure every order is perfect. But we're not stopping here. We're constantly evolving, listening to our customers, and finding new ways to serve you better.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className={styles.teamSection}>
                <h2 className={styles.sectionTitle}>
                    Meet Our Team
                </h2>
                <div className={styles.teamGrid}>
                    {[
                        { name: 'Sarah Johnson', role: 'CEO & Founder', emoji: '👩‍💼' },
                        { name: 'Michael Chen', role: 'CTO', emoji: '👨‍💻' },
                        { name: 'Emily Davis', role: 'Head of Operations', emoji: '👩‍🔧' },
                        { name: 'James Wilson', role: 'Customer Success', emoji: '👨‍💼' }
                    ].map((member, index) => (
                        <div key={index} className={styles.teamMember}>
                            <div className={styles.teamAvatar}>
                                {member.emoji}
                            </div>
                            <h3 className={styles.teamName}>
                                {member.name}
                            </h3>
                            <p className={styles.teamRole}>
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className={styles.whySection}>
                <h2 className={styles.sectionTitle}>
                    Why Choose JS Shop?
                </h2>
                <div className={styles.whyGrid}>
                    {[
                        {
                            icon: '✅',
                            title: 'Verified Quality',
                            description: 'All products are tested and verified for quality assurance'
                        },
                        {
                            icon: '🚚',
                            title: 'Fast Shipping',
                            description: 'Quick delivery to your doorstep with real-time tracking'
                        },
                        {
                            icon: '🔒',
                            title: 'Secure Payments',
                            description: 'Your payment information is always protected and encrypted'
                        },
                        {
                            icon: '💬',
                            title: '24/7 Support',
                            description: 'Our customer service team is always here to help you'
                        },
                        {
                            icon: '💰',
                            title: 'Best Prices',
                            description: 'Competitive pricing with regular discounts and deals'
                        },
                        {
                            icon: '🔄',
                            title: 'Easy Returns',
                            description: '30-day hassle-free return policy on most items'
                        }
                    ].map((feature, index) => (
                        <div key={index} className={styles.featureCard}>
                            <div className={styles.featureIcon}>{feature.icon}</div>
                            <div>
                                <h3 className={styles.featureTitle}>
                                    {feature.title}
                                </h3>
                                <p className={styles.featureDescription}>
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className={styles.ctaSection}>
                <h2 className={styles.ctaTitle}>
                    Ready to Start Shopping?
                </h2>
                <p className={styles.ctaDescription}>
                    Join thousands of satisfied customers and discover amazing products at unbeatable prices.
                </p>
                <div className={styles.ctaButtons}>
                    <a href="/products" className={styles.ctaPrimary}>
                        Browse Products
                    </a>
                    <a href="/contact" className={styles.ctaSecondary}>
                        Contact Us
                    </a>
                </div>
            </section>
        </div>
    );
}

export const metadata = {
    title: 'About Us - JS Shop',
    description: 'Learn more about JS Shop, our mission, values, and commitment to providing quality products and exceptional service.',
};