<template>
  <div>
      <h1> About </h1>
      <h4> We welcome your involvement with CU Boulder Crowdfunding as we shape tomorrow’s leaders, strive to be the top University for innovation and positively impact humanity. </h4>
      <p>
        CU Boulder Crowdfunding is a campus online fundraising platform that enables the CU Boulder community to build connections, identify resources and create a lasting impact. In our partnership with University students, faculty and staff, we develop and share fundraising campaigns with an engaged audience.
      </p>
      <p>  
        Be involved as a campaign contributor -- donate to any active CU Boulder crowdfunding campaign, supporting University members in their work as leaders, dedication to innovation and continuous efforts to positively impact humanity. 
      </p>
      <p>  
        Be involved as a campaign creator -- current CU Boulder students, faculty and staff are invited to apply to use the crowdfunding platform as a place for online fundraising. A campaign creator’s work is directly related to the University’s mission in shaping tomorrow’s leaders, striving to be the top University for innovation and positively impacting humanity. 
      </p>
      <p id="improve-statement">
         We are working to refine and expand CU Boulder Crowdfunding, so we welcome any feedback that can help us improve the platform.
      </p>
      <button> <nuxt-link to="/"> Explore CU Crowdfunding Projects </nuxt-link> </button>
      <br/>
      <img src="/through-crowdfunding.png" alt="cu crowdfunding logo" height="50%" width="50%" >
  </div>
</template>

<script>

export default {
    name: 'AboutPage'
}
</script>

<style scoped>
  h1{
    margin-bottom: 1em;
  }
  p{
    margin-top: 1em;
  }
  button{
    background-color: gold;
    border-radius: 5px;
    margin-bottom: 5em;
  }
  button:hover{
    background-color: grey;
  }
  #improve-statement{
    font-weight: bolder;
    font-style: italic;
  }
</style>
