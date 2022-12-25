import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React from "react";

const faqs = [
  {
    question: "Why should I rush?",
    answer:
      "Rushing Kappa Theta Pi can be very beneficial. Placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text .",
  },
  {
    question: "Question 2?",
    answer:
      "Rushing Kappa Theta Pi can be very beneficial. Placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text .",
  },
  {
    question: "Question 3?",
    answer:
      "Rushing Kappa Theta Pi can be very beneficial. Placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text .",
  },
  {
    question: "Question 4?",
    answer:
      "Rushing Kappa Theta Pi can be very beneficial. Placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text .",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

class FAQs extends React.Component {
  render() {
    return (
      <div className="bg-gray-100 pt-10">
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
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
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
    );
  }
}

export default FAQs;
