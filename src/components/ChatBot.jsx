import React from 'react'
import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import { useState } from "react";
import OutlinedButton from './OutlineButton';

const { theme, style } = buildTheme({
  themeName: "prism",
  themeColor: "#E93D82",
});
const clientId = "f57a4266-5842-4fba-9ee2-948dbf1f8bb6";

const ChatBot = () => {
  const client = getClient({ clientId });

  return (
    <div className='' >
      <WebchatProvider
        theme={theme}
        client={client}
      >
        <Webchat />
        <OutlinedButton>Teambuilding Inspiration</OutlinedButton>
      </WebchatProvider>
    </div>
  );
}

export default ChatBot

