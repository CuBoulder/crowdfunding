<template>
    <div id="page-wrapper">
    <div id="cf-wrapper" class="clearfix" style="width:80%">
        <!-- This page is dedicated to individual campaigns -->
        <div id="empowered-by-cf" data-user="2b0533ec22d9e191ab314466c9fc233f" >
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:"projects",
    mounted: function(){
        ebcfAppendLoaderJs();
    }
}
</script>
<style scoped>
    #cf-wrapper{
        margin: auto;
    }
</style>