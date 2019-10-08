import React from "react"
import styled from "styled-components"
import SegmentPageHeader from "~/components/SegmentPageHeader"
import AuthorCard from "~/components/AuthorCard"
import Speakers from "~/data/speaker"
import { ACTIVITIES } from "~/constant"
import CardList from "./shared/CardList"
import renderAuthorCards from "./shared/renderAuthorCards"

const { WORKSHOP } = ACTIVITIES
const { workshopSpeakers } = Speakers

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`

export default () => {
  return (
    <Container>
      <SegmentPageHeader
        date={WORKSHOP.date}
        headerTitle={WORKSHOP.title}
        pageTitle={"Speakers"}
      />
      <CardList>
        {renderAuthorCards(workshopSpeakers)}
        <AuthorCard
          name="持續邀請中"
          description="若遇不可抗拒因素或其他未盡事宜，主辦單位保留活動議程及講師更動之權利。"
        />
      </CardList>
    </Container>
  )
}
