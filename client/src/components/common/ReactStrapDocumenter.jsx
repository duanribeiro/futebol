import React from 'react'
import CodeLooker from 'components/common/CodeLooker'

const ReactStrapDocumenter = ({pageData}) => {
  return (
    <div className="row">
      {
        pageData.map((e,i) => {
          return(
            <div className="col-sm-12 ptb-15" key={i}>
              <div className="roe-card-style">
                <div className="roe-card-header"> 
                    <span className="hash"># </span> {e.title}
                </div>
                <div className="roe-card-body" style={e.example === null ? {marginTop: '-1rem'} : {}}>
                  {
                    e.example &&
                    <e.example />
                  } 
                  <CodeLooker Code={e.code}/>
                </div>
              </div> 
            </div>
          )
        })
      }
    </div>
  )
}

export default ReactStrapDocumenter;