import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function FAQs() {
  return (
    <div id="faq">
      <div className="hidden bg-gray-100 pt-10">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl divide-y-2 divide-gray-200">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="mb-12 flex w-full items-start justify-between text-left text-gray-400">
                          <span className="font-medium text-gray-900">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            <ChevronDownIcon
                              className={classNames(
                                open ? "-rotate-180" : "rotate-0",
                                "h-6 w-6 transform"
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Transition
                        enter="transition-all duration-300 ease-out"
                        enterFrom="transform h-0 mt-0 pr-0 scale-95 opacity-0"
                        enterTo="transform h-16 scale-100 opacity-100"
                        leave="transition-all duration-100 ease-in"
                        leaveFrom="transform h-16 scale-100 opacity-100"
                        leaveTo="transform h-0 mt-0 pr-0 scale-95 opacity-0"
                      >
                        <Disclosure.Panel static as="dd">
                          <p className="text-base text-gray-500">
                            {faq.answer}
                          </p>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
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
              {faqs.map((faq) => (
                <div>
                  <dt className="text-lg font-medium leading-6 text-white">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-indigo-200">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
