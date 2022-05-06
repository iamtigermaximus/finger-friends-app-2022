import React from 'react'

import { Button, Col, Container, Row } from 'reactstrap'

import { Link } from 'react-router-dom'
import AvatarList from '../../components/AvatarList/AvatarList'
import PATHS from '../../utils/paths'
import Separator from '../../components/Separator/Separator'
import HeroBackground from '../../components/Hero/HeroBackground'
import { calculateTotalCombinations } from '../../utils/utils'
import { generateRandomAvatarIds } from '../../utils/id-utils'

const LAMBDA_URL = process.env.REACT_APP_LAMBDA_URL
const BUY_ME_A_COFFEE_URL = process.env.REACT_APP_BUY_ME_A_COFFEE_URL

function Home() {
  return (
    <>
      <main>
        <div className='position-relative'>
          <section className='section section-shaped pb-250'>
            <HeroBackground />
            <Container className='py-lg-md d-flex'>
              <div className='col px-0'>
                <Row>
                  <Col lg={6}>
                    <h1 className='display-3 text-white'>
                      Saggie's Finger Friends{' '}
                      <span>Fun avatars for everyone</span>
                    </h1>
                    <p className='lead text-white'>
                      Create your own thumb friend avatar by combining different
                      facial expressions, there are millions of possible
                      combinations.
                    </p>
                    <p className='lead text-white'>
                      Free your creativity with a total of
                      <br />
                      {calculateTotalCombinations().toLocaleString()} possible
                      combinations. 😲🙀🆒
                    </p>
                  </Col>
                  <Col lg={6}>
                    <div className='thumb-friend-image d-none d-lg-block'>
                      <img
                        alt='Thumb friend main page'
                        className='rounded-circle'
                        src={`${LAMBDA_URL}/svg?id=${generateRandomAvatarIds(
                          1
                        )}`}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            <Separator />
          </section>
        </div>
        <section className='mt--200'>
          <Container>
            <AvatarList amount={18} />
          </Container>
        </section>
      </main>
    </>
  )
}

export default Home
