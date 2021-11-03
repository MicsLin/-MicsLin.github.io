<script>
// <router-link @click.native="$scrollToTop">
// 跳頁後 滾輪可以一直維持在上方

const scrollToTop=function() {
    return window.scrollTo(0, 0);
}

export default {
    scrollToTop
}
</script>
