// <></> é massa pra implementar um conjunto de tags
// TAPLE STRINH: ``
// para criar o style: <style>{``}</style>
// Hooks:
//spread operator javascript [...array]
import {Div} from "./style";

export default function Card({nome, idade}){
    // CARD
    return (
        <> 
            <Div>
                <span />
                <h1>{nome}</h1>
                <p> {idade} anos</p>
            </Div>

        </>
    );
}