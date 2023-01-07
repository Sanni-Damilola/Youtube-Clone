import React from 'react'
import styled  from 'styled-components'
import {BsThreeDotsVertical} from "react-icons/bs"
// import { GrFormCheckmark } from "react-icons/gr"

const Bodybox = () => {
  return (
    <Countainer>
     <Insidecountainer>
     <Holder>
      <Img>
      <Image src = "./image/coding.jpg" />
      </Img>  
      <Text1>
         <span>Coding Certification for Kids</span>
      </Text1>
      <Text2>
      <p>Limited Availability. Book Your Free Class <br /> While Slot Are Stil Available. </p>
      </Text2>
      <Icon>
      <BsThreeDotsVertical />
      </Icon>
      <Holder1>
        <Ad>
          <span>Ad</span>
        </Ad>
        <Text3>
        <span>BrightChamps</span>
        </Text3>
      </Holder1>
      </Holder>           

      <Holder2>
      <Img>
      <Image src = "./image/efootball.webp" />
      </Img>  
      <H>
        <Img1>
        <Image1 src = "./image/efootball1.jpg" />
        </Img1>
        <Text5>
         <span>Efootball 2022 4k Gaming Text <br /> 
         on RTX  2026 (MSI GF64 THIN)
         </span>
       </Text5>
      </H>
      <Text4>
        <span>Nad Noddy <br /> 
        1.4K views <span style={{fontSize: "15px"}}>.</span> 1 day ago 
        </span>
      </Text4>
      <Timebox>
        <span>7:42</span>
      </Timebox>
      </Holder2>  

      <Holder2>
      <Img>
      <Image src = "./image/champions.webp" />
      </Img>  
      <H>
        <Img1>
        <Image1 src = "./image/cham1.jpg" />
        </Img1>
        <Text5>
         <span>liverpool highlight<br /> 
         sarlah celebrates
         </span>
       </Text5>
      </H>
      <Text4>
        <span>
        7.9K views <span style={{fontSize: "15px"}}>.</span> 9 day ago </span>
      </Text4>
      <Timebox>
        <span>20:10</span>
      </Timebox>
      </Holder2> 

      <Holder2>
      <Img>
      <Image src = "./image/em.webp" />
      </Img>  
      <H>
        <Img1>
        <Image1 src = "./image/em1.jpg" />
        </Img1>
        <Text5>
         <span>Rabbit's Savage Comeback | 8 <br /> 
         Mile | TUNE
         </span>
       </Text5>
      </H>
      <Text4>
        <span>TUNE - Musical Moments <br /> 
        870K views <span style={{fontSize: "15px"}}>.</span> 6 day ago 
        </span>
      </Text4>
      <Timebox>
        <span>3:26</span>
      </Timebox>
      </Holder2>        
     </Insidecountainer>

     <Insidecountainer1>
     <Holder2>
      <Img>
      <Image src = "./image/micheal.webp" />
      </Img>  
      <H>
        <Img1>
        <Image1 src = "./image/m1.jpg" />
        </Img1>
        <Text5>
         <span>Micheal Jackson - They Don't |<br /> 
         Care About Us (prision Version...
         </span>
       </Text5>
      </H>
      <Text4>
        <span>Micheal Jackson <br /> 
        76M views <span style={{fontSize: "15px"}}>.</span> 11 years ago 
        </span>
      </Text4>
      <Timebox>
        <span>4:54</span>
      </Timebox>
      </Holder2>  

      <Holder2>
      <Img>
      <Image src = "./image/avatar.webp" />
      </Img>  
      <H>
        <Img1>
        <Image1 src = "./image/ava1.jpg" />
        </Img1>
        <Text5>
         <span>zuko amazing battle |<br /> 
         Avatar
         </span>
       </Text5>
      </H>
      <Text4>
        <span>Avatar: The Last Airbender <br /> 
        5.6M views <span style={{fontSize: "15px"}}>.</span> 1 year ago 
        </span>
      </Text4>
      <Timebox>
        <span>12:16</span>
      </Timebox>
      </Holder2>  

      <Holder2>
      <Img>
      <Image src = "./image/san.webp" />
      </Img>  
      <H>
        <Img1>
        <Image1 src = "./image/small san.jpg" />
        </Img1>
        <Text5>
         <span>CJ: Definitive Edition (PS5) <br /> 
         4K HDR Gameplay - (full Game)
         </span>
       </Text5>
      </H>
      <Text4>
        <span>FA GAMEZ <br /> 
        1.2M views <span style={{fontSize: "15px"}}>.</span> 5 months ago 
        </span>
      </Text4>
      <Timebox>
        <span>5:43:21</span>
      </Timebox>
      </Holder2> 

      <Holder2>
      <Img3>
      <Image3 src = "./image/075664ed-4d52-466a-bfb9-2738e5b6b839.jpg" />
      </Img3>  
      <H>
        <Img2>
        <Image2 src = "./image/efootball1.jpg" />
        </Img2>
        <Text5>
         <span>DA MI Software Engineer <br /> 
         Whatsapp: 08026073556
         </span>
       </Text5>
      </H>
      <Text4>
        <span>Damilola Sanni <br /> 
        3.4B views <span style={{fontSize: "15px"}}>.</span> 2 months ago 
        </span>
      </Text4>
      <Timebox>
        <span>2:24:11</span>
      </Timebox>
      </Holder2>        
     </Insidecountainer1>
    </Countainer>
  )
}

export default Bodybox

const Countainer = styled.div`flex-direction: column;
justify-content: center;
align-items: center;`

const Insidecountainer1 = styled.div`
margin-top: 47px;
margin-left: 13px;
display: flex;
justify-content: space-around;`

const Insidecountainer = styled.div`display: flex;
justify-content: space-around;`

const Holder = styled.div`width: 250px;
margin-right: 19px;
margin-left: 15px;`


const Img = styled.div``

const Img3 = styled.div`object-fit: contain;
`

const Text1 = styled.div`font-size: 12px;
padding: 0 2px;
font-weight: 300px;
font-weight: 600;
opacity: 70%;
position: relative;`

const Text3 = styled.div`font-size: 12px;
display: flex;
justify-content: center;
align-items: center;
margin-left: 5px;
font-weight: 600;
opacity: 50%;
`

const Holder1 = styled.div`display: flex;
`

const Ad = styled.div`padding: 2px 4px;
font-size: 11px;
background: #FBC03B;
color: white;
font-weight: bold;
border-radius: 2px;`

const Image = styled.img`height: 130px`

const Image3 = styled.img`height: 130px;
width: 236px;
object-fit: cointain;
`


const Text2 = styled.div`font-size: 12px;
font-weight: 600;
opacity: 50%;
`

const Icon = styled.div`position: absolute;
top: 250px;
left: 310px;`


 const H = styled.div`display: flex;`

 const Img1 = styled.div`
`

 const Image1 = styled.img` height: 30px;
 border-radius: 50px;
 `

 const Img2 = styled.div`
 object-fit: contain;
`

 const Image2 = styled.img` height: 30px;
 border-radius: 50px;
 `

const Text4 = styled.div`font-size: 12px;
font-weight: 600;
margin-left: 40px;
opacity: 50%;
`

const Text5 = styled.div`font-size: 12px;
padding: 0 2px;
font-weight: 600;
opacity: 90%;
font-weight: 600;
margin-left: 7px;
margin-left: 7px;`

const Timebox =  styled.div`padding: 0 4px;
background: #070D04;
position: absolute;
color: white;
font-size: 10px;
font-weight: 100px;
top: 113px;
right: 23px;
`

const Holder2 = styled.div`width: 250px;
position: relative;` 
