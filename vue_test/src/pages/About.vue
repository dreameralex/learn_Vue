!<<template>
    <h2>我是About的内容</h2>
</template>

<script>
export default {
    name:'About',
    beforeDestroy(){
        console.log('About component are going to destroy')
    },
    mounted(){
        console.log('About component are going to mounted')
    }
}
</script>