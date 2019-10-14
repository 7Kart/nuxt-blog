import Vue from 'vue';

import AppButton from "@/components/UI/Button";
import AppInput from "@/components/UI/Controls/Input";
import AppTextArea from "@/components/UI/Controls/TextArea";
import AppMessage from "@/components/UI/Message";
import AppTextAreaResize from "@/components/UI/Controls/TextAreaResize";

import VueMarkdown from "vue-markdown-v2";
import PostsList from "@/components/blog/PostsList";
import Intro from "@/components/UI/intro.vue";


// ui
Vue.component('Intro', Intro);
Vue.component('AppMessage', AppMessage);
Vue.component('PostsList', PostsList);
Vue.component('VueMarkdown', VueMarkdown);

// Controls
Vue.component('AppButton', AppButton);
Vue.component('AppInput', AppInput);
Vue.component('AppTextArea', AppTextArea);
Vue.component('AppTextAreaResize', AppTextAreaResize);
