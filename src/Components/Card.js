import React from 'react'
import Location from '../Assets/Location.svg'
import styled from 'styled-components'
import '../style.css'


const Styles = styled.div`
.container{
    display: flex;
    justify-content: space-around;
    width: 70%;
    margin: 40px auto;
    align-items: center;
    color: #2B283A;
    text-wrap: wrap;
    
}
.image-div{
    width: 200px;
}
.image-div img{
    width: 100%;
}
.text-div{
    width: 500px;
}
.first-div{   
    padding: 10px;
    display: flex;
    align-items: center;
   justify-content: space-between;
   margin-bottom: 5px;
}
.span-class{
    display: flex;
    align-items: center;
}
.icon{
    width: 15px;
}
.span-class p{
    font-size: 16px;
    letter-spacing: 2.5px;
}
a{
    color: #918e9b;
    font-size: 16px
}
.second-div h1{
    font-size: 24px;
    margin-bottom: 15px;
}
.date{
    font-size: 12px;
    line-height: 2;
}
.details{
    font-size: 14px;
    line-height: 2;
}
@media(max-width: 700px){
    .container{
        width: 100%;
        text-align: center;
        display: block;
       
    }
    .first-div{
      width: 100%;
      flex-direction: column;  
      font-size: 16px;
    }
    a{
        font-size: 14px;
    }
    .span-class{
        line-height: 3;
        margin: 0 auto;
    }
    .image-div{
        width: 40%;
        margin: 0 auto 10px;
        
    }
    .image-div img{
        width: 100%;
    }
    .text-div{
        width: 85%;
        margin: 0 auto;
        text-align: center;
    }
    .details{
        margin: 0 auto;
        font-size: 18px;
    }
}
@media(min-width: 701px){
    .container{
        width: 90%
    }
    .text-div{
  
        width: 60%;
    }
    .first-div{
        width: 100%;
    }

}

`

const Card = ({image, place, title, date, details, link}) => {
    return (
        <Styles>
            <section className='container'>
                <div className='image-div'>
                    <img src={image} alt='Location-img' />
                </div>
                <div className='text-div'>
                    <div className='first-div'>
                        <span className='span-class'>
                            <img src={Location} alt='location' className='icon' />
                            &nbsp;&nbsp;&nbsp;<p>{place}</p>
                        </span>
                        <a href={link}>View on Google maps</a>
                    </div>
                    <div className='second-div'>
                        <h1>{title}</h1>
                        <p className='date'><strong>{date}</strong></p>
                        <p className='details'>{details}</p>
                    </div>
                </div>

            </section>
        </Styles>
    )
}

export default Card