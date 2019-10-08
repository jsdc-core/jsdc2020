import React from "react"
import styled from "styled-components"
import ConferenceContent from "./Conference"
import WorkshopContent from "./Workshop"
import SegmentPages, { useSegment } from "~/components/SegmentPages"

import { ACTIVITIES } from "~/constant"

const { CONFERENCE, WORKSHOP } = ACTIVITIES

export default function AgendaPage() {
  const segmentHook = useSegment()
  const subPages = {
    [CONFERENCE.key]: ConferenceContent,
    [WORKSHOP.key]: WorkshopContent,
  }
  return (
    <Container>
      <SegmentPages subPages={subPages} {...segmentHook} />
      <FooterDescription>
        若遇不可抗拒因素或其他未盡事宜，主辦單位保留活動議程及講師更動之權利。​
      </FooterDescription>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
`

const FooterDescription = styled.span`
  margin-top: 30px;
  padding: 25px 0;
  text-align: center;
`
