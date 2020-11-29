import { modulesData } from "./modulesData.js";
import './moduleSelection.css';

export default function modulesSelectionDOM() {
    return (
        <div className="modulesSelection">
            {modulesData.map((data, key) => {
                var style = {
                    backgroundImage: `url(${data.Image})`,
                }
                return (
                    <div className="modulesDisplay">
                        <div className="modulesCard" style={style}>
                            
                        </div>
                    </div>
                )
            })

            }
        </div>
    )
}