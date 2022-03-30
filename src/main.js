import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css';

import {
    BaseIcon,
    BaseButton,
    ProfileSnippet,
    QueueCard,
    TopBackground,
    UserProfileSnippet,
    BrowseImage,
    BrowseImageLong,
    SelectInput,
    TextAreaInput,
    TextInput,
    PasswordInput,
    TitleInfo,
} from "./components/index"

const app = createApp(App)

app.component('TextInput', TextInput)
    .component('BaseIcon', BaseIcon)
    .component('PasswordInput', PasswordInput)
    .component('SelectInput', SelectInput)
    .component('TextAreaInput', TextAreaInput)
    .component('BaseButton', BaseButton)
    .component('ProfileSnippet', ProfileSnippet)
    .component('UserProfileSnippet', UserProfileSnippet)
    .component('BrowseImage', BrowseImage)
    .component('BrowseImageLong', BrowseImageLong)
    .component('QueueCard', QueueCard)
    .component('TopBackground', TopBackground)
    .component('TitleInfo', TitleInfo)

app.mount('#app')
