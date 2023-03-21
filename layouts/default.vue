<template>
  <v-app>
    <v-main>
      <div>
        <MenuTop />
        <Nuxt />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import MenuTop from '@/components/MenuTop'
import Navbar from "~/components/Navbar.vue";
export default {
  components: {
    MenuTop,
    Navbar
  },
  data() {
    return {

    };
  },
  head () {
    return this.$nuxtI18nHead()
  },
  computed: {

  },
  methods: {

  },
};
</script>