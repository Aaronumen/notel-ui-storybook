
import type { App } from "vue"
import NotelButton from "./components/NotelButton.vue"
const NotelUi = {
  install: (app: App) => {
    app.component(NotelButton.name, NotelButton)
    // app.component(NotelInput.name, NotelInput)
    // app.component(NotelSpace.name, NotelSpace)
  }
}

export { NotelButton }

export default NotelUi
