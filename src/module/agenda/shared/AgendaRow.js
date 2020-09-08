import React from "react"
import styled from "styled-components"
import SweetAlert2 from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import speakerData from "~/data/speaker"
import AgendaModal from "./AgendaModal"
import languagesData from "~/data/languages"

const { speakers } = speakerData

const SweetAlert = withReactContent(SweetAlert2)

const showModal = ({ image, name, agenda }) => {
  console.log("showModal", image, name, agenda)
  return () =>
    SweetAlert.fire({
      title: (
        <AgendaModal
          image={`/images/speaker/${image}`}
          name={name}
          subject={agenda.title}
          outline={agenda.outline}
        />
      ),
      showCloseButton: true,
      showConfirmButton: false,
      showCancelButton: false,
    })
}

export default function AgendaRow(props) {
  const { agenda, time } = props
  const event = agenda.all
  const agenda101 = agenda["101"]
  if (agenda101) agenda101.speakerInfo = speakers[agenda101.speaker]
  const agenda102 = agenda["102"]
  if (agenda102) agenda102.speakerInfo = speakers[agenda102.speaker]

  return (
    <Container>
      <TimeColumn>{time}</TimeColumn>
      <SubjectColumn>
        {event && <EventColumn>{event.name}</EventColumn>}
        {agenda101 && (
          <SubjectBox
            speaker={agenda101.speakerInfo.name}
            subject={agenda101.name}
            language={languagesData[agenda101.speakerInfo.agenda.lang]}
            showModal={showModal(agenda101.speakerInfo)}
            slide={agenda101.speakerInfo.agenda.slide}
          />
        )}
        {agenda102 && (
          <SubjectBox
            speaker={agenda102.speakerInfo.name}
            subject={agenda102.name}
            language={languagesData[agenda102.speakerInfo.agenda.lang]}
            showModal={showModal(agenda102.speakerInfo)}
            slide={agenda102.speakerInfo.agenda.slide}
          />
        )}
      </SubjectColumn>
    </Container>
  )
}

const SubjectBox = props => {
  const { speaker, subject, language, slide } = props
  return (
    <SubjectContainer>
      <Speaker>{speaker}</Speaker>
      <Row>
        <LanguageTag>{language}</LanguageTag>
        {slide && (
          <SlideLink target="_blank" href={slide}>
            <SlideTag>Slide</SlideTag>
          </SlideLink>
        )}
      </Row>
      <Subject onClick={props.showModal}>{subject}</Subject>
    </SubjectContainer>
  )
}

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 25px 1%;
  border-bottom: 1px solid #fff;
  font-weight: 500;
`

const TimeColumn = styled.div`
  display: flex;
  flex: 2;
  font-size: 18px;
  line-height: 23px;
`

const SubjectColumn = styled.div`
  display: flex;
  flex: 8;
  font-size: 18px;
  line-height: 27px;
`

const SubjectContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const Speaker = styled.span`
  font-size: 20px;
  font-weight: 100;
  line-height: 30px;
  letter-spacing: 1.5px;
  font-family: Oswald, sans-serif;
`

const Row = styled.div`
  display: flex;
`

const LanguageTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primaryOld};
  border-radius: 5px;
  color: black;
  height: 25px;
  width: 25px;
  padding: 3px 7px;
  margin: 10px 0px;
  font-size: 12px;
`

const SlideLink = styled.a`
  text-decoration-line: none;
`

const SlideTag = styled(LanguageTag)`
  background-color: #5bc0de;
  font-size: 12px;
  margin-left: 5px;
  font-weight: bold;
  width: auto;
  color: #fff;
  text-decoration-line: none;
`

const Subject = styled.a`
  padding: 8px 0px 2px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 27px;
  text-decoration-line: underline;
  cursor: pointer;
`

const EventColumn = styled.div`
  display: flex;
  flex: 1;
  font-size: 20px;
  font-family: "Oswald", sans-serif;
  letter-spacing: 1.5px;
  font-weight: 100;
  line-height: 30px;
`
