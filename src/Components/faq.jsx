import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  // State for form submission status
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const faqs = [
    {
      question: "How long does a website take?",
      answer: "Most standard business websites take between 1 to 2 weeks to complete, depending on the scope and features required."
    },
    {
      question: "How much does it cost?",
      answer: "Our pricing is custom-tailored to your startup or business budget. We offer affordable packages starting from basic landing pages to full e-commerce platforms."
    },
    {
      question: "Will it be mobile responsive?",
      answer: "Yes! Every website we build is 100% responsive and optimized to look and function perfectly across mobile phones, tablets, and desktops."
    },
    {
      question: "Do you provide SEO?",
      answer: "Absolutely. All our websites are built with on-page SEO best practices, clean semantics, and fast loading speeds to help you rank higher on search engines."
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Function to handle sending form data to your email
  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    // Replace with your Web3Forms Access Key from https://web3forms.com/
    formData.append("access_key", "9136a1a3-4c6d-40e2-9383-7e293c385790");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success! Your message has been sent.");
        event.target.reset(); // Clear form inputs
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950 text-white scroll-mt-20 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-0.5 w-12 sm:w-24 bg-gradient-to-r from-transparent to-blue-400 rounded-full"></div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-center">
            Got Questions? <span className="text-blue-400">Let's Connect</span>
          </h2>
          <div className="h-0.5 w-12 sm:w-24 bg-gradient-to-l from-transparent to-blue-400 rounded-full"></div>
        </div>

        {/* Main Grid: FAQ & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          
          {/* FAQ Accordion Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Frequently Asked Questions</h3>
              <p className="text-slate-400 text-sm">Quick answers to common questions about our web development services.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div 
                    key={index}
                    className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between p-5 text-left font-semibold text-white hover:text-blue-400 transition-colors focus:outline-none"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-emerald-400 text-lg">✔</span>
                        {faq.question}
                      </span>
                      <svg 
                        className={`w-5 h-5 transform transition-transform duration-300 text-blue-400 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-slate-300 text-sm sm:text-base border-t border-slate-800/60 pt-3 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Professional Contact Form */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl relative">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-1">Get Free Quote</h3>
              <p className="text-slate-400 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Gourav Kumar"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="gourav@example.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Project Details</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your business and goals..."
                  rows="4"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all duration-300 transform active:scale-95 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* Status Message Display */}
              {result && (
                <p className={`text-center text-sm font-medium mt-3 ${result.includes("Success") ? "text-emerald-400" : "text-amber-400"}`}>
                  {result}
                </p>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;