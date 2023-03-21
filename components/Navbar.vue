<template>
  <div>
    <div class="x-hamburger js-hamburger-toggle" @click="sidebar" id="hamburger" ref="hamburger"
      v-click-outside="onClickOutside">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="x-menu-list-sidebar" id="sidebar" ref="sidebar">
      <div class="-inner-wrapper">
        <div class="-brand-heading"></div>
        <ul class="navbar-nav pl-0">

          <li class="nav-item">
            <a class="nav-link" href="" target="_blank">
              <span class="-text">About Us</span>
            </a>

          </li>

          <div>

            <li class="nav-item">
              <a class="nav-link" href="" target="_blank">
                <span class="-text">Awards</span>
              </a>

            </li>


            <li class="nav-item">
              <a class="nav-link" href="" target="_blank">
                <span class="-text">Our Businesses</span>
              </a>

            </li>


            <li class="nav-item">
              <a class="nav-link" href="" target="_blank">
               <span class="-text">News&Activities</span>=
              </a>
            </li>
          </div>
        </ul>
      </div>

      <div class="-overlay"></div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    sidebar() {
      if (this.$refs.sidebar != undefined) {
        this.$refs.sidebar.classList.add("-open");
      }
      if (this.$refs.hamburger != undefined) {
        this.$refs.hamburger.classList.add("-open");
      }
    },
    onClickOutside() {
      if (this.$refs.sidebar != undefined) {
        this.$refs.sidebar.classList.remove("-open");
      }
      if (this.$refs.hamburger != undefined) {
        this.$refs.hamburger.classList.remove("-open");
      }
    },
  },
  mounted() {
  },
};
</script>
