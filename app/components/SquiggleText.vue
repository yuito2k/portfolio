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

    <h1 class="squiggle-text"> {{ title }} </h1>
</template>

<style scoped>
    .squiggle-text {
        font-family: 'Special Elite', sans-serif;

        font-size: 1.875rem; /* Equivalent to 30px */
        line-height: 2.25rem; /* Equivalent to 36px */
        
        font-weight: 600;

        letter-spacing: 0.025em;

        /*color: #2d3748;*/
        color: #ffffff; /* White color */

        animation: squiggle 0.25s linear infinite;
    }

    @media (min-width: 1024px) {
        .squiggle-text {
          /* text-4xl: 36px size / 40px line-height */
          font-size: 2.25rem;
          line-height: 2.5rem;
        }
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

<script setup>
    const props = defineProps({
        title: String
    });
</script>