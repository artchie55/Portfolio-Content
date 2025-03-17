import React, { useState,useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Faqs = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (index) => {
    setExpanded(expanded === index ? null : index); // Toggle the selected accordion
  };

  const faqs = [
    { title: "What is PartnersDAO?", content: "PartnersDAO is a decentralized organization where members make decisions on funding, governance, and strategy using blockchain technology." },
    { title: "What are the key values?", content: "PartnersDAO values decentralization, transparency, and community-driven governance." },
    { title: "How to get Whitelisted?", content: "To get whitelisted for PartnersDAO, participate in the community, follow announcements, meet eligibility criteria, apply for the whitelist" },
    { title: "How to become Anti-Fragile?", content: "Becoming antifragile means building resilience to not just withstand challenges, but to grow stronger from them" },
    { title: "How can I stay updated on developments in PartnersDAO??", content: "You can stay informed by following PartnersDAO on social media platforms like X (formerly Twitter)" },
  ];



  useEffect(()=> {
          AOS.init({duration:2000});
        },[])

  return (
    <>
    <div className="h-[100%] bg-[#0d30f5] flex justify-center items-center pt-[350px] pb-[200px]">
      <div className="w-full max-w-[1000px] bg-[#ffffff3d] text-[#ffffff] p-6 rounded-xl shadow-lg"  data-aos='fade-up'>
        <h2 className="text-4xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="accordion space-y-6">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <button
                onClick={() => toggleAccordion(index)}
                aria-expanded={expanded === index ? "true" : "false"}
                className={`w-full text-left p-6 border rounded-lg transition-all cursor-pointer ${
                  expanded === index ? "" : ""
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="accordion-title font-bold text-[20px]">{faq.title}</span>
                  <span className="icon text-3xl">{expanded === index ? "-" : "+"}</span>
                </div>
              </button>
              {expanded === index && (
                <div className="accordion-content mt-4 p-6  border rounded-lg">
                  <p className="text-xl">{faq.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
 
          <a href='https://x.com/Artchie0' target='_blank' className='bg-[#0d30f5] text-[#ffffff88] cursor-pointer flex justify-center'>By: @Artchie0</a>
    </> 
 );
};

export default Faqs;
