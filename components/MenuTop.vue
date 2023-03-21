<template>
  <div class="bar-menuTop">
    <div class="d-flex justify-space-between align-center">
      <v-container>
        <div class="menu-top">
          <div class="d-flex">
            <Navbar />
            <div class="logo-main">
              <div @click="pageMain()">
                <img class="logo-top" src="/phatra/logo-copy.png" alt="phatra logo" />
              </div>
            </div>
          </div>

          <v-menu transition="slide-y-transition" bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on" label="Standard">
                {{ selectedValue }}
              </v-btn>
            </template>
            <v-list>
              <nuxt-link :to="switchLocalePath('th')">
                <v-list-item @click="changeTH()">
                  <v-list-item-title>Thai</v-list-item-title>
                </v-list-item>
              </nuxt-link>
              <nuxt-link :to="switchLocalePath('en')">
                <v-list-item @click="changeEN()">
                  <v-list-item-title>Eng</v-list-item-title>
                </v-list-item></nuxt-link>
            </v-list>
          </v-menu>

        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";

export default {
  components: {
    Navbar
  },
  data() {
    return {
      selectedValue: "Eng"
    };
  },
  mounted() {
  },

  methods: {
    changeTH() {
      this.selectedValue = "Thai"
    },
    changeEN() {
      this.selectedValue = "Eng"
    },
    pageMain() {
      this.$router.push('/')
    },
  },
};
</script>