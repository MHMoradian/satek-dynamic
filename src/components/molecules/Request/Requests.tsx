import React from "react";
import styled from "styled-components";
import HashIcon from "../../atoms/icons/HashIcon";
import SaveIcon from "../../atoms/icons/SaveIcon";
import DateIcon from "../../atoms/icons/DateIcon";
import LocationIcon from "../../atoms/icons/LocationIcon";
import OptionsIcon from "../../atoms/icons/OptionsIcon";
import { type } from "os";

type RequestsProps = {
  requestsItem: {
    description: string;
    number: number;
    date: string;
    location: string;
  }[];
};

const Requests = (props: RequestsProps) => {
  return (
    <RequestsContainer>
      {props.requestsItem.map((requestItem) => {
        return (
          <RequestStyled>
            <div className="request">
              <div className="right-section">
                <div className="request-item">
                  <button>
                    <SaveIcon />
                  </button>
                  <span>{requestItem.description}</span>
                </div>
              </div>
              <div className="left-section">
                <div className="request-item">
                  <HashIcon />
                  <span>{requestItem.number}</span>
                </div>
                <div className="request-item">
                  <DateIcon />
                  <span>{requestItem.date}</span>
                </div>
                <div className="request-item">
                  <LocationIcon />
                  <span>{requestItem.location}</span>
                </div>
                <button>
                  <OptionsIcon />
                </button>
              </div>
            </div>
          </RequestStyled>
        );
      })}
    </RequestsContainer>
  );
};

export default Requests;

const RequestStyled = styled.div`
  display: flex;
  padding: 1rem 0;
  border-bottom: 1px solid #c4c4c4;
  font-size: 1.25rem;
  svg {
    width: 32px;
    height: 32px;
    stroke: #c4c4c4;
    path {
      stroke: #c4c4c4;
    }
    circle {
      stroke: #c4c4c4;
    }
  }

  .request {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .left-section {
    display: flex;
    gap: 5rem;
    justify-content: flex-end;
  }

  .right-section {
    display: flex;
  }

  .request-item {
    display: flex;
    gap: 0.5rem;
  }

  button {
    border: none;
    background-color: #fff;
    cursor: pointer;
  }
`;

const RequestsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
