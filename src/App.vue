<template>
  <div class="flexible-content">
    <!--Navbar-->
    <mdb-navbar class="flexible-navbar white" light position="top" scrolling>
      <mdb-navbar-brand href="https://mdbootstrap.com/docs/vue/" target="_blank">Twitter Oversight</mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav left>
          <mdb-nav-item to="/dashboard" waves-fixed>
            <mdb-icon icon="chart-pie" class="mr-3" />Dashboard
          </mdb-nav-item>

          <mdb-nav-item href="profile" waves-fixed>
            <mdb-icon icon="table" class="mr-3" />Preferences
          </mdb-nav-item>

          <mdb-nav-item href="/404" waves-fixed>
            <mdb-icon icon="map" class="mr-3" />About Us
          </mdb-nav-item>
        </mdb-navbar-nav>

        <mdb-navbar-nav right>
          <mdb-nav-item href="#!" waves-fixed>
            <mdb-icon fab class="text-black" icon="facebook-square" />
          </mdb-nav-item>
          <mdb-nav-item href="#!" waves-fixed>
            <mdb-icon fab icon="twitter" />
          </mdb-nav-item>
          <mdb-nav-item href="https://github.com/AIT-RAMI/Twitter-oversight" waves-fixed>
            <mdb-icon fab class="text-black" icon="github" />
          </mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <!--/.Navbar-->
    <!-- Sidebar -->
    <div class="sidebar-fixed position-fixed">
      <a class="logo-wrapper">
        <img alt class="img-fluid" src="./assets/logo-to.png" />
      </a>
      <mdb-list-group class="list-group-flush">
        <router-link to="/404" @click.native="activeItem = 1">
          <mdb-list-group-item :action="true" :class="activeItem === 1 && 'active'">Covid-19</mdb-list-group-item>
        </router-link>
        <router-link to="/" @click.native="activeItem = 2">
          <mdb-list-group-item :action="true" :class="activeItem === 2 && 'active'">ENSIAS</mdb-list-group-item>
        </router-link>
        <router-link to="/404" @click.native="activeItem = 3">
          <mdb-list-group-item :action="true" :class="activeItem === 3 && 'active'">Football</mdb-list-group-item>
        </router-link>
        <mdb-btn color="primary" size="lg" @click.native="showAddTopic = true">Add Topic</mdb-btn>
        <mdb-modal size="lg" :show="showAddTopic" @close="showAddTopic = false">
          <mdb-modal-header>
            <mdb-modal-title>Add new topic</mdb-modal-title>
          </mdb-modal-header>
          <mdb-modal-body>
            <div class="form-group1 inline-block">
              <label for="Textarea1">Topic Name</label>
              <textarea class="form-control d-flex p-2" id="Textarea1" rows="1"></textarea>
            </div>
            <br />
            <div class="form-group1 inline-block">
              <label for="Textarea1">Keywords</label>
              <textarea class="form-control d-flex p-2" id="Textarea1" rows="3"></textarea>
            </div>
            <br />
            <div class="form-group1">
              <label for="Textarea2">Hashtags</label>
              <textarea class="form-control rounded-0" id="Textarea2" rows="3"></textarea>
            </div>
            <br />
            <br />
            <div class="form-group1">
              <label for="Textarea3">Countries (Ex : MA FR DE EN ES TN DZ EG)</label>
              <textarea class="form-control rounded-0" id="Textarea3" rows="2"></textarea>
            </div>
          </mdb-modal-body>
          <mdb-modal-footer>
            <mdb-btn color="secondary" @click.native="showAddTopic = false">Close</mdb-btn>
            <mdb-btn color="primary">Save changes</mdb-btn>
          </mdb-modal-footer>
        </mdb-modal>
      </mdb-list-group>
    </div>
    <!-- /Sidebar  -->
    <main>
      <div class="mt-5 p-5">
        <router-view></router-view>
      </div>
      <ftr color="primary-color-dark" class="text-center font-small darken-2">
        <hr class="my4" />
        <div class="pb-4">
          <a href="#">
            <mdb-icon fab icon="facebook-square" class="mr-3" />
          </a>
          <a href="#">
            <mdb-icon fab icon="twitter" class="mr-3" />
          </a>
          <a href="#">
            <mdb-icon fab icon="youtube" class="mr-3" />
          </a>
          <a href="#">
            <mdb-icon fab icon="google-plus" class="mr-3" />
          </a>
          <a href="#">
            <mdb-icon fab icon="dribbble" class="mr-3" />
          </a>
          <a href="#">
            <mdb-icon fab icon="pinterest" class="mr-3" />
          </a>
          <a href="#">
            <mdb-icon fab icon="github" class="mr-3" />
          </a>
          <a href="#">
            <mdb-icon fab icon="codepen" class="mr-3" />
          </a>
        </div>
        <p class="footer-copyright mb-0 py-3 text-center">
          &copy; {{ new Date().getFullYear() }} Copyright:
          <a
            href="https://mdbootstrap.com/docs/vue/"
          >MDBootstrap.com</a>
        </p>
      </ftr>
    </main>
  </div>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbBtn,
  mdbIcon,
  mdbListGroup,
  mdbListGroupItem,
  mdbFooter,
  waves,
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
} from "mdbvue";

export default {
  name: "AdminTemplate",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbBtn,
    mdbListGroup,
    mdbListGroupItem,
    mdbIcon,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    ftr: mdbFooter,
  },
  data() {
    return {
      activeItem: 1,
      showAddTopic: false,
    };
  },
  beforeMount() {
    this.activeItem = this.$route.matched[0].props.default.page;
  },
  mixins: [waves],
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
.navbar-light .navbar-brand {
  margin-left: 15px;
  color: #2196f3 !important;
  font-weight: bolder;
}
</style>

<style scoped>
main {
  background-color: #ededee;
}

.flexible-content {
  transition: padding-left 0.3s;
  padding-left: 270px;
}

.flexible-navbar {
  transition: padding-left 0.5s;
  padding-left: 270px;
}

.sidebar-fixed {
  left: 0;
  top: 0;
  height: 100vh;
  width: 270px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 1050;
  background-color: #fff;
  padding: 1.5rem;
  padding-top: 0;
}

.sidebar-fixed .logo-wrapper img {
  width: 100%;
  padding: 1.1rem;
}

.sidebar-fixed .list-group-item {
  display: block !important;
  transition: background-color 0.3s;
}

.sidebar-fixed .list-group .active {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 5px;
}

@media (max-width: 1199.98px) {
  .sidebar-fixed {
    display: none;
  }
  .flexible-content {
    padding-left: 0;
  }
  .flexible-navbar {
    padding-left: 10px;
  }
}
</style>
