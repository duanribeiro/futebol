import React from 'react';
import GameCardWrapper from './gamecard.style';
import classNames from 'classnames';


const GameCard = (
    {stadium = '', team_1, team_2, score_team_1, score_team_2, className = ''}
    ) => {
    return (
        <GameCardWrapper>
            <div className={classNames('action-widget-card', 'card', className)}>
                <div className="card-body" style={{height:"140px"}} >
                    <h6 className="card-title action-card-title">{ team_1 } x { team_2 }</h6>
                    <h6 className="card-title action-card-title">{ score_team_1 } x { score_team_2 }</h6>

                    <p className="card-text action-card-discription">{ stadium } </p>
                </div>
            </div>
        </GameCardWrapper>
    )
}

export default GameCard