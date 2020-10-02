import React, { useState } from "react";
import { Alert } from "react-native";
import {
  SlideTransitionCallback,
  Page,
  Container,
  Avatar,
  TextWrap,
  SizedBox,
  Rounded,
  TouchWrap,
  InputWrap,
  ScrollArea,
  SlideTransition,
} from "./lib/main";

export default function App() {
  const [index, setIndex] = useState(true);
  return (
    <Page barIconColor="light-content">
      <ScrollArea flexGrow={1}>
        <Container
          flex={1}
          backgroundColor="skyblue"
          horizontalAlignment="center"
          verticalAlignment="center"
          paddingHorizontal={6}
        >
          <SlideTransitionCallback
            from={20}
            elastic={1}
            index={index}
            duration={350}
          >
            <Avatar
              backgroundColor="#efefef"
              size={30}
              elevation={5}
              url="https://randomuser.me/api/portraits/women/96.jpg"
            />
          </SlideTransitionCallback>

          <SizedBox height={3} />

          <TouchWrap
            onPress={() => setIndex(!index)}
            padding={5}
            backgroundColor="red"
          >
            <TextWrap>TOGGLE ME</TextWrap>
          </TouchWrap>
        </Container>
      </ScrollArea>
    </Page>
  );
}
