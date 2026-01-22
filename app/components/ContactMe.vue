<template>
  <svg style="block-size: 0" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
            <filter id="noise-big">
              <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1"/>
              <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="8" />
            </filter>
            <filter id="noise-1">
              <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1"/>
              <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="1.5" />
            </filter>
            <filter id="noise-2">
                <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2"/>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
            </filter>
    
            <filter id="noise-3">
                <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3"/>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" />
            </filter>
        </defs>
    </svg>
    <!-- Contact -->
<div id="contact" class="mx-8">
  <div class="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
    <!-- Title -->
    <div class="max-w-3xl mb-10 lg:mb-14">
      <h2 class="contact-title text-white font-semibold text-2xl md:text-4xl md:leading-tight">Let's Connect</h2>
      <p class="mt-1 contact-description font-extrabold text-neutral-400">Whatever your goal - I will try to get you there.</p>
    </div>
    <!-- End Title -->

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
      <div class="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
        <form>
          <div class="space-y-4">
            <!-- Input -->
            <div class="relative">
              <input type="text" id="hs-tac-input-name" class="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
              focus:pt-6
              focus:pb-2
              not-placeholder-shown:pt-6
              not-placeholder-shown:pb-2
              autofill:pt-6
              autofill:pb-2" placeholder="Name">
              <label for="hs-tac-input-name" class="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-400
                peer-not-placeholder-shown:text-xs
                peer-not-placeholder-shown:-translate-y-1.5
                peer-not-placeholder-shown:text-neutral-400">Name</label>
            </div>
            <!-- End Input -->

            <!-- Input -->
            <div class="relative">
              <input type="email" id="hs-tac-input-email" class="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
              focus:pt-6
              focus:pb-2
              not-placeholder-shown:pt-6
              not-placeholder-shown:pb-2
              autofill:pt-6
              autofill:pb-2" placeholder="Email">
              <label for="hs-tac-input-email" class="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-400
                peer-not-placeholder-shown:text-xs
                peer-not-placeholder-shown:-translate-y-1.5
                peer-not-placeholder-shown:text-neutral-400">Email</label>
            </div>
            <!-- End Input -->

            <!-- Input -->
            <div class="relative">
              <input type="text" id="hs-tac-input-company" class="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
              focus:pt-6
              focus:pb-2
              not-placeholder-shown:pt-6
              not-placeholder-shown:pb-2
              autofill:pt-6
              autofill:pb-2" placeholder="Company">
              <label for="hs-tac-input-company" class="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-400
                peer-not-placeholder-shown:text-xs
                peer-not-placeholder-shown:-translate-y-1.5
                peer-not-placeholder-shown:text-neutral-400">Company</label>
            </div>
            <!-- End Input -->

            <!-- Input -->
            <div class="relative">
              <input type="text" id="hs-tac-input-phone" class="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
              focus:pt-6
              focus:pb-2
              not-placeholder-shown:pt-6
              not-placeholder-shown:pb-2
              autofill:pt-6
              autofill:pb-2" placeholder="Phone">
              <label for="hs-tac-input-phone" class="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-400
                peer-not-placeholder-shown:text-xs
                peer-not-placeholder-shown:-translate-y-1.5
                peer-not-placeholder-shown:text-neutral-400">Phone</label>
            </div>
            <!-- End Input -->

            <!-- Textarea -->
            <div class="relative">
              <textarea id="hs-tac-message" class="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
              focus:pt-6
              focus:pb-2
              not-placeholder-shown:pt-6
              not-placeholder-shown:pb-2
              autofill:pt-6
              autofill:pb-2" placeholder="This is a textarea placeholder" data-hs-textarea-auto-height></textarea>
              <label for="hs-tac-message" class="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                peer-focus:text-xs
                peer-focus:-translate-y-1.5
                peer-focus:text-neutral-400
                peer-not-placeholder-shown:text-xs
                peer-not-placeholder-shown:-translate-y-1.5
                peer-not-placeholder-shown:text-neutral-400">Tell me about your project</label>
            </div>
            <!-- End Textarea -->
          </div>

          <div class="mt-2">
            <p class="text-xs text-neutral-500">
              All fields are required
            </p>

            <p class="mt-5">
              <a class="group contact-btn inline-flex items-center gap-x-2 py-2 px-3 font-medium text-sm text-white capitalize bg-gray-600/20 rounded-lg hover:bg-gray-500/40 focus:outline-hidden" href="#">
                Submit
                <svg class="shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </p>
          </div>
        </form>
      </div>
      <!-- End Col -->

      <div class="space-y-14">
        <!-- Item -->
        <div class="flex gap-x-5">
          <svg class="shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          <div class="grow">
            <h4 class="contact-text text-white font-semibold">My address:</h4>

            <address class="mt-1 contact-para font-bold text-neutral-400 text-sm not-italic">
              18/5 Railway Street, Tay House<br>
              In the middle of nowhere.
            </address>
          </div>
        </div>
        <!-- End Item -->

        <!-- Item -->
        <div class="flex gap-x-5">
          <svg class="shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>
          <div class="grow">
            <h4 class="contact-text text-white font-semibold">Email me:</h4>

            <a class="mt-1 contact-para font-bold text-neutral-400 text-sm hover:text-neutral-200 focus:outline-hidden focus:text-neutral-200" href="mailto:aoi.yuito.ehou@gmail.com" target="_blank">
              aoi.yuito.ehou@gmail.com
            </a>
          </div>
        </div>
        <!-- End Item -->

        <!-- Item -->
        <div class="flex gap-x-5">
          <svg class="shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
          <div class="grow">
            <h4 class="contact-text text-white font-semibold">I'm currently available</h4>
            <p class="mt-1 contact-para font-bold text-neutral-400">I'm thrilled to announce that I'm expanding my vision, skills, knowledge and looking for talented individuals like you to embark on a new journey.</p>
            <p class="mt-2">
              <a class="group truncate contact-btn border-b-2 border-dashed hover:border-solid inline-flex items-center gap-x-2 font-medium text-sm text-white decoration-2 focus:outline-hidden" href="#footer">
                Hire me now!
                <svg class="shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </p>
          </div>
        </div>
        <!-- End Item -->
      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->
  </div>
</div>
<!-- End Contact -->
</template>

<style scoped>
    .contact-btn {
        font-family: "Chango", sans-serif;
    }

    .contact-para {
      font-family: "Macondo", sans-serif;
    }

    .contact-text {
      font-family: "Special Elite", sans-serif;
      animation: squiggle 0.25s linear infinite;
    }

    .contact-title {
      font-family: "Chango", sans-serif;
      animation: squiggle 0.25s linear infinite;
    }

    .contact-description {
      font-family: "Macondo", sans-serif;
    }

    @keyframes squiggle {
        0% {
            filter: url("#noise-1");
        }
        33% {
          filter: url("#noise-2");
        }
        66% {
          filter: url("#noise-3");
        }
    }
</style>