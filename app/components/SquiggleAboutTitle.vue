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

    <h3 class="squiggle-text">
        {{ title }}
    </h3>
</template>

<script setup>
    const props = defineProps({
        title: String
    })
</script>

<style scoped>
    .squiggle-text {
        font-family: "Special Elite", sans-serif;
        
        font-size: 1rem /* 1rem = 16px */;
        line-height: 1.5rem /* calc(1.5 / 1) ≈ 1.5 */;

        font-weight: 600 /* 600 */;

        color: #e5e5e5;

        animation: squiggle 0.25s linear infinite;
    }

    @media (width >= 40rem /* 640px */) {
        .squiggle-text {
            font-size: 18px /* 1.125rem = 18px */;
            line-height: 1.75rem /* calc(1.75 / 1.125) ≈ 1.555556 */;
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