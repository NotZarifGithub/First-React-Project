import react from 'react';
import {tools} from "../tools";

const Card = (props) => {
    return (
        <div className="tc bg-washed-blue dib  pa4 ma2 grow bw2 shadow-5">
            <img src={tools[props.id].image} alt="" width ="150" height="150"/>
            <div>
                <h2>{props.name}</h2>
                <a href={props.link} class="link">
                    <span class="mask">
                        <div class="link-container">
                        <span class="link-title1 title">READ MORE</span>
                        <span class="link-title2 title">READ MORE</span>
                        </div>
                    </span>
                    <div class="link-icon">
                        <svg class="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                        </svg>
                        <svg class="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                        </svg>
                    </div>
                    </a>
            </div>

        </div>
    );
}

export default Card;
