<template>
  <div>
    <img id="front-page-image" src="https://www.colorado.edu/crowdfunding/sites/default/files/styles/hero/public/aerial_2_copy.jpg?itok=SuD5M_Ae" alt="cu campus"/>
    <div id="cover-page-info">
      <h3 id="be-impactful" >Be Impactful.</h3>
      <div id="cover-page-icons">
        <div>
          <h3>$1,534,143</h3>
          <p>Total Amount Raised</p>
        </div>
        <div>
          <h3>168</h3>
          <p>Projects Funded</p>
        </div>
        <div>
          <h3>6,815</h3>
          <p> Total Donors</p>
        </div>
      </div>
    </div>
    <div id="cf-wrapper" class="clearfix">
      <!-- This div is where the content loads data-user is the API_KEY -->
      <div id="empowered-by-cf" data-user="2b0533ec22d9e191ab314466c9fc233f" >
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  mounted: function(){
    // load in the crowdfunding content - located in assets/cf-global.js
    ebcfAppendLoaderJs();
  }
};
</script>

<style scoped>
#front-page-image{
  position: absolute;
  left: 0px;
  top: 90px;
  width: 100%;
  z-index: -12;
}
#be-impactful{
  color: white;
  font-weight: bolder;
  text-align: center;
}

#cover-page-info{
  margin-top: 25%;
}
#cover-page-icons{
  color: white;
  display: flex;
  justify-content: space-between;
  text-align: center;
}


#cf-wrapper{
  margin-top: 10%;
}
.clearfix::before{
  overflow: auto;
}

.clearfix::after{
  content: "";
  clear:both;
  display: table;
}


</style>
