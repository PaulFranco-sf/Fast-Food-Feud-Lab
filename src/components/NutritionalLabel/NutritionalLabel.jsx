import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  if (props["nutritional-label"] == null) return null;
  
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props["item-name"]}</h4>

      <ul className="fact-list">
          {nutritionFacts.map((item) => {
            return <NutritionalLabelFact key={item.id} nutrition-fact={item} fact-label={item.label} fact-value={props["fact-list"][item.attribute]}/>
          })}
      </ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {

  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props["fact-label"]}</span>{" "}
      <span className="fact-value">{props["fact-value"]}</span>
    </li>
  )
}

export default NutritionalLabel
