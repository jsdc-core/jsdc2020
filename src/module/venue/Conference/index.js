import React from "react"
import styled from "styled-components"
import SegmentPageHeader from "~/components/SegmentPageHeader"
import Title from "../shared/Title"
import Description from "../shared/Description"
import OrderList from "../shared/OrderList"
import { ACTIVITIES } from "~/constant"

const { CONFERENCE } = ACTIVITIES

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`

export default () => {
  return (
    <Container>
      <SegmentPageHeader
        date={CONFERENCE.date}
        headerTitle={CONFERENCE.title}
        pageTitle={CONFERENCE.location}
      />
      <Title>自行開車前往</Title>
      <Description>臺北市松山區敦化南路一段108號 B2F</Description>
      <br />
      <Description>
        <OrderList>
          <li>
            國道一號:
            由圓山交流道下，轉建國高架道路南行至民權東路出口，續行過民權東路至迴轉道迴轉至民權東路右轉，行至敦化南路右轉直行至市民大道後再右轉，隨即至本大樓停車場停車即可。
          </li>
          <li>
            國道三號:
            由台北聯絡道下敦化南路端，直行至市民大道後右轉，至迴轉道迴轉往敦化南路經過敦化南路後，隨即至本大樓停車場停車即可。
          </li>
        </OrderList>
      </Description>

      <Title>捷運路線</Title>
      <Description>
        <OrderList>
          <li>
            板南線忠孝敦化站8號出口或東區地下街9號出口，直行敦化南路至市民大道口，步行約10分鐘。
          </li>
        </OrderList>
      </Description>

      <Title>公車路線</Title>
      <Description>
        <OrderList>
          <li>
            市民大道口：0東 \ 33 \ 41 \ 52 \ 262 \ 275 \ 278 \ 285 \ 292 \ 605 \
            630 \ 902 \ 905 \ 906 \ 909 \ 1211 \ 5350 \ 敦化幹線
          </li>
          <li>
            市民敦化路口：0東 \ 33 \ 41 \ 52 \ 262 \ 275 \ 285 \ 292 \ 521 \ 605
            \ 630 \ 902 \ 903 \ 905 \ 906 \ 909 \ 1211 \ 敦化幹線
          </li>
        </OrderList>
      </Description>
      <iframe
        title="conference-location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6626197344885!2d121.54628671496255!3d25.045521143983603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abdb4d50fe81%3A0x2c2011e45417d1bc!2z5a-M6YKm5Lq65aO95aSn5qiT5ZyL6Zqb5pyD6K2w5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1538412862921"
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
      />
    </Container>
  )
}
