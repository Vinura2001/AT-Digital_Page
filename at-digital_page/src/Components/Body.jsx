import React from 'react'
import BodyCss from '../CSS/Body.css'
import Button from './Button'
import ContentBox from './ContentBox';
import Question from './Question';
import { FaPlus } from "react-icons/fa6";

const Body = () => {
    const handleClick1 = () => {
        console.log('GET FREE CONSULTATION');
    };

    
  return (
    <div>
      <img className='Background_image' src="Hero Image.png" alt="" />

      <div className='GetConsultation_Container'>
        <p>We Crush Your Competitors, Goals, And Sales Records - Without The B.S.</p>
        <div className='Consultaion_button'><Button onClick={handleClick1} text="GET FREE CONSULTATION" /></div>
      </div>

      <div className='Content1'>
        <ContentBox 
            topic="Web & Mobile App Development"
            imageUrl="image 2.png"
            paragraph="Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online."
            buttonText="LEARN MORE"
            position="image"
        />
      </div>

      <div className='Content2'>
        <ContentBox 
            topic="Web & Mobile App Development"
            imageUrl="image 1.png"
            paragraph="Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business."
            buttonText="LEARN MORE"
            position="image1"
        />
      </div>

      <div className='QuestionContainer'>
        <h3 className='QuestionBox_topic'>Frequently asked questions</h3>
        <div className='Questions'>
            <div>
                <Question 
                    question="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
                    answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
                />
            </div>
            <div>
                <Question 
                    question="Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?"
                    answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
                />
            </div>
            <div>
                <Question 
                    question="Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?"
                    answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
                />
            </div>
        </div>
      </div>

    </div>
  )
}

export default Body
