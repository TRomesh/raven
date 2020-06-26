import React from "react";

function SpaceCard({ data }) {
  return (
    <div className="raven-card raven-space">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-5">
          <h4>{data.name}</h4>
        </div>
        <div className="col-6"></div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-2">
          <div className="raven-space-type">
            <span className="get">{data.type}</span>
          </div>
        </div>
        <div className="col-8">
          <input
            className="raven-input"
            placeholder="Name"
            value={data.url}
          ></input>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-3">
          <h4>Headers</h4>
        </div>
        <div className="col-8"></div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-3">Headers</div>
        <div className="col-8"></div>
      </div>
    </div>
  );
}

export default SpaceCard;
