const faqs: { question: string; answer: string }[] = [
  {
    question: "What if I have no previous tech experience?",
    answer:
      "No prior tech experience is needed to join KTP. We seek potential in problem-solving, communication, and analytical skills, as well as a genuine passion for tech. If these qualities resonate with you, you'll fit right in.",
  },
  {
    question: "What does the time commitment look like?",
    answer:
      "Pledging for KTP typically requires a 2-5 hour per week commitment. After initiation, this time commitment decreases, but how much you get out of KTP depends on what you put into it, as is the case with all campus organizations.",
  },
  {
    question: "What if I can't afford dues?",
    answer:
      "Although we aim to minimize quarterly costs, we offer financial aid for those unable to afford dues. For accomodation requests or more information, contact us.",
  },
  {
    question: "Which majors are represented in KTP?",
    answer:
      "Kappa Theta Pi's members come from many tech-related majors, including Computer Science, Economics, MatSci, Industrial Engienering, Biomedical Engineering, Computer Engineering, and more. We welcome all who are passionate about tech, regardless of major.",
  },
];

function FAQElement(faq: { question: string; answer: string }): JSX.Element {
  return (
    <div>
      <dt className="text-lg font-medium leading-6 text-white">
        {faq.question}
      </dt>
      <dd className="mt-2 text-base text-indigo-200">{faq.answer}</dd>
    </div>
  );
}

function FAQs() {
  return (
    <div id="faq">
      <div className="bg-indigo-700">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Frequently asked questions
          </h2>
          <p className="pt-1 leading-6 text-indigo-200">
            For further questions, email us at{" "}
            <a href="mailto:info@ktpnu.com" className="font-semibold">
              info@ktpnu.com
            </a>
          </p>
          <div className="mt-6 border-t border-indigo-300 border-opacity-25 pt-10">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:space-y-0">
              {faqs.map((faq) => FAQElement(faq))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
