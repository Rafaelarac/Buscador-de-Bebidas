import type { Drink } from "../types"

type DrinkCardProp = {
    drink: Drink
}

export default function DrinkCard({drink} : DrinkCardProp) {
    return (
        <div>

            <h1>{drink.strDrink}</h1>
        </div>
    )
}
