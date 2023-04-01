import IconItem from 'components/IconItem/IconItem'
import { icons } from 'Mocks/icons'
import { NavLink } from 'react-router-dom'

import './styles.scss'
const About = () => {
  const date = new Date().getFullYear()
	const age = date - 1993
  

  return (
    <section className='about'>
      <div className='container'>
        <div className='about_content'>
          <p>
            {' '}
            Hello there! My name is <span>Refat</span>, and I'm a {age} year old front-end
            developer based in Crimea.
          </p>
          <p>
            {' '}
            My passion for technology and design led me to pursue a career in
            front-end development. I specialize in creating responsive and
            user-friendly websites and applications using{' '}
            <span>HTML, CSS, and JavaScript</span>.
          </p>
          <p>
            {' '}
            I'm also proficient in various front-end frameworks and tools, such
            as:
          </p>
          <div className='about_technologies'>
            {icons.map((icon) => {
              return <IconItem id={icon.id} text={icon.text} icon={icon.icon} />
            })}
          </div>
          <p>
            I can read documentation and use various libraries and ready-made
            solutions.
          </p>
          <p>
            I do not stand still and continue to study various interesting
            technologies.
          </p>
          <p>
            I take a user-centered approach to my work, focusing on creating
            engaging and accessible experiences for all users. I enjoy
            collaborating with other developers, designers, and stakeholders to
            bring projects to life and achieve our shared goals.
          </p>
          <p>
            In my free time, I like to stay up-to-date on the latest trends and
            best practices in front-end development by attending webinars,
            reading industry blogs, and contributing to open-source projects.
            I'm also passionate about growing plants and hiking.
          </p>{' '}
          <p>I'm also passionate about growing plants and hiking.</p>
          <p>
            Thank you for visiting my portfolio, and I hope you enjoy exploring{' '}
            <NavLink to='/myworks'>my work!</NavLink>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
