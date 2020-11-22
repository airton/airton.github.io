import Profile from 'components/Profile'
import HeadComponent from 'components/Head'

export default function Projects() {
  return (
    <div className="projects">
      <HeadComponent
        meta={{ title: 'Projetos' }}
        />
      <Profile/>
    </div>
  )
}
