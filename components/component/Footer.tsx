import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-black mt-10 pb-5 md:mt-12">
        <div className="max-w-6xl mt-10 mx-10 md:mx-32 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-28">
          <div className="">
            <h3 className="text-orange-400 text-xl font-bold mb-4">Trakiz</h3>
            <p className="text-[#575757] mt-5">
              Trakiz is an AI-powered to-do list platform, mainly focused on
              individual progress and growth.
            </p>
            <div className="flex mt-16">
              <p className="text-gray-700">©Copyright Trakiz</p>
              <HeartIcon className="pl-2 w-6 h-6 border-none" />
            </div>
          </div>
          <div>
            <h3 className="text-orange-400 text-xl font-bold mb-4">Feature</h3>
            <ul className="text-[#575757] mt-5 space-y-4">
              <li>Trakiz-AI</li>
              <li>Promo</li>
              <li>Contact</li>
              <li>About us</li>
            </ul>
          </div>
          <div>
            <div>
              <h3 className="text-orange-400 text-xl font-bold mb-4">
                Get in Touch
              </h3>
            </div>
            <div className="text-[#575757] space-y-2">
              <div className="flex mt-6">
                <div>
                  <LocationIcon />
                </div>
                <div>
                  <p className="ml-2">Jamia Nagar, New Delhi, India, 10025</p>
                </div>
              </div>
              <div className="flex mt-6">
                <div>
                  <EmailIcon />
                </div>
                <div>
                  <p className="ml-2">info@trakiz.tech</p>
                </div>
              </div>
              <div className="flex mt-6">
                <div>
                  <CallIcon />
                </div>
                <div>
                  <p className="ml-2">+91 7858011614</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4 text-[#575757]">
            <div className="flex space-x-8">
              <Link href="https://www.x.com/nitinnennn">
                <TwitterIcon />
              </Link>
              <Link href="https://www.linkedin.com/in/shibtain/">
                <LinkedinIcon />
              </Link>
              <Link href="https://www.instagram.com/officialtrakiz">
                <InstagramIcon />
              </Link>
            </div>
            <div className="mt-5">
              <span>Follow our social media.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#F97316"
      stroke="currentColor"
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
      />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      width="26"
      height="22"
      viewBox="0 0 26 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.17677 21.9998C17.9887 21.9998 23.3542 13.5366 23.3542 6.19785C23.3542 5.95746 23.3495 5.71809 23.3391 5.47997C24.3806 4.69599 25.2859 3.71768 26 2.60409C25.0443 3.04647 24.0156 3.34407 22.9367 3.47852C24.038 2.79079 24.8836 1.70322 25.2823 0.40665C24.2516 1.04275 23.1102 1.50496 21.8951 1.75465C20.9217 0.675134 19.5357 0 18.0012 0C15.0555 0 12.6665 2.4872 12.6665 5.55308C12.6665 5.98905 12.7134 6.41285 12.8048 6.8195C8.37137 6.58715 4.43999 4.37732 1.80928 1.01673C1.35126 1.83746 1.08704 2.791 1.08704 3.80834C1.08704 5.73503 2.02887 7.43618 3.46086 8.43123C2.58568 8.40314 1.76366 8.15304 1.04498 7.73668C1.04419 7.76002 1.04419 7.78273 1.04419 7.80752C1.04419 10.4973 2.88283 12.7431 5.3239 13.252C4.8756 13.379 4.40388 13.4473 3.9173 13.4473C3.57413 13.4473 3.23969 13.4122 2.91457 13.3472C3.59377 15.5539 5.56313 17.1596 7.89787 17.2047C6.07213 18.6945 3.77209 19.582 1.27251 19.582C0.842453 19.582 0.417557 19.5564 0 19.5052C2.36073 21.0805 5.16422 22 8.17697 22"
        fill="#FB9333"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.829 0H2.17099C0.972 0 0 0.972 0 2.17099V21.8289C0 23.028 0.972 24 2.17099 24H21.8289C23.028 24 24 23.028 24 21.8289V2.17099C24 0.972 23.028 0 21.829 0ZM7.42662 20.7232C7.42662 21.0721 7.14377 21.355 6.79483 21.355H4.10544C3.7565 21.355 3.47365 21.0721 3.47365 20.7232V9.4494C3.47365 9.10046 3.7565 8.81761 4.10544 8.81761H6.79483C7.14377 8.81761 7.42662 9.10046 7.42662 9.4494V20.7232ZM5.45014 7.75489C4.0391 7.75489 2.8952 6.61099 2.8952 5.19996C2.8952 3.78892 4.0391 2.64503 5.45014 2.64503C6.86117 2.64503 8.00507 3.78892 8.00507 5.19996C8.00507 6.61099 6.86124 7.75489 5.45014 7.75489ZM21.4813 20.7741C21.4813 21.0949 21.2212 21.355 20.9004 21.355H18.0145C17.6937 21.355 17.4335 21.0949 17.4335 20.7741V15.486C17.4335 14.6972 17.6649 12.0292 15.372 12.0292C13.5934 12.0292 13.2327 13.8553 13.1602 14.6749V20.7741C13.1602 21.0949 12.9002 21.355 12.5793 21.355H9.78817C9.46737 21.355 9.20727 21.0949 9.20727 20.7741V9.39851C9.20727 9.07772 9.46737 8.81761 9.78817 8.81761H12.5793C12.9001 8.81761 13.1602 9.07772 13.1602 9.39851V10.3821C13.8197 9.39236 14.7998 8.62844 16.8866 8.62844C21.5077 8.62844 21.4813 12.9457 21.4813 15.3178V20.7741Z"
        fill="#FB9333"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_319_42313)">
        <path
          d="M23.9279 7.05249C23.8694 5.77515 23.6666 4.90283 23.3699 4.13965C23.0687 3.33893 22.5963 2.61365 21.9858 2.01416C21.3865 1.40369 20.6611 0.931091 19.8604 0.6297C19.097 0.333252 18.2249 0.130554 16.9475 0.0725098C15.6678 0.013916 15.2589 0 12 0C8.74109 0 8.33221 0.013916 7.05249 0.0721435C5.77515 0.130554 4.90302 0.333435 4.13965 0.630066C3.33893 0.931274 2.61365 1.40369 2.01416 2.01416C1.40369 2.61346 0.931091 3.33875 0.6297 4.13947C0.333252 4.90283 0.130554 5.77515 0.0725098 7.05231C0.013916 8.33221 0 8.74091 0 11.9998C0 15.2589 0.013916 15.6678 0.0725098 16.9475C0.130737 18.2247 0.333618 19.097 0.630249 19.8604C0.931458 20.6609 1.40387 21.3864 2.01434 21.9857C2.61365 22.5961 3.33911 23.0685 4.13983 23.3698C4.90302 23.6666 5.77533 23.8693 7.05267 23.9277C8.33258 23.9861 8.74127 23.9998 12.0002 23.9998C15.2591 23.9998 15.668 23.9861 16.9477 23.9277C18.225 23.8693 19.0972 23.6666 19.8605 23.3698C21.4724 22.7465 22.7466 21.4722 23.3699 19.8604C23.6667 19.097 23.8694 18.2247 23.9279 16.9475C23.9861 15.6676 24 15.2589 24 12C24 8.74091 23.9861 8.33221 23.9279 7.05249ZM21.7678 16.8492C21.7145 18.0192 21.5189 18.6546 21.3547 19.0774C20.9509 20.124 20.1238 20.9511 19.0772 21.3549C18.6544 21.5191 18.019 21.7147 16.849 21.7679C15.5839 21.8258 15.2043 21.8379 12 21.8379C8.79547 21.8379 8.41608 21.8258 7.15082 21.7679C5.98096 21.7147 5.34558 21.5191 4.92261 21.3549C4.40149 21.1624 3.92999 20.8557 3.54291 20.4571C3.14429 20.07 2.83759 19.5987 2.64514 19.0774C2.4809 18.6546 2.28534 18.0192 2.23206 16.8492C2.17438 15.5839 2.16211 15.2043 2.16211 12.0002C2.16211 8.79584 2.17438 8.41644 2.23206 7.151C2.28552 5.98096 2.4809 5.34558 2.64514 4.92279C2.83759 4.40149 3.14447 3.92999 3.54291 3.54291C3.92999 3.14429 4.40149 2.83759 4.92279 2.64532C5.34558 2.4809 5.98096 2.28552 7.151 2.23206C8.41626 2.17438 8.79584 2.16211 12 2.16211H11.9998C15.204 2.16211 15.5836 2.17438 16.849 2.23224C18.019 2.28552 18.6542 2.48108 19.0772 2.64532C19.5983 2.83777 20.0698 3.14447 20.4569 3.54291C20.8555 3.92999 21.1622 4.40149 21.3545 4.92279C21.5189 5.34558 21.7145 5.98096 21.7678 7.151C21.8254 8.41626 21.8377 8.79584 21.8377 12C21.8377 15.2043 21.8256 15.5837 21.7678 16.8492Z"
          fill="#FB9333"
        />
        <path
          d="M11.9998 5.83777C8.59662 5.83777 5.83777 8.5968 5.83777 12C5.83777 15.4032 8.59662 18.162 11.9998 18.162C15.4032 18.162 18.162 15.4032 18.162 12C18.162 8.5968 15.4032 5.83777 11.9998 5.83777ZM11.9998 15.9999C9.79083 15.9998 7.99988 14.209 8.00006 11.9998C8.00006 9.79083 9.79083 7.99988 12 7.99988C14.2092 8.00006 15.9999 9.79083 15.9999 11.9998C15.9999 14.209 14.209 15.9999 11.9998 15.9999Z"
          fill="#FB9333"
        />
        <path
          d="M19.8455 5.59442C19.8455 6.38965 19.2008 7.03436 18.4056 7.03436C17.6102 7.03436 16.9655 6.38965 16.9655 5.59442C16.9655 4.79901 17.6102 4.1543 18.4056 4.1543C19.2008 4.1543 19.8455 4.79901 19.8455 5.59442Z"
          fill="#FB9333"
        />
      </g>
      <defs>
        <clipPath id="clip0_319_42313">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C15.87 2 19 5.13 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9C5 5.13 8.13 2 12 2ZM7 9C7 11.85 9.92 16.21 12 18.88C14.12 16.19 17 11.88 17 9C17 6.24 14.76 4 12 4C9.24 4 7 6.24 7 9ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z"
        fill="#FB9333"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
        fill="#FB9333"
      />
    </svg>
  );
}

function CallIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z"
        fill="#FB9333"
      />
    </svg>
  );
}

export default Footer;
