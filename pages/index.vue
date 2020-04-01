<template>
  <div style="width:100%">
    <img id="front-page-image" src="https://www.colorado.edu/crowdfunding/sites/default/files/styles/hero/public/aerial_2_copy.jpg?itok=SuD5M_Ae" alt="cu campus"/>
    <div id="front-page-flexbox">
      <div id="cover-page-info">
        <h3 id="be-impactful" >Be impactful.</h3>
        <div id="cover-page-icons">
          <div class="icons-flex-children" >
            <font-awesome-icon icon="chart-line" class="fa-3x icon-color-gold icon-circle"/>
            <h3 class="facts-title" >$1,534,143</h3>
            <p>Total Amount Raised</p>
          </div>
          <div class="icons-flex-children">
            <font-awesome-icon icon="graduation-cap" class="fa-3x icon-color-gold icon-circle"/>
            <h3 class="facts-title" >168</h3>
            <p>Projects Funded</p>
          </div>
          <div class="icons-flex-children">
            <font-awesome-icon icon="users" class="fa-3x icon-color-gold icon-circle" />
            <h3 class="facts-title" >6,815</h3>
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
  </div>
</template>

<script>
export default {
  name: 'home',
  mounted: function(){
    // load in the crowdfunding content - located in assets/cf-global.js
    ebcfAppendLoaderJs();
    // 2b0533ec22d9e191ab314466c9fc233f
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
#front-page-flexbox{
  display: flex;
  flex-direction: column;
  align-items: center;
}
#be-impactful{
  color: white;
  font-weight: bolder;
  text-align: center;
  font-size: 3em;
  margin-bottom: 1em;
}
.facts-title{
  margin-top: .5em;
}
#cover-page-info{
  margin-top: -1em;
}
#cover-page-icons{
  color: white;
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 55vw;
}
.icons-flex-children{
  width: 30%;
}

.icon-color-gold{
  background-color: #CFB87C;
  color: black;
}

.icon-circle{
  height: 90px;
  width: 90px;
  border-radius: 50%;
  padding: .3em;
}
#cf-wrapper{
  margin-top: 10%;
  min-height: 2000px;
}
.clearfix::before{
  overflow: auto;
}

.clearfix::after{
  content: "";
  clear:both;
  display: table;
}

@media only screen and (max-width: 812px) {
  #cover-page-info{
    margin-top: 0px;
  }
  #be-impactful{
    font-size: 2em;
  }
  #cover-page-icons{
    display: none;
  }
}


</style>
