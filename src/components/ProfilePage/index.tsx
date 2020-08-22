import React from 'react'

import Feed from '../Feed'
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles'

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Luiz Vital</h1>
        <h2>@luizfvital</h2>

        <p>Developer at VolutPro and Moben.</p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil.
          </li>
          <li>
            <CakeIcon />
            Nascido em 17 de fevereiro de 1979.
          </li>
        </ul>

        <Followage>
          <span>
            seguindo
            <strong>94</strong>
          </span>
          <span>
            <strong>672</strong>
            seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  )
}

export default ProfilePage
