!<<template>
    <div>
        <h2>Home组件内容</h2>
        <div>
            <ul class="new nav-tabs">
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
                </li>
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
                </li>
            </ul>
            <keep-alive include="News">
                <router-view></router-view>
            </keep-alive>
        
        </div>
    </div>
</template>

<script>
    export default {
        name:'Home',
        beforeDestroy(){
            console.log('Home component are going to destroy')
        },
        mounted(){
            console.log('Home component are going to mounted')
        }
    }
</script>
