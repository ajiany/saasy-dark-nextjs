"use client";

import Image from "next/image";
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const loadScript = (src: string, integrity?: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src = src;
        if (integrity) {
          script.integrity = integrity;
          script.crossOrigin = "anonymous";
          script.referrerPolicy = "no-referrer";
        }
        
        script.onload = () => resolve();
        script.onerror = () => reject();
        document.body.appendChild(script);
      });
    };

    const initScripts = async () => {
      try {
        // Load GSAP first
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/gsap.min.js",
          "sha512-B1lby8cGcAUU3GR+Fd809/ZxgHbfwJMp0jLTVfHiArTuUt++VqSlJpaJvhNtRf3NERaxDNmmxkdx2o+aHd4bvw=="
        );

        // Then load ScrollTrigger
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/ScrollTrigger.min.js",
          "sha512-AY2+JxnBETJ0wcXnLPCcZJIJx0eimyhz3OJ55k2Jx4RtYC+XdIi2VtJQ+tP3BaTst4otlGG1TtPJ9fKrAUnRdQ=="
        );

        // Finally load your local script
        await loadScript("/lib/index.js");
      } catch (error) {
        console.error("Error loading scripts:", error);
      }
    };

    initScripts();

    // No need for cleanup as we're using script.onload
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SaaSy Dark</title>
        <meta name="description" content="" />
        <link rel="shortcut icon" href="/assets/logo/logo.png" type="image/x-icon"/>

        <meta property="og:title" content="Title of the project" />
        <meta property="og:description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://github.com/PaulleDemon" />
        {/* Replace with the current website url */}
        <meta property="og:image" content="" />

      </Head>

      <body className="tw-flex tw-min-h-[100vh] tw-flex-col tw-bg-black tw-text-white">

      <header
            className="tw-max-w-lg:tw-px-4 tw-max-w-lg:tw-mr-auto tw-absolute tw-top-0 tw-z-20 tw-flex tw-h-[60px] tw-w-full tw-bg-opacity-0 tw-px-[5%] lg:tw-justify-around"
        >
            <a className="tw-h-[50px] tw-w-[50px] tw-p-[4px]" href="">
                <Image
                    src="/assets/logo/logo.png"
                    alt="logo"
                    className="tw-object tw-h-full tw-w-full"
                    width={50}
                    height={50}
                />
            </a>
            <div
                className="collapsible-header animated-collapse max-lg:tw-shadow-md"
                id="collapsed-header-items"
            >
                <div
                    className="tw-flex tw-h-full tw-w-max tw-gap-5 tw-text-base max-lg:tw-mt-[30px] max-lg:tw-flex-col max-lg:tw-place-items-end max-lg:tw-gap-5 lg:tw-mx-auto lg:tw-place-items-center"
                >
                    <a className="header-links" href=""> About us </a>
                    <a className="header-links" href="#pricing"> Pricing </a>
                    <a className="header-links" href=""> Solutions </a>
                    <a className="header-links" href=""> Features </a>
                    <a className="header-links" href=""> Company </a>
                </div>
                <div
                    className="tw-mx-4 tw-flex tw-place-items-center tw-gap-[20px] tw-text-base max-md:tw-w-full max-md:tw-flex-col max-md:tw-place-content-center"
                >
                    <a
                        href=""
                        aria-label="signup"
                        className="tw-rounded-full tw-bg-white tw-px-3 tw-py-2 tw-text-black tw-transition-transform tw-duration-[0.3s] hover:tw-translate-x-2"
                    >
                        <span>Get started</span>
                        <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
            <button
                className="bi bi-list tw-absolute tw-right-3 tw-top-3 tw-z-50 tw-text-3xl tw-text-white lg:tw-hidden"
                // TODO: Add function to toggle header
                aria-label="menu"
                id="collapse-btn"
            ></button>
        </header>

        <section
            className="hero-section tw-relative tw-flex tw-min-h-[100vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-overflow-hidden max-md:tw-mt-[50px]"
            id="hero-section"
        >
            <div
                className="tw-flex tw-h-full tw-min-h-[100vh] tw-w-full tw-flex-col tw-place-content-center tw-gap-6 tw-p-[5%] max-xl:tw-place-items-center max-lg:tw-p-4"
            >
                <div
                    className="tw-flex tw-flex-col tw-place-content-center tw-items-center"
                >
                    <div
                        className="reveal-up gradient-text tw-text-center tw-text-6xl tw-font-semibold tw-uppercase tw-leading-[80px] max-lg:tw-text-4xl max-md:tw-leading-snug"
                    >
                        <span className=""> Ship more </span>
                        <br />
                        <span className=""> with SaaS templates </span>
                    </div>
                    <div
                        className="reveal-up tw-mt-10 tw-max-w-[450px] tw-p-2 tw-text-center tw-text-gray-300 max-lg:tw-max-w-full"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit
                        Lorem ipsum dolor sit amet.
                    </div>

                    <div
                        className="reveal-up tw-mt-10 tw-flex tw-place-items-center tw-gap-4"
                    >
                        <a
                            className="btn tw-bg-[#7e22ce85] tw-shadow-lg tw-shadow-primary tw-transition-transform tw-duration-[0.3s] hover:tw-scale-x-[1.03]"
                            href=""
                        >
                            Get started
                        </a>
                        <a
                            className="btn tw-flex tw-gap-2 !tw-bg-black !tw-text-white tw-transition-colors tw-duration-[0.3s] hover:!tw-bg-white hover:!tw-text-black"
                            href=""
                        >
                            <i className="bi bi-play-circle-fill"></i>
                            <span>Learn more</span>
                        </a>
                    </div>
                </div>

                <div
                    className="reveal-up tw-relative tw-mt-8 tw-flex tw-w-full tw-place-content-center tw-place-items-center"
                    id="dashboard-container"
                >
                    <div
                        className="tw-relative tw-max-w-[80%] tw-overflow-hidden tw-rounded-xl tw-bg-transparent max-md:tw-max-w-full"
                        id="dashboard"
                    >
                        <img
                            src="/assets/images/home/dashboard.png"
                            alt="dashboard"
                            className="tw-h-full tw-w-full tw-object-cover tw-opacity-90 max-lg:tw-object-contain"
                        />
                    </div>

                    <div
                        className="hero-img-bg-grad tw-absolute tw-left-[20%] tw-top-5 tw-h-[200px] tw-w-[200px]"
                    ></div>
                </div>
            </div>
        </section>

      </body>
    </>
  );
}
