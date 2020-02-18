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
        site: "CU Crowdfunding",
        address: "123 Street Name",
        address_line_2: "Boulder, CO 80303",
        phone: "303-555-9056",
        email: "contact@example.com"
      },
      menu: [
        { name: "About", path: "about" },
        { name: "Apply", path: "apply" },
        { name: "How Crowdfunding Works", path: "howCrowdfundingWorks"}
      ]
    };
  }
};
</script>