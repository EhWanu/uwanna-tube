import React from "react"
import styled from "styled-components"
import UwannaTube from "../img/logo.png"
// MATERIAL ICONS
import HomeIcon from "@mui/icons-material/Home"
import ExploreOutlinedIcon from "@mui/icons-material/Explore"
import SubscriptionsOutlinedIcon from "@mui/icons-material/Subscriptions"
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibrary"
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined"
import SportsBaseballOutlinedIcon from "@mui/icons-material/SportsBaseballOutlined"
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined"
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined"
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined"
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag"
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined"
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"

// STYLED COMPONENTS
const Container = styled.div`
  flex: 1;
  background-color: #202020;
  height: 100vh;
  color: white;
  font-size: 14px;
`
const Wrapper = styled.div`
  padding: 18px 26px;
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 25px;
`

const Img = styled.img`
  height: 25px;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
`

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid #373737;
`

const Login = styled.div``
const Button = styled.div`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  width: 50%;
`

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={UwannaTube} />
          UwannaTube
        </Logo>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreOutlinedIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Login>
        <Item>
          <SportsBaseballOutlinedIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <MovieCreationOutlinedIcon />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <OutlinedFlagIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item>
          <SettingsBrightnessOutlinedIcon />
          Light Mode
        </Item>
      </Wrapper>
    </Container>
  )
}

export default Menu
