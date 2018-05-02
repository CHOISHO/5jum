<template>  
        <p class="mapTypeBtn"> 
    
            <v-ons-button @click="setOverlayMapTypeId('traffic')">지적편집도 보기</v-ons-button>
            <v-ons-button @click="setOverlayMapTypeId('roadview')">로드뷰 도로정보 보기</v-ons-button> 
            <v-ons-button @click="setOverlayMapTypeId('terrain')">지형정보 보기</v-ons-button>
            <v-ons-button @click="setOverlayMapTypeId('use_district')">지적편집도 보기</v-ons-button>
        </p>
</template>

<script>

    export default {
        data() {
            return {
                currentTypeId: ''
            }
        },
        methods:{
               setOverlayMapTypeId: (maptype)=>{
                console.log(11)
                var changeMaptype;
        
        // maptype에 따라 지도에 추가할 지도타입을 결정합니다
        if (maptype === 'traffic') {            
            
            // 교통정보 지도타입
            changeMaptype = daum.maps.MapTypeId.TRAFFIC;     
            
        } else if (maptype === 'roadview') {        
            
            // 로드뷰 도로정보 지도타입
            changeMaptype = daum.maps.MapTypeId.ROADVIEW;    

        } else if (maptype === 'terrain') {
            
            // 지형정보 지도타입
            changeMaptype = daum.maps.MapTypeId.TERRAIN;    

        } else if (maptype === 'use_district') {
            
            // 지적편집도 지도타입
            changeMaptype = daum.maps.MapTypeId.USE_DISTRICT;           
        }
        
        // 이미 등록된 지도 타입이 있으면 제거합니다
        if (this.currentTypeId) {
            map.removeOverlayMapTypeId(this.currentTypeId);    
        }
        
        // maptype에 해당하는 지도타입을 지도에 추가합니다
        map.addOverlayMapTypeId(changeMaptype);
        
        // 지도에 추가된 타입정보를 갱신합니다
        this.currentTypeId = changeMaptype;    
                }
            },
            created(){
                
                
            
            }
            
    }
     

       
</script>

<style>
.mapTypeBtn {
    position: absolute;
    top: 100px;
    left: 0;
    z-index: 300   
}
button {
    float: left;    
}
</style>
