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
        address: "123 Street Name",
        address_line_2: "Boulder, CO 80303",
        phone: "303-555-9056",
        email: "contact@example.com"
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
/* BSV overrides so i have to add the styles back */
li > a{
  color: white;
}

li > a:hover{
  color: #cfb87c;
  text-decoration: none;
  -webkit-transition: color 0.25s ease;
  transition: color 0.25s ease;
}

.nuxt-link-exact-active{
  color: #cfb87c;
}

/* End fixes */
</style>