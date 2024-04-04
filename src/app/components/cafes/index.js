import '../../../style/index/cafes/container.scss'
import CoffeeMenu from './menu'

export default function Cafes() {
    return (
    <article className="menu_container">
        <h2 className='menu_title'>Nossos cafés mais que especiais</h2>
        <p className='menu_paragraph'>Clique em cima deles!!</p>
        <CoffeeMenu/>
    </article>
    )
}