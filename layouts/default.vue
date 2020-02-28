<template>
  <ucb-base-theme v-slot:nuxt-body :config="config" :menu="menu">
    <nuxt />
  </ucb-base-theme>
</template>
<script>
export default {
  name: "main-theme",
  data: function() {
    return {
      config: {
        site: "Boulder Crowdfunding",
        address: null,
        address_line_2: null,
        phone: null,
        email: null,
        links: [{name: "Crowdfunding Policy", url: "https://www.colorado.edu/policies/campus-wide-crowdfundingcrowdsourcing"}]
      },
      menu: [
        { name: "About", path: "about" },
        { name: "Apply", path: "apply" },
        { name: "How Crowdfunding Works", path: "howCrowdfundingWorks"},
        { name: "FAQs", path: "faqs"}
      ]
    };
  }
};
</script>
<style>
/* Add into main theme */
#footer-information{
  line-height: unset;
}
</style>
