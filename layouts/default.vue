<template>
<div>
  <!-- the search bar -->
  <div class="background-white brand-bar brand-bar-black padding-vertical-small">
      <div class="container">
        <div class="ucb-brand-bar ucb-brand-bar-white">
          <a href="https://www.colorado.edu" class="ucb-home-link"><img class="ucb-logo" src="https://cdn.colorado.edu/static/brand-assets/live/images/cu-boulder-logo-text-black.svg" alt="University of Colorado Boulder"></a>
          <a class="ucb-search-link" href="https://www.colorado.edu/search">
            <img class="ucb-search" alt="Search Colorado.edu" src="https://cdn.colorado.edu/static/brand-assets/live/images/search-black.svg">
          </a>
        </div>
      </div>
  </div>
  <!-- the site title -->
  <header class="ucb black" role="banner">
    <div class="container">
      <a href="/">Boulder Crowdfunding</a>
    </div>
  </header>
  <!-- navigation -->
  <div class="background-color-gray-dark">
  <div class="container">
    <cu-header :links="menu"/>
  </div>
  </div>
  <!-- body content -->
  <div id="nuxt-body" class="container" >
    <div class="row">
      <nuxt/>
    </div>
  </div>
  <!-- footer -->
  <footer class="background-black padding-top padding-bottom">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <h4> Boulder Crowdfunding</h4>
        <a href="https://www.colorado.edu/policies/campus-wide-crowdfundingcrowdsourcing"> Crowdfunding Policy </a>
      </div>
      <div class="col-log-4 col-md-4 col-sm-6 col-xs-12 offset-lg-4 offset-md-4">
        <div class="ucb-footer">
          <p>
            <a href="https://www.colorado.edu"><img class="ucb-footer-be-boulder" src="https://cdn.colorado.edu/static/brand-assets/live/images/be-boulder-white.svg" alt="Be Boulder." style="max-width:240px; height:auto;"></a>
          </p>
          <p><a class="ucb-home-link" href="https://www.colorado.edu">University of Colorado Boulder</a></p>
          <p>© Regents of the University of Colorado</p>
          <p class="ucb-footer-links">
            <a href="http://www.colorado.edu/about/privacy-statement">Privacy</a> • <a href="http://www.colorado.edu/about/legal-trademarks">Legal &amp; Trademarks</a> • <a href="http://www.colorado.edu/map">Campus Map</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>
</div>
</template>
<script>
import cuHeader from '../components/cu-header'
export default {
  name: "main-theme",
  data: function() {
    return {
      menu: [
        { name: "About", path: "about" },
        { name: "Apply", path: "apply" },
        { name: "How Crowdfunding Works", path: "howCrowdfundingWorks"},
        { name: "FAQs", path: "faqs"}
      ]
    }
  },
  components: {
    cuHeader
  }
};
</script>
<style>
  #nuxt-body{
    min-height: 100vh;
  }
</style>
