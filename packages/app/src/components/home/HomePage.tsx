import React, { ChangeEventHandler } from 'react';
import Logo from '../../assets/icons/Logo';
// import Grid from '@material-ui/core/Grid';
import HomeStyles from '../../assets/styles/HomeStyles.css'
import  SearchBar from './components/SearchBar';
import { HomePageCompanyLogo, HomePageRandomJoke, WelcomeTitle, HomePageToolkit, HeaderWorldClock } from '@backstage/plugin-home';
import { AppBar, Toolbar } from '@material-ui/core';
import { Header } from '@backstage/core-components';


export const HomePage = () => {
  return (<>

    <Toolbar>
      <Header title={<WelcomeTitle />} subtitle="SUBTITULO" />
    </Toolbar>

    <div style={{ display: 'flex', alignItems: 'center', flexFlow: 'column', height: '100vh' }}>
      <HomePageCompanyLogo logo={<Logo />} />
      <SearchBar value='' onChange={search} />
    </div>


  </>
  )
}

function search() {

}