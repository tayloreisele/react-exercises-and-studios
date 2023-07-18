import styles from './Ingredients.module.css';

export default function RecipeIngredients() {
    return (
    <div>
    <h3>Recipe Ingredients</h3>
    <ul className = {styles.ingredientList}>
       <li>{"Salted butter"}</li>
       <li>{"White sugar"}</li>
       <li>{"Light brown sugar"}</li>
       <li>{"Large eggs"}</li>
       <li>{"Chocolate chips"}</li>
    </ul>
 </div>
    )
}