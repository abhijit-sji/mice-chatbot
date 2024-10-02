import React from 'react'
import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import OutlinedButton from './OutlineButton';

const { theme } = buildTheme({
  themeName: "prism",
  themeColor: "#E93D82",
});
// const clientId = import.meta.env.BOT_CLIENT_ID;
const clientId = "f57a4266-5842-4fba-9ee2-948dbf1f8bb6"
const ChatBot = () => {
  const client = getClient({ clientId });


  const config = {
    botName: "CHATPLANNER",
    botAvatar: "/logo-small.jpg",
    botDescription: "A smart service that recommends the perfect corporate event venues based on your preferences.",
    showPoweredBy: false
  };

  return (
    <div className='md:h-75vh flex flex-col gap-4' >
      <div className='md:h-65vh w-full md:w-[400px] h-[650px] mx-auto'>
        <WebchatProvider
          theme={theme}
          client={client}
          configuration={config}
        >
          <style>{`
            .bp-widget-header .bp-close-icon {
              display: none !important;
            }
          `}</style>
          <Webchat />
        </WebchatProvider>
      </div>
      <div className='md:h-5vh grid grid-cols-2 gap-2 md:flex md:justify-around'>
        {/* <OutlinedButton>Teambuilding Inspiration</OutlinedButton>
        <OutlinedButton>Great meeting venues</OutlinedButton> */}
        <OutlinedButton>This is new!</OutlinedButton>
        <OutlinedButton>Invitation</OutlinedButton>
      </div>
    </div>
  );
}

export default ChatBot

