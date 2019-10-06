<template>
    <section class="new-post">
        <div class="container">
            <form @submit.prevent="onSubmit">
                <AppInput v-model="post.title"> Title: </AppInput>
                <AppInput v-model="post.description"> Description: </AppInput>
                <AppInput v-model="post.img"> Image link: </AppInput>
                <AppTextArea v-model="post.content"> Content: </AppTextArea>
                <div class="controls">
                    <div class="btn btnDanger" @click="cancel"> Cancel</div>
                    <AppButton> Save </AppButton>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    props:{
        editPost:{
            type:Object           
        }
    },
    data(){
        return{
            post: this.editPost ? this.editPost :{
                title:'',
                description:'',
                img:'',
                content:''
            }
        }
    }, 
    methods:{
        cancel(){
            this.$router.push('/admin/')
        },
        onSubmit(){
            this.$emit("submit", this.post);
        }
    }
}
</script>

<style lang="scss" scoped>
    .controls{
        text-align: center;
        margin: 20px 0;
    }
</style>