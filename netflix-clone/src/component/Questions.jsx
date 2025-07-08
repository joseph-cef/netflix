import React, { useState } from 'react'

function Questions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqs = [
    {
      question: "What is Netflix?",
      answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
    },
    {
      question: "How much does Netflix cost?",
      answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD $X to $Y a month. No extra costs, no contracts."
    },
    {
      question: "Where can I watch?",
      answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app."
    },
    {
      question: "How do I cancel?",
      answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime."
    },
    {
      question: "What can I watch on Netflix?",
      answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    }
  ];

  return (
    <div className='px-10 h-screen'>
      <div className='text-2xl font-bold mb-8'>
        Frequently Asked Questions
      </div>

      <div>
        {faqs.map((faq, index) => (
          <div key={index}>
            <div 
              className='text-2xl bg-gray-700 p-5 flex justify-between items-center mt-1 hover:bg-gray-600 cursor-pointer'
              onClick={() => toggleAnswer(index)}
            >
              <div>
                {faq.question}
              </div>
              <div className='text-3xl text-gray-400 font-bold'>
                {activeIndex === index ? '×' : '+'}
              </div>
            </div>
            {activeIndex === index && (
              <div className='bg-gray-800 p-5 text-xl'>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Questions