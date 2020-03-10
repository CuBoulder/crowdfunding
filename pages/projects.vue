<template>
    <div id="cf-wrapper" class="clearfix" style="width:100%">
        <!-- This div is where the content loads data-user is the API_KEY -->
        <div id="empowered-by-cf" data-user="2b0533ec22d9e191ab314466c9fc233f" >
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