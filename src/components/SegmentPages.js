import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { ACTIVITIES } from "~/constant"

const { CONFERENCE } = ACTIVITIES

export function useSegment() {
  const [activeTarget, setActiveTarget] = useState(CONFERENCE.key)

  return {
    setActiveTarget,
    activeTarget,
  }
}

export default function SegmentPages({
  subPages,
  activeTarget,
  setActiveTarget,
}) {
  function renderSubContent() {
    return Object.keys(ACTIVITIES).map(key => {
      let SubPage = subPages[key]
      return (
        <SubContent key={key} active={activeTarget === key}>
          <SubPage />
        </SubContent>
      )
    })
  }

  function renderSegmentButton() {
    return Object.keys(ACTIVITIES).map(key => {
      const { name } = ACTIVITIES[key]
      return (
        <SegmentButton
          key={key}
          onClick={() => setActiveTarget(key)}
          active={activeTarget === key}
        >
          {name}
        </SegmentButton>
      )
    })
  }

  return (
    <>
      <SegmentButtonGroup>{renderSegmentButton()}</SegmentButtonGroup>
      {renderSubContent()}
    </>
  )
}

SegmentPages.propTypes = {
  subPages: PropTypes.object.isRequired,
  activeTarget: PropTypes.string.isRequired,
  setActiveTarget: PropTypes.func.isRequired,
}

const SegmentButtonGroup = styled.div`
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 24px;
`

const SegmentButton = styled.button`
  background-color: ${props => (props.active ? "#ffc800" : "#eaeaea")};
  font-size: 24px;
  padding: 10px 35px;
  font-weight: bold;
  width: 50%;
  color: black;
  border: 0px solid;
  &:hover {
    background-color: ${props => (props.active ? "#ffc800" : "#ffdd60")};
  }
  &:focus {
    outline: 0;
  }
`

const SubContent = styled.div`
  display: ${props => (props.active ? "block" : "none")};
`
