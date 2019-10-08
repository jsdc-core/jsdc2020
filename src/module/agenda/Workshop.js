import React from "react"
import styled from "styled-components"
import AgendaRow from "./shared/AgendaRow"
import agendaData from "~/data/agenda"
import { Header } from "~/components/SegmentPageHeader"
import { ACTIVITIES } from "~/constant"
const { WORKSHOP } = ACTIVITIES

const conferenceAgenda = agendaData["工作坊"]

export default function Conference() {
  return (
    <Container>
      <Header date={WORKSHOP.date} title={WORKSHOP.title} />
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
