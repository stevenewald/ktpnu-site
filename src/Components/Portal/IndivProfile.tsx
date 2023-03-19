import "animate.css";
import { MouseEventHandler } from "react";
import {
  ChevronLeftIcon,
  EnvelopeIcon,
  DocumentTextIcon,
} from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

//visible cases:
//case 1: dir_vis false and not loading
//case 2: xl size and not loading
function IndivProfile(props: {
  tabs: { name: string; href: string; current: boolean }[];
  directory: any;
  activeProfile:string;
  dir_vis: boolean;
  handler: MouseEventHandler<HTMLElement>;
  loading: boolean;
}) {
  const currProfile = props.directory[props.activeProfile];
  if(!currProfile) {
    console.log(props.activeProfile);
    console.log(JSON.stringify(props.directory));
    return <div></div>;
  }
  var socials = [];
  if (currProfile.instagram) {
    socials.push({
      name: "Instagram",
      href: "https://instagram.com/" + currProfile.instagram,
      icon: (props:any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    });
  }
  if (currProfile.leetcode?.username) {
    socials.push({
      name: "Leetcode",
      href: "https://leetcode.com/" + currProfile.leetcode.username,
      icon: (props:any) => (
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          {...props}
        >
          <path
            fill="currentColor"
            d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"
          />
        </svg>
      ),
    });
  }
  if (currProfile.linkedin) {
    socials.push({
      name: "LinkedIn",
      href: "https://linkedin.com/in/" + currProfile.linkedin,
      icon: (props:any) => (
        <svg fill="currentColor" viewBox="0 -1.3 28 28" {...props}>
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    });
  }
  var fields:any = {};
    if (currProfile.year) {
      fields["Class Standing"] = currProfile.year;
    }
    if (currProfile.major) {
      fields["Major"] = currProfile.major;
    }
    if (currProfile.internships) {
      fields["Relevant Internships"] = currProfile.internships;
    }
    if (currProfile.role) {
      fields["Role"] = currProfile.role;
    }
  return (
    <div
      className={classNames(
        !props.dir_vis && !props.loading
          ? "order-first flex flex-col"
          : "hidden",
        props.loading ? "invisible" : "",
        "relative flex-1 focus:outline-none xl:order-last xl:flex xl:flex-col xl:order-first"
      )}
    >
      {/* Breadcrumb */}
      <nav
        className="cursor-pointer flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden shadow"
        aria-label="Breadcrumb"
        onClick={props.handler}
      >
        <a
          href="#"
          className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900"
        >
          <ChevronLeftIcon
            className="-ml-2 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span className="select-none">Directory</span>
        </a>
      </nav>

      <main className="overflow-y-scroll mobileProfHeight">
        <article className="pb-32 sm:pb-0">
          {/* Profile header */}
          <div>
            <div>
              <img
                className="h-32 w-full object-cover lg:h-48"
                src={currProfile.cover_resized_link || currProfile.cover_page_link}
                alt=""
              />
            </div>
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                <div className="flex">
                  <img
                    className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32 object-cover"
                    src={currProfile.pfp_large_link || currProfile.profile_pic_link}
                    alt=""
                  />
                </div>
                <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                  <div className="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                    <h1 className="truncate text-2xl font-bold text-gray-900">
                      {currProfile.name}
                    </h1>
                  </div>
                  <div className="justify-stretch mt-6 flex space-y-3 flex-row space-y-0 space-x-4">
                    <button
                      onClick={() => {
                        window.location.href = "mailto:" + currProfile.email;
                      }}
                      type="button"
                      className={classNames(
                        currProfile.email ? "" : "hidden",
                        "inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      )}
                    >
                      <EnvelopeIcon
                        className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span>Email</span>
                    </button>
                    <a
                      target="_blank"
                      href={currProfile.resume_link}
                      className={classNames(
                        currProfile.resume_link ? "" : "hidden",
                        "inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      )}
                    >
                      <DocumentTextIcon
                        className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span>Resume</span>
                    </a>
                    <div className="flex space-x-6 md:order-2 items-center">
                      {socials.map(
                        (item: { name: string; href: string; icon: any }) => (
                          <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                <h1 className="truncate text-2xl font-bold text-gray-900">
                  {currProfile.name}
                </h1>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6 sm:mt-2 2xl:mt-5">
            <div className="border-b border-gray-200">
              <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  {props.tabs.map((tab) => (
                    <a
                      key={tab.name}
                      href={tab.href}
                      className={classNames(
                        tab.current
                          ? "border-indigo-600 text-gray-900"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                        "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                      )}
                      aria-current={tab.current ? "page" : undefined}
                    >
                      {tab.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Description list */}
          <div className="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              {Object.keys(fields).map((field) => (
                <div key={field} className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">{field}</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {fields[field]}
                  </dd>
                </div>
              ))}
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">About</dt>
                <dd
                  className="mt-1 max-w-prose space-y-5 text-sm text-gray-900"
                  dangerouslySetInnerHTML={{
                    __html: currProfile.about,
                  }}
                />
              </div>
            </dl>
          </div>
        </article>
      </main>
    </div>
  );
}

export default IndivProfile;
