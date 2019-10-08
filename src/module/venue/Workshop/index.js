import React from "react"
import styled from "styled-components"
import SegmentPageHeader from "~/components/SegmentPageHeader"
import Title from "../shared/Title"
import Description from "../shared/Description"
import OrderList from "../shared/OrderList"
import { ACTIVITIES } from "~/constant"

const { WORKSHOP } = ACTIVITIES

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
        pageTitle={WORKSHOP.location}
      />
      <Title>自行開車前往</Title>
      <Description>
        <OrderList>
          <li>台北市中山區南京東路二段53號 2F</li>
        </OrderList>
      </Description>
      <Title>捷運路線</Title>
      <Description>
        <OrderList>
          <li>捷運松江南京站出口1分鐘馬上到達。</li>
        </OrderList>
      </Description>
      <iframe
        title="workshop-location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.4634427209517!2d121.52750851500645!3d25.05227678396374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a949f18c5e55%3A0x5ce3f1e3f7bdd3a7!2zTSBTcGFjZSDlhbHkuqvnqbrplpM!5e0!3m2!1szh-TW!2stw!4v1563254376495!5m2!1szh-TW!2stw"
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
      />
    </Container>
  )
}
