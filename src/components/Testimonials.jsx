import React, { useEffect, useRef } from 'react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "Jessica Parker",
    role: "VP of Engineering at CloudNet",
    avatar: "https://i.pravatar.cc/150?img=68",
    text: "The deployment process is flawless. We reduced our build times by 40% in the first week. The analytics dashboard is incredibly intuitive and perfectly fits our workflow."
  },
  {
    id: 2,
    name: "Omar Fadel",
    role: "Marketing Director at Nexus",
    avatar: "https://i.pravatar.cc/150?img=59",
    text: "Our conversion rates doubled after implementing this solution. The out-of-the-box SEO optimization and clean user interface made it effortless for our team to launch campaigns quickly."
  },
  {
    id: 3,
    name: "Lily Wei",
    role: "Head of Customer Success at Horizon",
    avatar: "https://i.pravatar.cc/150?img=31",
    text: "Supporting our clients has never been easier. The integrated ticketing system and lightning-fast search capabilities give us exactly what we need to resolve issues in record time."
  },
  {
    id: 4,
    name: "Thomas Muller",
    role: "Lead Developer at FinTech Global",
    avatar: "https://i.pravatar.cc/150?img=12",
    text: "A developer's dream. The API documentation is crystal clear, and the seamless webhooks integration meant we were fully set up in under an hour. Outstanding engineering."
  },
  {
    id: 5,
    name: "Sophia Rossi",
    role: "Art Director at Studio Nova",
    avatar: "https://i.pravatar.cc/150?img=24",
    text: "Visually breathtaking and structurally sound. The design tokens make maintaining brand consistency across thousands of pages a complete breeze. I highly recommend it."
  }
];

export default function Testimonials() {
  const scrollerInnerRef = useRef(null);

  useEffect(() => {
    const scrollerInner = scrollerInnerRef.current;
    if (!scrollerInner) return;

    // Clone all the cards inside the scroller to create a seamless infinite loop
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      // Add an attribute just to denote it's a clone (optional)
      duplicatedItem.setAttribute('aria-hidden', 'true');
      scrollerInner.appendChild(duplicatedItem);
    });

    // Cleanup function in case of React StrictMode double invocation
    return () => {
      while (scrollerInner.children.length > scrollerContent.length) {
        scrollerInner.removeChild(scrollerInner.lastChild);
      }
    };
  }, []);

  return (
    <section className="testimonial-section">
      {/* Premium Dark Green Theme Background */}
      <div className="bg-gradient-base"></div>
      <div className="glow glow-top-left"></div>
      <div className="glow glow-bottom-right"></div>
      <div className="grid-overlay"></div>
      
      <div className="waves">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path className="wave wave1" fill="none" stroke="rgba(13, 148, 136, 0.15)" strokeWidth="2" d="M0,160 C320,300 420,0 720,160 C1020,320 1120,50 1440,160"></path>
          <path className="wave wave2" fill="none" stroke="rgba(6, 95, 70, 0.15)" strokeWidth="2" d="M0,200 C250,50 450,300 720,200 C990,100 1190,300 1440,200"></path>
          <path className="wave wave3" fill="none" stroke="rgba(13, 148, 136, 0.1)" strokeWidth="1" d="M0,100 C300,250 500,50 720,150 C940,250 1140,100 1440,150"></path>
        </svg>
      </div>

      <div className="floating-circles-bg">
        <div className="circle-bg c1"></div>
        <div className="circle-bg c2"></div>
        <div className="circle-bg c3"></div>
      </div>
      
      <div className="particles-bg">
        <div className="particle-bg p1"></div>
        <div className="particle-bg p2"></div>
        <div className="particle-bg p3"></div>
        <div className="particle-bg p4"></div>
        <div className="particle-bg p5"></div>
      </div>

      <div className="testimonial-header">
        <div className="badge">
          <svg className="globe-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          Trusted by 10,000+ Teams
        </div>
        <h2 className="gradient-heading">What our users are saying</h2>
        <p className="subtitle">Real feedback from people who use our product every day.</p>
      </div>

      <div className="scroller-wrapper">
        <div className="scroller" id="scroller">
          <div className="scroller-inner" ref={scrollerInnerRef}>
            {testimonials.map((testimonial) => (
              <div className="card" key={testimonial.id}>
                <div className="card-header">
                  <img src={testimonial.avatar} alt={`${testimonial.name} Avatar`} className="avatar" />
                  <div className="user-info">
                    <h3 className="name">{testimonial.name}</h3>
                    <p className="role">{testimonial.role}</p>
                  </div>
                </div>
                <div className="stars">
                  ★★★★★
                </div>
                <p className="testimonial-text">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
