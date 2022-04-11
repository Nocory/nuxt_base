import { render,fireEvent } from "@testing-library/vue"
import Index from "../pages/index.vue"

describe("My test", async () => {
  test("add 99 to the rendered list", async () => {
    const {getByText} = render(Index)
    getByText("3")
    const button = getByText("add")
    await fireEvent.click(button)
    getByText("99")
  })
})