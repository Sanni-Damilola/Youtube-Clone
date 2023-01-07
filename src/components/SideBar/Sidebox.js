import React from 'react'
import styled from 'styled-components'
import { HiHome } from 'react-icons/hi/'
import { MdOutlineExplore,MdOutlineSubscriptions,MdOutlineVideoLibrary } from 'react-icons/md'
import { TiFlash } from 'react-icons/ti'

const sidebox = () => {
  return (
    <Countainer>
      <Holder>
      <Icon>
      <HiHome />
      </Icon>
      <Text>
          Home
      </Text>
      </Holder>

      <Holder>
      <Icon>
      <MdOutlineExplore />
      </Icon>
      <Text>
          Explore
      </Text>
      </Holder>

      <Holder>
      <Icon>
      <TiFlash />
      </Icon>
      <Text>
          Shorts
      </Text>
      </Holder>

      <Holder>
  
      <Icon>
      <MdOutlineSubscriptions />
      </Icon>
      <Text>
          Subscriptions
      </Text>
      </Holder>

      <Holder>
      <Icon>
      <MdOutlineVideoLibrary />
      </Icon>
      <Text>
          Libary
      </Text>
      </Holder>

    </Countainer>
  )
}

export default sidebox


const Countainer = styled.div`
flex-direction: column;
display: flex;
align-items: center;
justify-content: center;
justify-content: space-around;
height: 100%;
`

const Icon = styled.div`font-size: 20px;`

const Text = styled.div`padding: 0 10px;
font-size: 10px;`

const Holder = styled.div`
flex-direction: column;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`
