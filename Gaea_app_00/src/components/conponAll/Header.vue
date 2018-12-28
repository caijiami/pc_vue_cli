<template>
    <div class="app-header">
        <div class="sub-menu">
            <div class="inner">
                <div class="language">
                    <ul>
                        <li><a class="active" href="#">中文</a></li>
                        <li><a href="#">ENG</a></li>
                        <li><a href="#">한글</a></li>                                  
                    </ul>
                </div>
                 <div class="sub-share">
                    <ul>
                        <li><a href="" class="gayat">盖娅通行证</a></li>
                        <li><a href="" class="weibo"><span :style="'background-image:url(img/index/header/nav.png)'"></span></a></li>
                        <li><a href="" class="fb"><span></span></a></li>
                        <li><a href="" class="twitter"><span></span></a></li>
                        <li><a href="" class="in"><span></span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* 公共样式 */
a{
    text-decoration: none;
}
ul{
    list-style: none;
}
/* 导航栏 */
.sub-menu {
    width: 100%;
    height: 28px;
    line-height: 28px;
    font-size: 12px;
    color: #a6a6a6;
    background-color: #393939;
}

.sub-menu .inner {
    height: 100%;
    overflow: hidden;
}
/* 导航栏左侧 */
.inner {
    position: relative;
    width: 1200px;
    margin: 0 auto;
}
.language {
    float: left;
    height: 100%;
}
.language ul {
    display: inline-block;
}
.language ul li{
    float: left;
    margin-right: 1rem;
}
.language ul li a,.sub-share ul li a{
    color:#fff;
    text-decoration: none;
}
/* 导航栏右侧 */
.sub-share{
    float: right;
    height: 100%; 
}
.sub-share ul{
    display: inline-block;
}
.sub-share span{
    display: block;
    width: 15px;
    height: 16px;
    margin: 6px auto 0;
    background-repeat: no-repeat
}
.weibo>span{
    width: 20px;
    background-position: -3px -112px;

}
.fb>span{
    background-position: 0 -82px;
}
.twitter>span{
    background-position: -15px -82px;
}
.in>span{
    background-position: -30px -82px;
}
</style>
<script>
export default {
    data(){
        return {

        }
    }
}
</script>

