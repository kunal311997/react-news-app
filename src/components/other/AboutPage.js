
import { Redirect } from 'react-router'
import * as constants from '../../constants/Constants'


export default function AboutPage() {

    return (
        <div className="about-page">
            <img alt='Profile image' className='circular-image'
                style={{ height: '100px',width: '100px' }}
                src='https://yt3.ggpht.com/yti/ANoDKi4oAivNqRn4Pt9DdGOFqJfZQcoxOCGbXLMwcHpBFg=s88-c-k-c0x00ffffff-no-rj-mo' />

            <h1>KUNAL PANDEY</h1>
            <h2>Software Engineer at Dew Solutions Pvt. Ltd.</h2>
            <p>An Experienced Android Developer with excellent programming skills in Android technologies, web services, and database technologies.
            An enthusiastic and ambitious learner with dreams in eyes.
            - Deep understanding of technology with a focus on delivering business solutions.
            - Proven ability to work as a self-motivated independent thinker or as a member of a team with positive results.

Android | kotlin | Java | MVVM | Dagger2 | Flutter | Springboot | MongoDB | Unit Testing | C | C++ | MySQL .</p>
        </div>
    )
}