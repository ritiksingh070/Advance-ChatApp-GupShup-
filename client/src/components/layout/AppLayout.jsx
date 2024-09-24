import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../specific/ChatList";
import { sampleChats } from "../../constants/SampleChats";
import { useParams } from "react-router-dom";
import Profile from '../specific/Profile'
const AppLayout = () => (WrappedComponent) => {
  // eslint-disable-next-line react/display-name

  return (props) => {
    const params = useParams();
    const chatId = params.chatId;
    const handleDeleteChat = (e,_id,groupChat)=>{
    
      e.preventDefault();
      console.log(e,groupChat,_id);

    }
    return (
      <div>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height={"100%"}
          >
            <ChatList
              chats={sampleChats}
              chatId={chatId}
              // newMessagesAlert={[{ chatId, count: 4 }]}
              onlineUsers={["1", "2"]}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
            }}
            height={"100%"}
          >
            <Profile/>
          </Grid>
        </Grid>

        <div>Footer</div>
      </div>
    );
  };
};

export default AppLayout;
