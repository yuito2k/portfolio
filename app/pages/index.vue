<template>
  <section class="mainSection" id="home">
    <ClientOnly>
     <Hero />
    </ClientOnly>
  </section>

  <section class="mainSection" id="about">
    <ClientOnly>
      <About />
    </ClientOnly>
  </section>

  <section class="-mt-36 -mb-32">
    <ClientOnly>
      <Spiral />
    </ClientOnly>
  </section>

  <section class="mainSection" id="projects">
    <ClientOnly>
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

      <div class="relative">
        <div class="max-w-340 px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto">
          <!-- Title -->
          <div class="max-w-2xl mx-auto text-center mb-10">
            <h2 class="pr-title text-3xl leading-tight font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight text-white">Selected Works</h2>
            <p class="pr-description font-bold mt-2 lg:text-lg text-gray-800 dark:text-neutral-200">From full applications to <span class="text-blue-200">experimental projects</span>; each one teaching me something new. A straightforward list of what I've built and what I'm <span class="text-blue-200">currently working on</span>. A collection of projects that show my <span class="text-blue-200">technical growth</span>.</p>
          </div>
        </div>
      </div>

      <GlitchRipple />
    </ClientOnly>
  </section>

  <section class="mainSection" id="contact">
    <ClientOnly>
      <ContactMe />
    </ClientOnly>
  </section>

  <section id="footer">
     <ClientOnly>
       <Footer />
     </ClientOnly>
  </section>
</template>

<style scoped>
  .pr-title {
    font-family: "Chango", sans-serif;
    animation: squiggle 0.25s linear infinite;
  }

  .pr-description {
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

<!-- <script>
  onNuxtReady(() => {
    const sections = document.querySelectorAll(".mainSection");
    const navLinks = document.querySelectorAll(".navigation-link");

    const observerOptions = {
      root: null, // use the viewport
      rootMargin: '0px',
      threshold: 0.6 // trigger when 60% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Remove 'active' from all links
          navLinks.forEach((link) => link.classList.remove("active"));
      
          // Add 'active' to the link corresponding to the visible section
          const activeLink = document.querySelector(`a[href="#${entry.target.id}"]`);
          if (activeLink) {
            activeLink.classList.add("active");
          }
        }
      });
    }, observerOptions);

    // Tell the observer to watch each section
    sections.forEach((section) => observer.observe(section));
  })
</script> -->