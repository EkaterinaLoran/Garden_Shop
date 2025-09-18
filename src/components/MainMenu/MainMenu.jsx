import { menuItems } from "../../config/menu.js"
import * as C from "./MainMenu.components";

export function MainMenu(props) {
    return (
        <C.Container {...props}>
            {menuItems.map(item => (
        <C.item href={item.url}>{item.name}</C.item>.Item>
             )) }
        </C.Container>
    )
}