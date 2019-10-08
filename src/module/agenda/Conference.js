import React from "react"
import styled from "styled-components"
import AgendaRow from "./shared/AgendaRow"
import agendaData from "~/data/agenda"
import { Header } from "~/components/SegmentPageHeader"

import { ACTIVITIES } from "~/constant"
const { CONFERENCE } = ACTIVITIES

const conferenceAgenda = agendaData["主年會"]

export default function Conference() {
  return (
    <Container>
      <Header date={CONFERENCE.date} title={CONFERENCE.title} />
      <AgendaTable>
        {conferenceAgenda.map(item => (
          <AgendaRow key={item.time} time={item.time} agenda={item.list} />
        ))}
      </AgendaTable>
    </Container>
  )
}

const Container = styled.div``

const AgendaTable = styled.div`
  margin-top: 28px;
  background-color: rgba(255, 255, 255, 0.03);
`
