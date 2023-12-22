<script lang="ts" setup>
import {useHead} from "unhead";

import MainHero from "~/components/layouts/MainHero.vue";
import MapsSection from "~/components/MapsSection.vue";


useHead({
  title: "OsakaMotors"
})
</script>
<template>
  <div>
    <MainHero/>
    <Section>
      <CounterSection/>
    </Section>
    <Section>
      <CategorySection/>
    </Section>
    <Section>
      <NewsSection/>
    </Section>
    <ReviewSection/>
    <Section>
      <MapsSection/>
    </Section>
  </div>
</template>
