import React from "react";
import "../App.css";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#F4F8FA" }}>
      <div class="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4 ml-24">
            <div>
              <p class="font-medium text-blue-900 ">Quick Links</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" class="text-blue-900 transition hover:opacity-75">
                    About
                  </a>
                </li>

                <li>
                  <a href="#" class="text-blue-900 transition hover:opacity-75">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p class="font-medium text-blue-900">Backed by</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" class="text-blue-900 transition hover:opacity-75">
                    Developers
                  </a>
                </li>

                <li>
                  <a href="#" class="text-blue-900 transition hover:opacity-75">
                    Partners
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p class="font-medium text-blue-900">Support</p>

              <ul class="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" class="text-blue-900 transition hover:opacity-75">
                    Career
                  </a>
                </li>

                <li>
                  <a href="#" class="text-blue-900 transition hover:opacity-75">
                    Help center
                  </a>
                </li>

                <li>
                  <a href="#" class="text-blue-900 transition hover:opacity-75">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div class="text-teal-600">
              <div class="flex items-center">
                <input
                  type="text"
                  class="px-4 py-2 rounded-l w-3/4 input-search"
                  placeholder="Enter your email Address..."
                />
                <button class="bg-white text-blue-500 px-6 py-2 rounded-r">
                  Subscribe
                </button>
              </div>
            </div>

            <div class="flex items-center justify-end mt-4">
              <ul class="flex gap-6">
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    class="text-gray-700 transition hover:opacity-75"
                  >
                    <span class="sr-only">Facebook</span>
                    <img
                      src="/images/fb_footericon.png"
                      alt="Facebook"
                      class="w-6/7 h-auto"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    class="text-gray-700 transition hover:opacity-75"
                  >
                    <span class="sr-only">Twitter</span>
                    <img
                      src="/images/tw_footericon.png"
                      alt="Twitter"
                      class="w-6/7 h-auto"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    class="text-gray-700 transition hover:opacity-75"
                  >
                    <span class="sr-only">LinkedIn</span>
                    <img
                      src="/images/lkd_footericon.png"
                      alt="LinkedIn"
                      class="w-6/7 h-auto"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    class="text-gray-700 transition hover:opacity-75"
                  >
                    <span class="sr-only">YouTube</span>
                    <img
                      src="/images/ytb_footericon.png"
                      alt="YouTube"
                      class="w-6/7 h-auto"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footerend flex justify-between">
          <p className="text-xs text-gray-500">&copy; © 2019 Sye123.com</p>
          <p className="text-xs text-gray-500">
            &copy; Terms & Condition. Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
