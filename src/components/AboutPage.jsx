

import React, { useEffect } from "react";
import "./AboutPage.css";

// Financial background symbols
const symbols = [
  "$", "€", "₹", "%", "£", "¥", "₿", "¢", "💰", "📈",
  "$", "%", "€", "₹", "💵", "💸", "📊", "₿", "£", "¥",
  "%", "$", "€", "₹", "💰", "📈", "💵", "£", "₿", "¥",
  "₹", "%", "$", "€", "💸", "📊", "£", "¥", "💰", "₿",
  "$", "€", "%", "₹", "📈", "💵", "£", "¥", "₿", "💸",
  "💰", "%", "$", "€", "📊", "₹", "₿", "£", "¥", "💵"
];

function AboutPage() {

  // Scroll Reveal Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".about-page .reveal");

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="about-page">

      {/* FIRST TWO SECTIONS WITH ANIMATED BACKGROUND */}
      <div className="about-top-sections">

        {/* FINANCIAL BACKGROUND ANIMATION */}
        <div className="finance-background" aria-hidden="true">

          {symbols.map((symbol, index) => (
            <span
              key={index}
              className="floating-symbol"
              style={{
                left: `${(index * 37) % 100}%`,
                top: `${(index * 53) % 100}%`,
                animationDelay: `${(index % 12) * 0.7}s`,
                animationDuration: `${10 + (index % 10) * 2}s`,
                fontSize: `${18 + (index % 5) * 7}px`
              }}
            >
              {symbol}
            </span>
          ))}

          <span className="background-orb orb-1"></span>
          <span className="background-orb orb-2"></span>
          <span className="background-orb orb-3"></span>
          <span className="background-orb orb-4"></span>

        </div>

        {/* HERO SECTION */}
        <section className="about-hero reveal">
          <div className="about-hero-content">
            <span className="about-label">ABOUT MONEYWISE</span>

            <h1>
              Building Better
              <span> Financial Habits</span>
              for a Better Future
            </h1>

            <p>
              MoneyWise is a personal finance and budgeting blog
              designed to make financial education simple and
              accessible. We help you understand budgeting,
              saving, and money management through practical
              tips and easy-to-follow guidance.
            </p>

            <a href="/blog" className="about-button">
              Explore Financial Guides →
            </a>
          </div>

          <div className="about-hero-image">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900"
              alt="Personal finance planning and budgeting"
            />

            <div className="about-floating">
              <span>📈</span>
              <div>
                <h4>Grow Your Knowledge</h4>
                <p>Plan. Save. Manage.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT INTRODUCTION */}
        <section className="about-intro reveal">
          <span className="about-label">WHO WE ARE</span>

          <h2>
            Your Guide to Smarter
            <span> Money Management</span>
          </h2>

          <p>
            MoneyWise is an online financial education platform
            dedicated to helping individuals make informed
            financial decisions. We believe that managing money
            should not be complicated. Our blog shares useful
            information about creating budgets, developing
            saving habits, controlling expenses, and understanding
            everyday financial decisions. Our goal is to turn
            financial knowledge into practical steps that you
            can use in your daily life.
          </p>
        </section>

      </div>

      {/* FINANCIAL INSPIRATION GALLERY */}
      <section className="finance-gallery reveal">
        <div className="section-heading">
          <span className="about-label">FINANCIAL INSPIRATION</span>
          <h2>Build a Better Financial Future</h2>
          <p>
            Discover simple ways to save, invest, plan, and manage your money.
          </p>
        </div>

        <div className="gallery-grid">

          <div className="gallery-card">
            <img
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=900"
              alt="Saving money in a glass jar"
            />
            <div className="gallery-overlay">
              <h3>Smart Saving</h3>
              <p>Build your savings one step at a time.</p>
            </div>
          </div>

          <div className="gallery-card">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900"
              alt="Financial planning on a computer"
            />
            <div className="gallery-overlay">
              <h3>Financial Planning</h3>
              <p>Plan your income and manage expenses.</p>
            </div>
          </div>

          <div className="gallery-card">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900"
              alt="Budget and financial documents"
            />
            <div className="gallery-overlay">
              <h3>Better Budgeting</h3>
              <p>Make smarter decisions with your money.</p>
            </div>
          </div>

        </div>
      </section>

      {/* OUR PURPOSE */}
      <section className="purpose-section reveal">
        <div className="purpose-image">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900"
            alt="Financial data and money management"
          />
        </div>

        <div className="purpose-content">
          <span className="about-label">OUR PURPOSE</span>

          <h2>
            Making Financial Education
            <span> Simple for Everyone</span>
          </h2>

          <p>
            We aim to provide easy-to-understand financial
            information for beginners, students, professionals,
            and anyone who wants to improve their financial
            knowledge.
          </p>

          <ul>
            <li>Learn how to create a realistic budget.</li>
            <li>Discover practical ways to save money.</li>
            <li>Understand income and expense management.</li>
            <li>Develop responsible financial habits.</li>
          </ul>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="mission-section reveal">
        <div className="section-heading">
          <span className="about-label">WHAT DRIVES US</span>
          <h2>Our Mission & Vision</h2>
          <p>
            Helping people build financial confidence through
            knowledge and practical guidance.
          </p>
        </div>

        <div className="mission-grid">

          <div className="mission-card">
            <div className="mission-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To make personal finance education accessible
              and understandable by providing practical
              budgeting tips, saving strategies, and money
              management resources.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">🌱</div>
            <h3>Our Vision</h3>
            <p>
              To encourage a financially informed community
              where individuals develop smart money habits,
              make confident decisions, and work towards
              their financial goals.
            </p>
          </div>

        </div>
      </section>

      {/* TOPIC CATEGORIES */}
      <section className="topics-section reveal">
        <div className="section-heading">
          <span className="about-label">WHAT YOU CAN LEARN</span>
          <h2>Explore Our Finance Topics</h2>
          <p>
            Practical financial knowledge for everyday life.
          </p>
        </div>

        <div className="topics-grid">

          <a href="/categories/budgeting" className="topic-card">
            <div className="topic-icon">📊</div>
            <h3>Budgeting</h3>
            <p>
              Learn to organize your income, track expenses,
              and create a budget that works for you.
            </p>
            <span>Learn More →</span>
          </a>

          <a href="/categories/saving-tips" className="topic-card">
            <div className="topic-icon">💰</div>
            <h3>Saving Tips</h3>
            <p>
              Explore simple saving techniques and learn
              how to build better saving habits.
            </p>
            <span>Learn More →</span>
          </a>

          <a href="/categories/money-management" className="topic-card">
            <div className="topic-icon">💳</div>
            <h3>Money Management</h3>
            <p>
              Understand how to manage income, expenses,
              and everyday financial responsibilities.
            </p>
            <span>Learn More →</span>
          </a>

          <a href="/categories/financial-education" className="topic-card">
            <div className="topic-icon">📚</div>
            <h3>Financial Education</h3>
            <p>
              Improve your financial literacy with
              informative guides and useful resources.
            </p>
            <span>Learn More →</span>
          </a>

        </div>
      </section>

      {/* WHY MONEYWISE */}
      <section className="why-moneywise reveal">
        <div className="why-content">
          <span className="about-label">WHY MONEYWISE?</span>

          <h2>
            Small Financial Steps,
            <span> Big Future Possibilities</span>
          </h2>

          <p>
            We focus on sharing clear, practical, and
            beginner-friendly financial information.
            Whether you want to improve your budgeting
            skills or understand personal finance,
            MoneyWise provides educational content to
            support your learning journey.
          </p>

          <div className="why-points">
            <div>✓ Easy-to-understand articles</div>
            <div>✓ Practical financial tips</div>
            <div>✓ Beginner-friendly guidance</div>
            <div>✓ Useful money management ideas</div>
          </div>
        </div>

        <div className="why-image">
          <img
            src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=900"
            alt="Saving and managing personal finances"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta reveal">
        <span>YOUR FINANCIAL JOURNEY STARTS HERE</span>

        <h2>Make Better Money Decisions Today</h2>

        <p>
          Explore our articles, learn useful financial
          strategies, and take your first step towards
          smarter money management.
        </p>

        <a href="/blog" className="about-button">
          Start Learning Today →
        </a>
      </section>

    </main>
  );
}

export default AboutPage;
