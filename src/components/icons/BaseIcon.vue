<template>
  <component
    :is="iconComponent"
    role="img"
  />
</template>

<script>
import ClockIcon from "./ClockIcon.vue"
import CalendarIcon from "./CalendarIcon.vue"
import ProfileIcon from "./ProfileIcon.vue"
import HomeIcon from "./HomeIcon.vue"
import CameraIcon from "./CameraIcon.vue"

const icons = {
  clock: ClockIcon,
  calendar: CalendarIcon,
  profile: ProfileIcon,
  home: HomeIcon,
  camera: CameraIcon,
}

export default {
  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return Object.prototype.hasOwnProperty.call(icons, value)
      }
    }
  },

  computed: {
    iconComponent() {
      return icons[this.name]
    }
  }
}
</script>
