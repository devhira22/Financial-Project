

import React, { useEffect, useState } from "react";
import "./HomePage.css";

function HomePage() {
  const [openCategory, setOpenCategory] = useState(null);

  const categories = [
    {
      title: "Budgeting",
      icon: "📊",
      description: "Learn how to plan and control your money.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900",
      topics: [
        "Monthly Budget Planning",
        "50/30/20 Budget Rule",
        "Managing Daily Expenses",
        "Family Budgeting",
        "Budgeting for Beginners"
      ]
    },
    {
      title: "Saving Tips",
      icon: "💰",
      description: "Discover smart ways to save money.",
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=900",
      topics: [
        "How to Save Money",
        "Emergency Fund",
        "Daily Saving Habits",
        "Smart Shopping Tips",
        "Saving for Future Goals"
      ]
    },
    {
      title: "Money Management",
      icon: "💳",
      description: "Make better financial decisions.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
      topics: [
        "Managing Personal Expenses",
        "Debt Management",
        "Income Management",
        "Financial Planning",
        "Managing Credit Cards"
      ]
    },
    {
      title: "Financial Education",
      icon: "🎓",
      description: "Improve your financial knowledge.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900",
      topics: [
        "Personal Finance Basics",
        "Understanding Investments",
        "Banking Fundamentals",
        "Financial Literacy",
        "Building Financial Goals"
      ]
    }
  ];

  const articles = [
    {
      title: "How to Create a Monthly Budget",
      category: "Budgeting",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
      description:
        "Learn simple ways to organize your income and expenses."
    },
    {
      title: "10 Smart Ways to Save Money",
      category: "Saving Tips",
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800",
      description:
        "Discover practical habits that can help you save more."
    },
    {
      title: "Improve Your Money Management",
      category: "Personal Finance",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      description:
        "Build better financial habits and make informed decisions."
    }
  ];

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

    const elements = document.querySelectorAll(".reveal");

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className="moneywise">

    {/* HERO SECTION */}

      <section className="hero" id="home">

        <div className="hero-content reveal">
          <span className="hero-label">
            YOUR FINANCIAL JOURNEY STARTS HERE
          </span>

          <h1>
            Make Better Money
            <span> Decisions Today</span>
          </h1>

          <p>
           Take control of your financial future with the right knowledge, smart planning, and better money habits. 
           Whether you want to save more, manage your budget, reduce unnecessary expenses, or make smarter financial decisions.
          </p>
          <p>
            MoneyWise is here to guide you every step of the way. Explore practical tips, 
            useful strategies, and simple financial advice to build confidence, achieve your goals, and create a more secure financial future.
          </p>

          <a href="#categories" className="primary-btn">
            Explore Categories →
          </a>
        </div>

        <div className="hero-image reveal">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000"
            alt="Financial planning and money management"
          />

          <div className="floating-card floating-card-one">
            <span>💰</span>
            <div>
              <strong>Save More</strong>
              <small>Build better habits</small>
            </div>
          </div>

          <div className="floating-card floating-card-two">
            <span>📈</span>
            <div>
              <strong>Grow Your Money</strong>
              <small>Plan your future</small>
            </div>
          </div>
        </div>

      </section>

      {/* ABOUT SECTION */}

      <section className="about section" id="about">

        <div className="about-image reveal">
          <img
            src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=900"
            alt="Financial planning"
          />
        </div>

        <div className="about-content reveal">
          <span className="section-label">ABOUT MONEYWISE</span>

          <h2>
            Learn Today, Build a
            <span> Better Tomorrow</span>
          </h2>

          <p>
            MoneyWise is a financial education and personal
            finance blog designed to help people understand
            money management.
          </p>

          <p>
            We share practical information about budgeting,
            saving money, financial planning, and developing
            healthy financial habits.
          </p>

          <a href="#categories" className="primary-btn">
            Discover More →
          </a>
        </div>

      </section>

      {/* CATEGORIES SECTION */}

      <section className="categories section" id="categories">

        <div className="background-shape shape-one"></div>
        <div className="background-shape shape-two"></div>
        <div className="background-shape shape-three"></div>

        <div className="section-heading reveal">
          <span className="section-label">
            EXPLORE OUR CONTENT
          </span>

          <h2>
            Explore Financial <span>Categories</span>
          </h2>

          <p>
            Choose your favorite financial topic and discover
            useful articles, practical guides, and helpful tips.
          </p>
        </div>

        <div className="category-grid">

          {categories.map((category, index) => (

            <div
              className="category-card reveal"
              key={category.title}
              style={{ transitionDelay: `${index * 120}ms` }}
            >

              <div className="category-image">
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                />

                <div className="image-overlay">
                  <span>{category.icon}</span>
                </div>
              </div>

              <div className="category-info">

                <h3>{category.title}</h3>

                <p>{category.description}</p>

                <button
                  className="dropdown-btn"
                  onClick={() => toggleCategory(index)}
                  aria-expanded={openCategory === index}
                >
                  {openCategory === index
                    ? "Close Topics"
                    : "Explore Topics"}

                  <span
                    className={
                      openCategory === index
                        ? "arrow rotate"
                        : "arrow"
                    }
                  >
                    ▼
                  </span>
                </button>

                <div
                  className={`dropdown-content ${
                    openCategory === index ? "dropdown-open" : ""
                  }`}
                >
                  {category.topics.map((topic, topicIndex) => (
                    <a
                      href="#articles"
                      className="topic-link"
                      key={topic}
                      style={{
                        transitionDelay:
                          openCategory === index
                            ? `${topicIndex * 80}ms`
                            : "0ms"
                      }}
                    >
                      <span>✓</span>
                      {topic}
                      <span className="topic-arrow">→</span>
                    </a>
                  ))}
                </div>

              </div>
            </div>

          ))}

        </div>

      </section>

      {/* ARTICLES SECTION */}

      <section className="articles section" id="articles">

        <div className="section-heading reveal">
          <span className="section-label">LATEST CONTENT</span>

          <h2>
            Featured <span>Articles</span>
          </h2>

          <p>
            Read helpful articles and improve your financial knowledge.
          </p>
        </div>

        <div className="article-grid">

          {articles.map((article, index) => (

            <div
              className="article-card reveal"
              key={article.title}
              style={{ transitionDelay: `${index * 150}ms` }}
            >

              <div className="article-image">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                />
              </div>

              <div className="article-content">

                <span className="article-category">
                  {article.category}
                </span>

                <h3>{article.title}</h3>

                <p>{article.description}</p>

                <a href="#categories">
                  Read More →
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* TIPS SECTION */}

      <section className="tips section">

        <div className="section-heading reveal">
          <span className="section-label">SMART FINANCIAL HABITS</span>

          <h2>
            Simple Tips for <span>Better Finance</span>
          </h2>
        </div>

        <div className="tips-grid">

          {[
            ["💵", "Create a Budget", "Plan your monthly income and expenses."],
            ["🏦", "Save Regularly", "Save a small amount from your income."],
            ["🛒", "Avoid Unnecessary Spending", "Think before making purchases."],
            ["🎯", "Set Financial Goals", "Plan short-term and long-term goals."],
            ["📚", "Learn About Finance", "Improve your financial knowledge."],
            ["📊", "Track Your Expenses", "Understand where your money goes."]
          ].map((tip, index) => (

            <div
              className="tip-card reveal"
              key={tip[1]}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span>{tip[0]}</span>
              <h3>{tip[1]}</h3>
              <p>{tip[2]}</p>
            </div>

          ))}

        </div>

      </section>

      {/* CONTACT SECTION */}

      <section className="contact section" id="contact">

        <div className="contact-content reveal">
          <span className="section-label">START YOUR JOURNEY</span>

          <h2>
            Take Control of Your
            <span> Financial Future</span>
          </h2>

          <p>
            Keep learning, make smart financial decisions,
            and build better money habits with MoneyWise.
          </p>

          <a href="#categories" className="primary-btn">
            Start Exploring →
          </a>
        </div>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <a href="#home" className="logo">
          Money<span>Wise.</span>
        </a>

        <p>
          Helping you make smarter financial decisions.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#categories">Categories</a>
          <a href="#articles">Articles</a>
        </div>

        <div className="footer-bottom">
          © 2026 MoneyWise. All Rights Reserved.
        </div>

      </footer>

    </div>
  );
}

export default HomePage;
